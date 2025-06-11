import { IconFile, IconX } from "@tabler/icons-react";
import Button from "../ui/Button";
import { useFileViewer } from "@/hooks/client/useFilePreview";
import Image from "next/image";
import { useEffect } from "react";

interface ArchiveViewerProps {
    name: string;
    onClose: () => void;
    file: File | string;
    gridStyle?: string;
    isStudentsTable?: boolean;
}

export default function ArchiveViewer({ name, onClose, gridStyle, isStudentsTable, file }: ArchiveViewerProps) {

    const { fileUrl, fileType, closeViewer, viewFile } = useFileViewer(file as string);

    const handleDownload = () => {
        if (!fileUrl) return;

        window.open(fileUrl, "_blank", "noopener,noreferrer");

        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", name);
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    const handleClose = () => {
        closeViewer();
        onClose();
    }

    useEffect(() => {
        viewFile();
    }, [viewFile]);

    const viewerName = (name: string) => {
        switch (name) {
            case "arl":
                return "ARL"
            case "coverLetter":
                return "Carta de presentación"
            default:
                return;
        }
    }

    if (!isStudentsTable) {
        return (
            <div className="fixed top-0 left-0 w-full h-full bg-black/10 backdrop-blur-[4px] flex items-center justify-center z-20">
                <section className="slide-in-blurred-right h-[30rem] max-h-[35rem] w-[30rem] max-md:w-full py-2 px-4 bg-[#ffff] border border-[#D1D1D1] shadow rounded-[10px] flex flex-col gap-2">
                    <header className="flex items-center justify-between">
                        <h1 className="text-[1.5rem] text-left font-light text-nowrap overflow-hidden w-[90%] text-[#232121]">{viewerName(name)}</h1>
                        <button type="button" onClick={handleClose}>
                            <IconX size={30} />
                        </button>
                    </header>
                    <article className="h-full flex flex-col justify-between gap-2">
                        <article className="h-full w-full flex flex-col justify-between gap-2 px-2">
                            {
                                !fileType && (
                                    <div className="w-full h-full flex items-center justify-center flex-col gap-2">
                                        <IconFile size={80} strokeWidth={2} color="#707070" />
                                        <p className="text-[#707070] text-[1.2rem]">No se pudo mostrar el archivo</p>
                                    </div>
                                )
                            }
                            {
                                fileType === "image" && fileUrl && (
                                    <div className="flex justify-center items-center h-full">
                                        <Image src={fileUrl} alt={name} width={300} height={300} className="object-cover" />
                                    </div>
                                )
                            }
                            {
                                fileType === "pdf" && fileUrl && (
                                    <iframe src={fileUrl} width="100%" height="100%" />
                                )
                            }
                        </article>
                        <div className="w-full flex justify-end">
                            <Button type="button" text="Descargar" style="outline-to-filled" onClick={handleDownload} />
                        </div>
                    </article>
                </section>
            </div>
        )
    } else {
        return (
            <section className={`slide-in-blurred-right h-[30rem] max-h-[35rem] w-[25rem] max-md:w-full  bg-[#ffff] border border-[#D1D1D1] shadow rounded-[10px] flex flex-col gap-1 ${gridStyle}`}>
                <header className="flex items-center justify-between py-2 px-4">
                    <h1 className="text-[1.5rem] text-left font-light text-nowrap overflow-hidden w-[90%] text-[#232121]">{viewerName(name)}</h1>
                    <button type="button" onClick={handleClose}>
                        <IconX size={30} />
                    </button>
                </header>
                <article className="h-full flex flex-col justify-between">
                    <article className="h-full">
                        {
                            !fileType && (
                                <div className="w-full h-full flex items-center justify-center flex-col gap-2 overflow-auto">
                                    <IconFile size={80} strokeWidth={2} color="#707070" />
                                    <p className="text-[#707070] text-[1.2rem]">No se pudo mostrar el archivo</p>
                                </div>
                            )
                        }
                        {
                            fileType === "image" && fileUrl && (
                                <div className="flex justify-center items-center h-full">
                                    <Image src={fileUrl} alt={name} width={300} height={300} className="object-cover" />
                                </div>
                            )
                        }
                        {
                            fileType === "pdf" && fileUrl && (
                                <iframe src={fileUrl} width="100%" height="100%" />
                            )
                        }
                    </article>
                    <div className="w-full flex justify-end p-4">
                        <Button type="button" text="Descargar" style="outline-to-filled" onClick={handleDownload} />
                    </div>
                </article>
            </section>
        )
    }

}
