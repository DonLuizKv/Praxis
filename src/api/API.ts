"use client"
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

interface APIProps<payload> {
    endpoint: string;
    credentials?: "include" | "omit" | "same-origin";
    props?: {
        method?: "GET" | "POST" | "PUT" | "DELETE";
        headers?: Record<string, string>;
        body?: payload;
    };
}

export async function API<payload = unknown, Response = unknown>({ endpoint, credentials, props = {} }: APIProps<payload>): Promise<Response> {
    const { method = "GET", headers = {}, body } = props;

    const res = await fetch(`${API_URL}${endpoint}`, {
        method,
        credentials,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    return res.json();
}
