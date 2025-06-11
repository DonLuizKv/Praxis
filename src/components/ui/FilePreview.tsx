
import { useFilePreview } from "@/hooks/client/useFilePreview";
import { IconFileText } from "@tabler/icons-react";
import Image from "next/image";

interface FilePreviewProps {
    file: File | null;
}

export default function FilePreview({ file }: FilePreviewProps) {
    const { objectUrl, type } = useFilePreview(file);

    const getPreview = (typeFile: string) => {
        if (typeFile === "application/pdf") {
            return (
                <iframe
                    src={objectUrl}
                    className="h-full w-full"
                    title="Vista previa PDF"
                />
            );
        }

        if (typeFile.startsWith("image/")) {
            return (
                <Image
                    src={objectUrl}
                    alt="Vista previa"
                    fill
                    sizes="100%"
                    className="object-contain"
                />
            );
        }

        if (typeFile.startsWith("text/")) {
            return (
                <iframe
                    src={objectUrl}
                    className="h-full w-full"
                    title="Vista previa de texto"
                />
            );
        }

        return (
            <div className="flex flex-col items-center justify-center gap-2 text-[#707070] font-bold text-center w-full">
                <IconFileText size={50} color="#707070" />
                <p>No hay vista previa disponible</p>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full flex items-center justify-center rounded-[8px] border border-[#D1D1D1]">
            {getPreview(type)}
        </div>
    );
}