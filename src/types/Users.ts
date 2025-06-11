export interface User {
    id: number;
    role: string;
}

export type Student = {
    id: number;
    name: string;
    email: string;
    identity_document: number;
    scenary: Scenary;
    state: boolean;
    profile_photo: string | File ;
    documents: {
        arl: Document;
        coverLetter: Document;
    };
    binnacles: Binnacle[];
};

export type Document = {
    name: string;
    file_path: string;
} | null

export type Binnacle = {
    name: string;
    file_path: string | File;
}

export type Scenary = {
    id: number;
    name: string;
    address: string;
}

export type DataChangeStudent = {
    name: string;
    email: string;
    document: number;
    profilePhoto: string | File | null;
}

export interface DataUser {
    students: Student[],
    scenarys: Scenary[],
    user: User
}
