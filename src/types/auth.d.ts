import { Role, User } from "./user";

export type RegisterBody = {
    username: string,
    email: string,
    password: string,
};

export type RegisterResponse = string;

export type LoginBody = {
    email: string,
    password: string,
}
export type LoginResponse = {
    access_token: string;
    role: Role;
};

export type RefreshResponse = {
    access_token: string;
};

export type VerifyResponse = {
    userData: Omit<User, "password"> | null,
}

export type LogoutResponse = {
    message: string;
}

