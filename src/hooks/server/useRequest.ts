import { useState, useCallback } from "react";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface ApiOptions<TBody = unknown> {
    url: string;
    method?: HttpMethod;
    headers?: Record<string, string>;
    body?: TBody;
}

export function useAPI<TResponse = unknown>() {
    const [data, setData] = useState<TResponse | null>(null);
    const [error, setError] = useState<string | Error | null>(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async <TBody = unknown>(options: ApiOptions<TBody>) => {
        const { url, method = "GET", body, headers } = options;
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    ...headers,
                },
                body: body ? JSON.stringify(body) : undefined,
            });

            if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

            const result = (await response.json()) as TResponse;
            setData(result);
            return result;
        } catch (err: unknown) {
            setError(err as Error);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return { data, error, loading, request };
}
