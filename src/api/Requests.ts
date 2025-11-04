import Cookies from "js-cookie";
import { API } from "@/api/API"; // tu función API genérica
import { User } from "@/types/user";
import { LoginBody, LoginResponse, RegisterResponse, VerifyResponse } from "@/types/auth";
import { Router } from "next/router";

export const Backend = {
    Auth: {
        register: (data: User) => API<User, RegisterResponse>({
            endpoint: "/auth/register",
            props: {
                method: "POST",
                body: data
            }
        }),

        login: (data: LoginBody) => API<LoginBody, LoginResponse>({
            endpoint: "/auth/login",
            props: {
                method: "POST",
                body: data
            }
        }),

        verify: (token: string) => API<null, VerifyResponse>({
            endpoint:"/auth/verify",
            props:{
                method:"POST",
                headers: { "Authorization": `Bearer ${token}` }
            }
        }),

        logout: (router: Router) => {
            Cookies.remove("token");
            router.push("/");
        },
    },

    // Student: {
    //     getAll: () => API<null, any>(
    //         "/student",
    //         "GET",
    //         undefined,
    //         tokenHeader()
    //     ),

    //     getById: (id: number) => API<null, any>(
    //         `/student/${id}`,
    //         "GET",
    //         undefined,
    //         tokenHeader()
    //     ),

    //     update: (id: number, data: DataChangeStudent) => API(
    //         `/student/${id}`,
    //         "PUT",
    //         { id, data },
    //         {
    //             "Content-Type": "application/json",
    //             ...tokenHeader(),
    //         }
    //     ),

    //     uploadDocument: (data: { student_id: number; name: string; file: File }) => {
    //         const formData = new FormData();
    //         formData.append("file", data.file);
    //         formData.append("name", data.name);
    //         formData.append("student_id", data.student_id.toString());

    //         return API<FormData, any>(
    //             "/files/documents",
    //             "POST",
    //             formData,
    //             tokenHeader()
    //         );
    //     },

    //     updateDocument: (id: number, file: File) => {
    //         const formData = new FormData();
    //         formData.append("file", file);
    //         formData.append("student_id", id.toString());

    //         return API<FormData, any>(
    //             `/files/documents/${id}`,
    //             "PUT",
    //             formData,
    //             tokenHeader()
    //         );
    //     },
    // },

    // Scenary: {
    //     getAll: () => API<null, any>(
    //         "/scenary",
    //         "GET",
    //         undefined,
    //         tokenHeader()
    //     ),

    //     create: (data: { name: string; address: string }) => API(
    //         "/scenarys",
    //         "POST",
    //         data,
    //         {
    //             "Content-Type": "application/json",
    //             ...tokenHeader(),
    //         }
    //     ),
    // },
};

