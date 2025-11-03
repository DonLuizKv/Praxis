type Document = {
    name: string;
    file_path: string;
    data?: File;
}

export type Arl = Document;
export type CoverLetter = Document;
export type Binnacle = Document;

export type CV = {
    id:string;
    student_id:string;
}

export type Scenary = {
    id: number;
    name: string;
    address: string;
    description: string;
    location?: string;
}