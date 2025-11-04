const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

interface APIProps<payload> {
    endpoint: string;
    props?: {
        method?: "GET" | "POST" | "PUT" | "DELETE";
        headers?: Record<string, string>;
        body?: payload;
    };
}

export async function API<payload = unknown, Response = unknown>({ endpoint, props = {}}: APIProps<payload>): Promise<Response> {
    const { method = "GET", headers = {}, body } = props;

    const res = await fetch(`${API_URL}${endpoint}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        cache: "no-store",
    });

    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    return res.json();
}
