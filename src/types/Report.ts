import { Student } from "./Users";

export type Report = {
    title: string;
    boss?: string;
    typeReport: "list" | "document" | "scenary" | "custom";
    parameters: {
        fields: string[];
        export: "pdf" | "excel";
    }
    dataToConfigure: Student[];
}