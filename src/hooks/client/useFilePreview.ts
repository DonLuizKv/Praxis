// hooks/client/useFilePreview.ts
import { useState, useCallback } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

export function useFileViewer(filePath: string) {
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [fileType, setFileType] = useState<"pdf" | "image" | null>(null);
    const [fileName, setFileName] = useState<string>("");

    const viewFile = useCallback(() => {
        const parts = filePath.split("/");
        const fileName = parts[parts.length - 1];
        const ext = fileName.split(".").pop()?.toLowerCase();

        if (!ext) return;
        const normalizedPath = filePath.startsWith("/") ? filePath.slice(1) : filePath;
        const fullUrl = `${BACKEND_URL}/${normalizedPath}`;

        setFileName(fileName);
        setFileUrl(fullUrl);

        if (["jpg", "jpeg", "png"].includes(ext)) {
            setFileType("image");
        } else if (ext === "pdf") {
            setFileType("pdf");
        } else {
            setFileType(null);
        }
    }, [filePath]);

    const closeViewer = () => {
        setFileUrl(null);
        setFileType(null);
        setFileName("");
    };

    return {
        fileUrl,
        fileType,
        fileName,
        viewFile,
        closeViewer,
    };
}
