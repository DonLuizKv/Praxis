import { Arl, Binnacle, CoverLetter, CV, Scenary } from "./document";

export type User = {
    uid?: number;
    username: string;
    email: string;
    password?: string;
    state: boolean;
    role: string;
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