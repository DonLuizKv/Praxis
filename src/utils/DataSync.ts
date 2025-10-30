import { DataChangeStudent } from "@/types/Users";
import Cookies from "js-cookie";

interface registerProps {
    name: string,
    email: string,
    password: string,
    identity_document: number,
    state: boolean,
    role: string
}

interface uploadDocumentProps {
    student_id: number,
    name: string,
    file: File,
}

export async function getStudents() {
    const petition = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`
        }
    });
    const response = await petition.json();

    if (!petition.ok) throw new Error(response.error || "Error al obtener los datos de los estudiantes");

    return response.students;
}

export async function getScenarys() {
    const petition = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scenary`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`
        }
    });

    const response = await petition.json();

    if (!petition.ok) throw new Error(response.error || "Error al obtener los datos de los escenarios");

    return response.scenarys;
}

export async function createScenary(data: { name: string, address: string }) {
    try {
        const petition = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scenarys`, {
            method: "POST",
            headers: {
                "Autorization": `Bearer ${Cookies.get("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const response = await petition.json();

        if (!petition.ok) throw new Error(response.error || "Error al iniciar sesión");
        return response;
    } catch (error) {
        return { error: error.message || "Error al iniciar sesión" };
    }
}

export async function Login(data: { email: string, password: string }) {
    try {
        const petition = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const response = await petition.json();

        console.log(response)

        if (!petition.ok) throw new Error(response.error || "Error al iniciar sesión");
        
        return response;
    } catch (error) {
        return { error: error.message || "Error al iniciar sesión" };
    }
}

export async function Register(data: registerProps) {
    try {
        const petition = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const response = await petition.json();

        if (!petition.ok) throw new Error(response.error || "Error al registrar usuario");
        return response;
    } catch (error) {
        return { error: error.message || "Error al registrar usuario" };
    }
}

export async function Verify(token: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    return response;
}


export async function getStudent(id: number) {
    const petition = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`
        }
    });
    const response = await petition.json();

    if (!petition.ok) throw new Error(response.error || "Error al obtener los datos del estudiante");
    return response;
}

export async function Logout(router) {
    Cookies.remove("token");
    router.push("/");
}

export async function uploadDocument(data: uploadDocumentProps) {

    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("name", data.name);
    formData.append("student_id", data.student_id.toString());

    try {
        const petition = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/files/documents`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${Cookies.get("token")}`
            },
            body: formData,
        });

        const response = await petition.json();
        if (!petition.ok) throw new Error(response.error || "Error al subir documento");
        return response;
    } catch (error) {
        return { error: error.message || "Error al subir documento" };
    }
}

export async function updateDocument(id: number, file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("student_id", id.toString());

    try {
        const petition = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/files/documents/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${Cookies.get("token")}`
            },
            body: formData,
        });

        const response = await petition.json();
        if (!petition.ok) throw new Error(response.error || "Error al actualizar documento");
        return response;
    } catch (error) {
        return { error: error.message || "Error al actualizar documento" };
    }
}

export async function updateStudent(id: number, data: DataChangeStudent) {
    try {
        const petition = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get("token")}`
            },
            body: JSON.stringify({
                id,
                data
            }),
        });

        const response = await petition.json();

        if (!petition.ok) throw new Error(response.error || "Error al registrar usuario");
        return response;

    } catch (error) {
        return { error: error.message || "Error al actualizar los datos del estudiante" };
    }
}