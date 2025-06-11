import { useState } from "react";

export function useFile() {
    const [file, setFile] = useState<File | null>(null);

    const changeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const file = e.target.files[0];
        setFile(file);
    };

    const deleteFile = () => {
        setFile(null);
    };

    return { file, changeFile, deleteFile };
}
