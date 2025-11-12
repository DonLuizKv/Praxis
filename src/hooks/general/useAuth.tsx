// "use client"

// import { getStudents, Verify, getScenarys } from "@/utils/DataSync";
// import { createContext, useContext, useEffect, useState } from "react";
// import { useSocket } from "../server/useSocket";
// import Cookies from "js-cookie";
// import { Student, User } from "@/types/user";
// import { Scenary } from "@/types/document";

// interface DataUser {
//     students: Student[],
//     scenarys: Scenary[],
//     user: User | null
// }

// const defaultData: DataUser = {
//     students: [],
//     scenarys: [],
//     user: null
// }

// interface ContextDataProps {
//     data: DataUser;
//     setData: (data: DataUser) => void;
//     isAuthenticated: boolean;
//     setIsAuthenticated: (value: boolean) => void;
//     isLoading: boolean;
//     setIsLoading: (value: boolean) => void;
//     isLoggingOut: boolean;
//     setIsLoggingOut: (value: boolean) => void;
// }

// const contextData = createContext<ContextDataProps | null>(null);

// export const useData = () => {
//     const context = useContext(contextData);
//     if (!context) throw new Error("no puedes utilizarlo tantas veces");
//     return context;
// };

// export const DataProvider = ({ children }: { children: React.ReactNode }) => {
//     const [userData, setUserData] = useState<DataUser>(defaultData);
//     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//     const [isLoading, setIsLoading] = useState<boolean>(true);
//     const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
//     const { socket } = useSocket();

//     const verifyAuth = async () => {
//         const token = Cookies.get("token");
//         if (!token) {
//             setIsAuthenticated(false);
//             return;
//         }

//         try {
//             const verify = await Verify(token);
//             if (verify.ok) {
//                 setIsAuthenticated(true);
//                 const data = await verify.json();
//                 setUserData((prevDataUser: DataUser) => {
//                     return {
//                         ...prevDataUser,
//                         user: data,
//                     }
//                 });
//                 return;
//             }
//             setIsAuthenticated(false);
//             Cookies.remove("token");

//         } catch (error) {
//             console.log(error);
//             setIsAuthenticated(false);
//             Cookies.remove("token");
//         }
//     };

//     const getData = async () => {
//         const token = Cookies.get("token");
//         if (!token) return;

//         try {
//             setIsLoading(true);
//             const data_response = await getStudents();
//             const scenary_response = await getScenarys();
//             setUserData((prevDataUser: DataUser) => {
//                 return {
//                     ...prevDataUser,
//                     students: data_response,
//                     scenarys: scenary_response
//                 }
//             });

//             console.log(userData);

//             setIsLoading(false);
//         } catch (error) {
//             console.log(error);
//             setIsLoading(false);
//         }
//     }

//     useEffect(() => {
//         verifyAuth();
//     }, []);

//     useEffect(() => {
//         if (!isAuthenticated) return;
//         getData();
//         socket?.emit("client_connected", { token: Cookies.get("token") });
//     }, [isAuthenticated]);

//     useEffect(() => {
//         socket?.on("UPDATE_DATA", (data) => {
//             const { replace, ...rest } = data;
//             const payload = {
//                 ...rest,
//                 user: userData.user
//             }

//             if (replace) {
//                 setUserData(payload);
//                 return;
//             }

//             setUserData(prevUser => {
//                 const updatedData = { ...prevUser };

//                 Object.entries(rest).forEach(([key, value]) => {
//                     if (Array.isArray(value)) {
//                         updatedData[key] = [...(prevUser[key] || []), ...(value || [])];
//                     } else {
//                         updatedData[key] = value;
//                     }
//                 });

//                 return updatedData;
//             });
//         });

//         return () => {
//             socket?.off("UPDATE_DATA");
//         }
//     }, [socket, userData]);

//     return (
//         <contextData.Provider
//             value={{
//                 data: userData,
//                 isAuthenticated,
//                 setData: setUserData,
//                 setIsAuthenticated,
//                 isLoading,
//                 setIsLoading,
//                 isLoggingOut,
//                 setIsLoggingOut
//             }}>
//             {children}
//         </contextData.Provider>
//     );
// };

// "use client"

// import { User } from "@/types/user";
// import { createContext, useContext, useState, useEffect } from "react"
// import { Backend } from "@/api/Requests";

// interface AuthContextProps {
//     user: User | null,
//     isAuthenticated: boolean;
//     isVerifying: boolean;
//     setIsAuthenticated: (value: boolean) => void;
//     verify: () => void;
// }

// const AuthContext = createContext<AuthContextProps | null>(null);

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
//     return context;
// };

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//     const [isVerifying, setIsVerifying] = useState<boolean>(false);
//     const [user, setUser] = useState<User | null>(null);

//     const verify = async () => {
//         setIsVerifying(!isVerifying);
//         try {
//             const req = await Backend.Auth.verify();

//             if (!req.userData) {
//                 setUser(null);
//                 setIsAuthenticated(false)
//             }

//             setUser(req.userData);
//             setIsAuthenticated(true);

//         } catch {
//             setUser(null);
//             setIsAuthenticated(false);
//         } finally {
//             setIsVerifying(false);
//         }
//     };

//     useEffect(() => {
//         console.log(isAuthenticated);
//         console.log(user);
//     }, [isAuthenticated])

//     return (
//         <AuthContext.Provider value={{ user, isAuthenticated, isVerifying, setIsAuthenticated, verify }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

"use client";

import { User } from "@/types/user";
import { createContext, useContext, useState, useEffect } from "react";
import { Backend } from "@/api/Requests";

interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    isVerifying: boolean;
    verify: () => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
    return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isVerifying, setIsVerifying] = useState(true);

    const verify = async () => {
        setIsVerifying(true);
        try {
            const res = await Backend.Auth.verify();

            if (res?.userData) {
                setUser(res.userData);
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
            }
        } catch {
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setIsVerifying(false);
        }
    };

    const logout = async () => {
        try {
            await Backend.Auth.logout();
        } finally {
            setUser(null);
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        verify();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isVerifying, verify, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
