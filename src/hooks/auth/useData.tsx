"use client"

import { getStudents, Verify, getScenarys } from "@/utils/DataSync";
import { DataUser } from "@/types/Users";
import { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "../server/useSocket";
import Cookies from "js-cookie";

interface ContextDataProps {
    data: DataUser;
    setData: (data: DataUser) => void;
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    isLoggingOut: boolean;
    setIsLoggingOut: (value: boolean) => void;
}

const contextData = createContext<ContextDataProps | null>(null);

export const useData = () => {
    const context = useContext(contextData);
    if (!context) throw new Error("no puedes utilizarlo tantas veces");
    return context;
};

const defaultData: DataUser = {
    students: [],
    scenarys: [],
    user: null
}

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<DataUser>(defaultData);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
    const { socket } = useSocket();

    const verifyAuth = async () => {
        const token = Cookies.get("token");
        if (!token) {
            setIsAuthenticated(false);
            return;
        }

        try {
            const verify = await Verify(token);
            if (verify.ok) {
                setIsAuthenticated(true);
                const data = await verify.json();
                setUserData((prevDataUser: DataUser) => {
                    return {
                        ...prevDataUser,
                        user: data,
                    }
                });
                return;
            }
            setIsAuthenticated(false);
            Cookies.remove("token");
        } catch (error) {
            console.log(error);
            setIsAuthenticated(false);
            Cookies.remove("token");
        }
    };

    const getData = async () => {
        const token = Cookies.get("token");
        if (!token) return;

        try {
            setIsLoading(true);
            const data_response = await getStudents();
            const scenary_response = await getScenarys();
            setUserData((prevDataUser: DataUser) => {
                return {
                    ...prevDataUser,
                    students: data_response,
                    scenarys: scenary_response
                }
            });

            console.log(userData);

            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        verifyAuth();
        if (isAuthenticated) {
            getData();
            socket?.emit("client_connected", { token: Cookies.get("token") });
        }
    }, [isAuthenticated]);

    useEffect(() => {
        console.log("userData", userData);
    }, [userData])

    useEffect(() => {
        socket?.on("UPDATE_DATA", (data) => {
            const { replace, ...rest } = data;
            const payload = {
                ...rest,
                user: userData.user
            }

            if (replace) {
                setUserData(payload);
                return;
            }

            setUserData(prevUser => {
                const updatedData = { ...prevUser };

                Object.entries(rest).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        updatedData[key] = [...(prevUser[key] || []), ...(value || [])];
                    } else {
                        updatedData[key] = value;
                    }
                });

                return updatedData;
            });
        });

        return () => {
            socket?.off("UPDATE_DATA");
        }
    }, [socket, userData]);

    return (
        <contextData.Provider value={{ data: userData, isAuthenticated, setData: setUserData, setIsAuthenticated, isLoading, setIsLoading, isLoggingOut, setIsLoggingOut }}>
            {children}
        </contextData.Provider>
    );
};