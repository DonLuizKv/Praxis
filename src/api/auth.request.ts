import { API } from "./API"
import { LoginBody, LoginResponse, RegisterBody, RegisterResponse } from "@/types/auth";
import { User } from "@/types/user";

export const Register = (data: RegisterBody) => API<RegisterBody, RegisterResponse>({
    endpoint: "/auth/register",
    props: {
        method: "POST",
        body: data
    }
})

export const Login = (data: LoginBody) => API<LoginBody, LoginResponse>({
    endpoint: "/auth/login",
    credentials: "include",
    props: {
        method: "POST",
        body: data
    }
})

export const Verify = () => API<null, User>({
    endpoint: "/auth/verify",
    credentials: "include",
    props: { method: "GET" },
})

export const Logout = () => API<null, null>({
    endpoint: "/auth/logout",
    credentials: "include",
    props: { method: "POST" },
})