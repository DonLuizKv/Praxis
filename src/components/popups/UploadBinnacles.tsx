"use client";
import { IconFileUpload, IconInfoCircle, IconTrash, IconAlertHexagonFilled, IconFileFilled } from "@tabler/icons-react";
import Button from "../ui/Button";
import { useState } from "react";
import { formatSize } from "@/utils/GenericFunctios";

interface UploadBinnaclesProps {
    onClose: () => void;
    onUpload: (status: boolean, files: File[]) => void;
}

export default function UploadBinnacles({ onClose, onUpload }: UploadBinnaclesProps) {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        const files = Array.from(event.target.files);

        const filtered = files.filter(file => {
            if (file.size > 524288000) {
                setError(`El archivo ${file.name} excede el límite de 500 MB`);
                return false;
            }
            return !selectedFiles.some(f => f.name === file.name && f.size === file.size);
        });

        if (filtered.length > 0) {
            setSelectedFiles(prev => [...prev, ...filtered]);
            setError(null);
        }
    };

    const handleRemoveFile = (fileToRemove: File) => {
        setSelectedFiles(prev => prev.filter(file => file !== fileToRemove));
    };

    const handleUpload = () => {
        if (selectedFiles.length === 0) {
            return setError("No hay archivos para subir.");
        }
        onUpload(true, selectedFiles);
        setSelectedFiles([]);
        onClose();
    };

    return (
        <section className="fixed top-0 left-0 w-full h-full bg-black/10 backdrop-blur-[4px] flex items-center justify-center z-20">
            <div className="flex items-start justify-center gap-2">
                {/* Panel izquierdo */}
                <article className="h-[25rem] max-h-[40rem] w-[30rem] max-w-[30rem] p-4 bg-[#f1f1f1] flex flex-col gap-2 rounded-[15px] shadow-sm">
                    <h2 className="text-[1.3rem] font-bold">Subir Bitácora</h2>
                    <aside className="h-full w-full flex flex-col gap-2 justify-between">
                        <input
                            type="file"
                            id="file"
                            className="sr-only"
                            accept=".pdf"
                            multiple
                            onChange={handleFileSelect}
                        />
                        <label htmlFor="file" className="group flex-1 flex flex-col items-center justify-center gap-1.5 border-2 border-[#C8C8C8] border-dashed rounded-[8px] cursor-pointer">
                            <IconFileUpload size={40} strokeWidth={1} color="#707070" className="group-hover:animate-bounce" />
                            <p className="text-[#707070] w-[50%] text-[1.2rem] text-center">Haz click o arrastra y suelta el archivo aquí.</p>
                            <span className="flex items-center gap-2 text-[.8rem] text-[#707070]">
                                <IconInfoCircle size={15} color="#707070" />
                                Tamaño máximo: <b>500 MB</b>
                            </span>
                        </label>

                        {error && (
                            <div className="text-[#B33A3A] text-[.85rem] font-semibold flex items-center gap-2">
                                <IconAlertHexagonFilled size={20} color="#B33A3A" />
                                {error}
                            </div>
                        )}

                        <div className="flex items-center justify-between gap-2">
                            <Button text="Cancelar" type="button" style="basic-gray" onClick={onClose} />
                            <Button
                                text="Añadir Bitácora"
                                type="button"
                                style="basic"
                                disabled={selectedFiles.length === 0}
                                onClick={handleUpload}
                            />
                        </div>
                    </aside>
                </article>

                {/* Panel derecho: Lista de archivos */}
                <article className="h-[23rem] w-[20rem] p-4 bg-[#f1f1f1] flex flex-col justify-between gap-2 rounded-[15px] shadow-sm">
                    <h2 className="text-[1.3rem] font-bold">Archivos a Subir</h2>
                    {selectedFiles.length === 0 ? (
                        <aside className="flex flex-col gap-2 items-center justify-center h-full">
                            <p className="text-[#707070] text-[.9rem] text-center">No hay bitácoras para subir</p>
                        </aside>
                    ) : (
                        <aside className="h-full w-full flex flex-col gap-2 overflow-auto">
                            {selectedFiles.map((file, i) => (
                                <article key={i} className="flex items-center justify-between p-2 bg-[#eaeaea] border-1 border-[#c8c8c8] rounded-[8px]">
                                    <div className="flex items-center gap-2 ">
                                        <IconFileFilled size={23} strokeWidth={2} color="#707070" />
                                        <span className="max-w-[160px]">
                                            <p className="text-[.85rem] truncate" title={file.name}>{file.name}</p>
                                            <p className="text-[.7rem] text-[#707070]">{formatSize(file.size)}</p>
                                        </span>
                                    </div>
                                    <button type="button" className="group transition-colors" onClick={() => handleRemoveFile(file)}>
                                        <IconTrash size={20} strokeWidth={2} color="#707070" className="group-hover:stroke-[#B33A3A]" />
                                    </button>
                                </article>
                            ))}
                        </aside>
                    )}
                </article>
            </div>
        </section>
    );
}
