import { useState, useCallback } from "react";
import { Backend } from "@/api/Requests";

type UseFetchReturn = {
    Call: <T>(fn: () => Promise<T>) => Promise<T | undefined>;
    loading: boolean;
    error: string | null;
};

export const useFetch = (): UseFetchReturn & { Backend: typeof Backend } => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const Call = useCallback(async <T>(fn: () => Promise<T>): Promise<T | undefined> => {
        setLoading(true);
        setError(null);

        try {
            const result = await fn();
            return result;
        } catch (err: unknown) {
            console.error(err);

            const message =
                err instanceof Error
                    ? err.message
                    : typeof err === "string"
                        ? err
                        : "Ocurrió un error inesperado.";

            setError(message);
            return undefined;
        } finally {
            setLoading(false);
        }
    }, []);

    return { Backend, Call, loading, error };
};
