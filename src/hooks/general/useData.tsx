"use client";

import { Backend } from "@/api/Requests";
import { CV, Scenary } from "@/types/document";
import { Student } from "@/types/user";
import { createContext, useContext, useEffect, useState } from "react";

type DataPraxis = {
    Students: Student[];
    Scenarys: Scenary[];
    CVs: CV[];
};

interface DataContextProps {
    data: DataPraxis | null;
    setData: (newData: DataPraxis) => void;
    getData: () => Promise<void>;
    updateData: (newData: Partial<DataPraxis>) => void;
    deleteData: (key: keyof DataPraxis, id: number) => void;
    loadingData: boolean;
}

const DataContext = createContext<DataContextProps | null>(null);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error("useData debe usarse dentro de un DataProvider");
    return context;
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<DataPraxis>({
        Students: [],
        Scenarys: [],
        CVs: []
    });

    const [loadingData, setLoadingData] = useState<boolean>(false);

    const getData = async () => {
        setLoadingData(true);
        try {
            const [students] = await Promise.all([
                Backend.Student.getAll(),
            ]);

            setData({
                Students: students || [],
                Scenarys: [],
                CVs: []
            });

        } catch (error) {
            console.error("Error al obtener datos:", error);
        } finally {
            setLoadingData(false);
        }
    };

    const updateData = (newData: Partial<DataPraxis>) => {
        setData(prev => (
            prev ? { ...prev, ...newData } : (newData as DataPraxis)
        ));
    };

    const deleteData = <K extends keyof DataPraxis>(entity: K, id: number) => {
        setData(prev => {
            if (!prev) return prev;

            const updatedList = prev[entity].filter(
                (item) => "id" in item && item.id !== id
            );

            return { ...prev, [entity]: updatedList };
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <DataContext.Provider value={{ data, setData, getData, updateData, deleteData, loadingData }}>
            {children}
        </DataContext.Provider>
    );
};
