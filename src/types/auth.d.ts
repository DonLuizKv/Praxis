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
    username: string,
    email: string,
    token: string
}

export type VerifyResponse = {
    verification: boolean;
}