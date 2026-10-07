import { Student, User } from "@/types/user";
import { API } from "./API";

export const UserRequests = {
    getAll: () => API<null, Student[]>({
        endpoint: "/users",
        props: { method: "GET" }
    })
}

export const AdminRequests = {
    getAll: () => API<null, User[]>({ endpoint: "/admin", props: { method: "GET" } })
}