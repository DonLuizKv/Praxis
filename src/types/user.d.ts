import { Arl, Binnacle, CoverLetter, CV, Scenary } from "./document";

export type User = {
    uid?: number;
    username: string;
    email: string;
    active: boolean;
    role: Role;
}

export type Student = User & {
    identification: number;
    avatar: string | File | null;

    scenary: Scenary;
    documents: {
        arl: Arl,
        coverLetter: CoverLetter,
        cv: CV
    };
    binnacles: Binnacle[];
};

export type Admin = User;
export type Teacher = User;

export type Role = "student" | "admin";
