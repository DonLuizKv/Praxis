import { API } from "@/api/API";
import { Student, User } from "@/types/user";
import { LoginBody, LoginResponse, RegisterResponse, VerifyResponse } from "@/types/auth";
import { Scenary } from "@/types/document";

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

        verify: () => API<null, VerifyResponse>({
            endpoint: "/auth/verify",
            credentials: "include",
            props: { method: "GET" },
        }),

        logout: () => API<null, null>({
            endpoint: "/auth/logout",
            props: { method: "POST" },
        }),
    },

    Student: {
        getAll: () => API<null, Student[]>({
            endpoint: "/student",
            credentials: "include",
            props: {
                method: "GET",
            }
        }),
    },

    Scenary: {
        getAll: () => API<null, Scenary[]>({
            endpoint: "/scenary",
            props: {
                method: "GET",
                headers: { credentials: "include" },
            }
        }),
    },
};

