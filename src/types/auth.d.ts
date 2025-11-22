import { User } from "./user";

export type RegisterBody = User;

export type RegisterResponse = {
    message: string;
}

export type LoginBody = {
    email: string,
    password: string,
}

export type LoginResponse = {
    role: string,
    status: boolean,
}

export type VerifyResponse = {
    userData: User | null,
}