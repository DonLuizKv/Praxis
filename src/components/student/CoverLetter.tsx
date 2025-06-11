import { IconDownload, IconUpload, IconCheck, IconFileLike } from "@tabler/icons-react";
import { useState } from "react";

interface CoverLetterProps {
    uploaded: boolean;
    onUpload: () => void;
    File: string;
}

export default function CoverLetter({ uploaded, onUpload, File }: CoverLetterProps) {
    const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
    const [isUploadedFile, setIsUploadedFile] = useState<boolean>(false);

    const formatName = (filePath: string): string => {
        if (!filePath) return "archivo";
        const parts = filePath.split("/");
        return parts[parts.length - 1] || "archivo";
    }

    const handleDownload = async () => {
        if (!File) return;

        const link = document.createElement("a");
        link.href = File;
        link.setAttribute("download", formatName(File));
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsDownloaded(true);
    };

    const handleUpload = () => {
        setIsUploadedFile(true);
        onUpload();
    }

    return (
        <section className="bg-[#F1F1F1] border-1 border-[#C8C8C8] h-full w-full flex flex-col justify-between gap-2 p-4 rounded-[20px] overflow-auto ">
            <article className="flex flex-col gap-3">
                <aside className="flex items-center gap-2">
                    <IconFileLike size={35} color="#4670B4" />
                    <h2 className="text-[1.3rem] font-semibold">Carta de presentación</h2>
                </aside>
                <p>La carta de presentación es una carta que se presenta a la empresa para que pueda conocerte un poco más.</p>
            </article>
            <article className="w-full flex items-end justify-between">
                {
                    isDownloaded ? (
                        <h3 className="text-[.8rem] font-light flex flex-col gap-1 flex-wrap w-[50%] text-[#707070]">
                            {
                                isUploadedFile ? (
                                    <span className="text-[#3AB354] flex items-center gap-1">Entregada <IconCheck size={15} strokeWidth={2} color="#3AB354" /></span>
                                ) : (
                                    <span>Sube tu carta de presentación firmada por ti</span>
                                )
                            }
                        </h3>
                    ) : (
                        <span className={`py-1 px-3 rounded-full ${uploaded ? "bg-[#3AB354]/20 border border-[#3AB354] text-[#3AB354]" : "bg-red-500/10 border border-[#B33A3A]/30 text-[#B33A3A]"}`}>
                            <h3 className="text-[.8rem] font-bold">{uploaded ? "Subido" : "No subido"}</h3>
                        </span>
                    )
                }
                {
                    isDownloaded ? (
                        <button type="button" onClick={handleUpload}>
                            <IconUpload size={50} strokeWidth={2} color="#4670B4" />
                        </button>
                    ) : (
                        <button type="button" disabled={!uploaded} onClick={handleDownload}>
                            <IconDownload size={50} strokeWidth={2} color={uploaded ? "#3AB354" : "#c8c8c8"} />
                        </button>
                    )
                }
            </article>
        </section>
    )
}
