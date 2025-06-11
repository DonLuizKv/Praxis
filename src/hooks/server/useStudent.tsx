import { useSocket } from "./useSocket";
import { useData } from "@/hooks/auth/useData";
import Cookies from "js-cookie";

export const useStudent = () => {
    const { socket } = useSocket();
    const { data, setData } = useData();

    const handleDelete = async (id: string | number) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${Cookies.get("token")}`
            }
        });
        
        const data_response = await response.json();

        if (!response.ok) {
            throw new Error(data_response.error || "Error al eliminar el estudiante");
        }

        const studentsFiltered = data.students.filter(student => student.id !== id)
        const payload = {
            ...data,
            students: studentsFiltered
        }

        setData(payload);

        socket?.emit("UPDATE_DATA", {
            ...payload,
            replace: true
        });

        return data_response;
    }

    const handleUpdate = async (id: string | number, dataChange) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${Cookies.get("token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataChange)
        });

        const data_response = await response.json();

        if (!response.ok) {
            throw new Error(data_response.error || "Error al inhabilitar el estudiante");
        }

        const updatedStudents = data.students.map(student => 
            student.id === id ? { ...student, ...dataChange } : student
        );

        const { user, ...rest } = data;

        const payload = {
            ...rest,
            students: updatedStudents
        }

        setData({
            ...rest,
            user,
        });

        socket?.emit("UPDATE_DATA", {
            ...payload,
            replace: true
        });

        return data_response;
    }

    return {
        handleDelete,
        handleUpdate
    }
}
