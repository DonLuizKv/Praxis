import { Arl, Binnacle, CoverLetter, CV, Scenary } from "./document";

export type User = {
    username: string;
    email: string;
    active: boolean;
    role: Role;
}

export type Student = User & {
    identification: number;
    avatar: string | null;

    scenary: Scenary;
    documents: {
        arl: Arl | null;
        cover_letter: CoverLetter | null;
        cv: CV | null;
    };
    binnacles: Binnacle[];
};

export type Admin = User;
export type Role = "student" | "admin";
