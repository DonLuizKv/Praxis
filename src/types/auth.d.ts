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
    uid: string,
    name: string,
    email: string,
    role: string,
}

export type VerifyResponse = {
    userData: User | null,
}