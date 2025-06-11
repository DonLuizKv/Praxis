"use client";
import { IconAlertHexagonFilled, IconFileFilled, IconFileUpload, IconInfoCircle, IconTrash } from "@tabler/icons-react";
import Button from "../ui/Button";
import { useState } from "react";
import { formatName, formatSize } from "@/utils/GenericFunctios";

interface UploadArchiveProps {
    onUpload: (file: File) => void,
    onClose: () => void,
}

export default function UploadArchive({ onUpload, onClose }: UploadArchiveProps) {

    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length === 0) return setError("No se ha seleccionado ningún archivo");

        const selectedFile = e.target.files[0];
        if (selectedFile.size > 524288000) return setError("El tamaño es mayor a 500 MB");

        setFile(selectedFile);
        setError(null);
    }

    const handleUpload = () => {
        if (!file) return setError("No se ha seleccionado ningún archivo");
        setError(null)
        onUpload(file);
        setFile(null);
        onClose();
    }

    const handleClose = () => {
        onClose();
        setFile(null);
    }

    return (
        <section className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-[8px] flex items-center justify-center z-20">
            <article className="h-[26rem] w-[30rem] max-w-[30rem] p-4 bg-[#f1f1f1] flex flex-col justify-between gap-2 rounded-[15px] shadow-sm slide-in-fwd-top">
                <h2 className="text-[1.3rem] font-bold">Subir Archivo</h2>

                <aside className="h-full w-full flex flex-col justify-between gap-2">
                    <div className="h-full w-full rounded-[8px] flex flex-col gap-2">
                        <input type="file" id="file" className="sr-only" accept=".pdf, .jpg, .png, .jpeg" onChange={handleSelectFile} />
                        <label htmlFor="file" className="group h-full w-full flex flex-col items-center justify-center gap-2 border-2 border-[#C8C8C8] border-dashed rounded-[8px] cursor-pointer">
                            <IconFileUpload size={40} strokeWidth={1} color="#707070" className="group-hover:animate-bounce" />
                            <p className="text-[#707070] w-[30%] text-center">Haz click o arrastra y suelta el archivo aquí.</p>
                            <span className="flex items-center gap-2 text-[#707070] text-[.8rem]">
                                <IconInfoCircle size={20} color="#707070" />
                                Tamaño maximo: <b>500 MB</b>
                            </span>
                            <span className="text-[#707070] text-[.8rem] flex items-center gap-2">
                                Formato: <b>PDF, JPG, PNG, JPEG</b>
                            </span>
                        </label>
                        {error && (
                            <span className="text-[#B33A3A] text-[.9rem] font-semibold text-wrap flex items-center justify-center gap-2 w-full py-2">
                                <IconAlertHexagonFilled size={20} color="#B33A3A" />
                                {error}
                            </span>
                        )}
                        {
                            file && (
                                <article className="flex items-center justify-between py-2 px-3 bg-[#eaeaea] border-1 border-[#c8c8c8] rounded-[8px]">
                                    <div className="flex items-center gap-1">
                                        <IconFileFilled size={30} strokeWidth={2} color="#4670B4" />
                                        <div className="flex flex-col">
                                            <p className="text-[#707070] text-[.9rem] font-bold text-wrap" title={file.name}>{formatName(file.name)}</p>
                                            <p className="text-[#707070] text-[.7rem]"> {formatSize(file.size)}</p>
                                        </div>
                                    </div>
                                    <button type="button" className="p-1 hover:bg-[#b33a3a]/20 hover:text-[#b33a3a] text-[#707070]  rounded-[4px] transition-colors" onClick={() => setFile(null)}>
                                        <IconTrash size={23} strokeWidth={2} />
                                    </button>
                                </article>
                            )
                        }
                    </div>
                    <div className="w-full flex items-center justify-between gap-2 mt-2">
                        <Button text="Cancelar" type="button" style="basic-gray" onClick={handleClose} />
                        <Button text="Subir Archivo" type="button" style="basic" onClick={handleUpload} />
                    </div>
                </aside>
            </article>
        </section >
    );
}