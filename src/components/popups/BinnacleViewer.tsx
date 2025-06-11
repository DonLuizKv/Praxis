"use client"
import { Binnacle } from "@/types/Users";
import { IconDownload, IconX, IconZoomScan } from "@tabler/icons-react";
import { useRef } from "react";

interface BinnacleViewerProps {
    binnacles: Binnacle[];
    onClose: () => void;
    onView: (file: File | string, label: string) => void;
    gridStyle?: string;
}


export default function BinnacleViewer({ onClose, gridStyle, binnacles, onView }: BinnacleViewerProps) {

    const ButtonOpenViwerRef = useRef<HTMLButtonElement>(null);

    const openViewer = (binnacle: Binnacle) => {
        ButtonOpenViwerRef.current?.scrollIntoView({ behavior: "smooth" });
        onView(binnacle.file_path, binnacle.name);
    }

    return (
        <section className={`slide-in-blurred-right h-[25rem] w-[20rem] py-2 px-4 bg-[#ffff] border border-[#D1D1D1] shadow rounded-[10px] flex flex-col gap-2 ${gridStyle}`}>
            <header className="flex items-center justify-between gap-2">
                <h1 className="text-[1.5rem] font-light">Bitacoras</h1>
                <button type="button" onClick={onClose}><IconX size={30} /></button>
            </header>
            <article className="h-full flex flex-col gap-2 overflow-auto">
                {
                    binnacles.length > 0 ? (
                        binnacles.map((binnacle, index) => {
                            return (
                                <div key={index} className="flex items-center justify-between gap-2 border border-[#D1D1D1] py-2 px-3 rounded-md hover:bg-[#f1f1f1]">
                                    <h1>{binnacle.name}</h1>
                                    <div className="flex items-center gap-2">
                                        <button type="button" onClick={() => { }}><IconDownload size={20} color="#3AB354" /></button>
                                        <button ref={ButtonOpenViwerRef} type="button" onClick={() => openViewer(binnacle)}><IconZoomScan size={20} color="#4670B4" /></button>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="flex items-center justify-center h-full w-full">
                            <p className="text-[#707070] text-[.8rem] font-semibold">No hay bitacoras</p>
                        </div>
                    )
                }
            </article>
        </section>
    );
}
