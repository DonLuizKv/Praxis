import { useCallback } from "react";

export function useDownloadFile() {
    const downloadFile = useCallback((input: string | File, filename = "archivo") => {

        let url: string = "";
        let mimeType: string | undefined = "";

        if (typeof input === "string") {
            // Si es una URL, se intenta abrir directamente
            window.open(input, "_blank");
            return;
        }

        // Si es un File, usamos su tipo
        url = URL.createObjectURL(input);
        mimeType = input.type;

        // Tipos que el navegador puede mostrar directamente
        const viewables = [
            "application/pdf",
            "image/png",
            "image/jpeg",
            "image/jpg",
            "image/webp",
            "image/gif",
            "image/svg+xml"
        ];

        const shouldOpen = viewables.includes(mimeType);

        if (shouldOpen) {
            window.open(url, "_blank");
        } else {
            const link = document.createElement("a");
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Revocamos la URL después de darle tiempo al navegador
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, []);

    return { downloadFile };
}
