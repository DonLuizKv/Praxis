import { IconDownload, IconFileTextShield } from "@tabler/icons-react";

interface ArlProps {
    uploaded: boolean;
    File: string;
}

export default function Arl({ uploaded, File }: ArlProps) {

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
    };

    return (
        <section className="h-full w-full bg-[#F1F1F1] border border-[#C8C8C8] flex flex-col justify-between gap-2 p-4 rounded-[20px] overflow-auto">
            <article className="flex flex-col gap-3">
                <aside className="flex items-center gap-2">
                    <IconFileTextShield size={35} strokeWidth={2} color="#4670B4" />
                    <h2 className="text-[1.5rem] font-semibold">Arl</h2>
                </aside>
                <p>La arl es un seguro de vida que te cobija en caso de que ocurra un accidente.</p>
            </article>
            <article className="w-full flex items-end justify-between">
                <span className={`py-1 px-3 rounded-full ${uploaded ? "bg-[#3AB354]/20 border border-[#3AB354] text-[#3AB354]" : "bg-red-500/10 border border-[#B33A3A]/30 text-[#B33A3A]"}`}>
                    <h3 className="text-[.8rem] font-bold">{uploaded ? "Subido" : "No subido"}</h3>
                </span>
                <button type="button" disabled={!uploaded} onClick={handleDownload}>
                    <IconDownload size={50} strokeWidth={2} color={uploaded ? "#3AB354" : "#c8c8c8"} />
                </button>
            </article>
        </section>
    )
}
