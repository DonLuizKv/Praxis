import { useCallback, useState } from "react";

export function useFileUpload() {
    // TODO: definimos que se obtiene y que se retorna
    const [progress, setProgress] = useState(0);
    const [propertiesFile, setPropertiesFile] = useState<{ name: string, size: number }>({ name: "", size: 0 });

    const uploadFile = useCallback(async (file: File) => {
        try {
            const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
            if (!allowedTypes.includes(file.type)) {
                throw new Error("Tipo de archivo no permitido");
            }

            const formData = new FormData();
            formData.append("file", file);

            setPropertiesFile({ name: file.name, size: file.size });

            // Simular progreso
            for (let i = 0; i <= 100; i += 20) {
                await new Promise((res) => setTimeout(res, 100));
                setProgress(i);
            }

            return { formData };
        } catch (err) {
            return err;
        }
    }, []);

    const uploadFiles = useCallback(async (files: File[]) => {
        try {
            const formData: FormData = new FormData();
            files.forEach((file) => {
                formData.append("file", file);
            });
            return { formData };
        } catch (error) {
            return error;
        }
    }, []);

    return { progress, propertiesFile, uploadFile, uploadFiles };
}
