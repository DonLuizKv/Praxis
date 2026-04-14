import { Role, User } from "./user";

export type RegisterBody = User;

export type RegisterResponse = {
    message: string;
}

export type LoginBody = {
    email: string,
    password: string,
}

export type LoginResponse = Role;
export type RegisterResponse = string;

export type VerifyResponse = {
    userData: Omit<User, "password"> | null,
}