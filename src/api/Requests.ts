import { API } from "@/api/API";
import { Student, User } from "@/types/user";
import { LoginBody, LoginResponse, RegisterResponse, VerifyResponse } from "@/types/auth";
import { Scenary } from "@/types/document";

export const Backend = {
    Auth: {
        register: (data: any) => API<any, RegisterResponse>({
            endpoint: "/auth/register",
            props: {
                method: "POST",
                body: data
            }
        }),

        login: (data: LoginBody) => API<LoginBody, LoginResponse>({
            endpoint: "/auth/login",
            credentials: "include",
            props: {
                method: "POST",
                body: data
            }
        }),

        verify: () => API<null, User>({
            endpoint: "/auth/verify",
            credentials: "include",
            props: { method: "GET" },
        }),

        logout: () => API<null, null>({
            endpoint: "/auth/logout",
            credentials: "include",
            props: { method: "POST" },
        }),
    },

    Users: {
        getAll: () => API<null, User[]>({
            endpoint: "/users",
            credentials: "include",
            props: {
                method: "GET",
            }
        }),

        getOne: (id: string) => API<string, User>({
            endpoint: `/users/${id}`,
            credentials: "include",
            props: {
                method: "GET",
            }
        }),

        create: (data: any) => API<any, User>({
            endpoint: "/users",
            credentials: "include",
            props: {
                method: "POST",
                body: data
            }
        }),

        update: (id: string, data: any) => API<any, User>({
            endpoint: `/users/${id}`,
            credentials: "include",
            props: {
                method: "PUT",
                body: data
            }
        }),

        delete: (id: string) => API<string, User>({
            endpoint: `/users/${id}`,
            credentials: "include",
            props: {
                method: "DELETE",
            }
        }),
    },

    Student: {
        getAll: () => API<null, Student[]>({
            endpoint: "/students",
            credentials: "include",
            props: {
                method: "GET",
            }
        }),
    },

    Scenary: {
        getAll: () => API<null, Scenary[]>({
            endpoint: "/scenary",
            credentials: "include",
            props: {
                method: "GET",
            }
        }),
    },
};

