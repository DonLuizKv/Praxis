import { IconCheck, IconDatabase } from "@tabler/icons-react";

interface BinnacleProps {
    onUpload: () => void;
    numberBinnacles: number;
    onViewBinnacles: () => void;
}

export default function Binnacle({ numberBinnacles, onUpload, onViewBinnacles }: BinnacleProps) {

    const handleUpload = () => {
        onUpload();
    }

    const handleViewBinnacles = () => {
        onViewBinnacles();
    }

    return (
        <section className="h-full w-full bg-[#F1F1F1] border border-[#C8C8C8] flex flex-col justify-between gap-6 p-4 rounded-[20px]">
            <article className="flex flex-col gap-3">
                <aside className="flex items-center gap-2">
                    <IconDatabase size={30} strokeWidth={2} color="#4670B4" />
                    <h2 className="text-[1.5rem] font-semibold">Bitacoras</h2>
                </aside>
                <p>Las Bitacoras son registros de tus actividades en tus practicas, <b>recuerda subir una cada semana.</b></p>
            </article>
            <article className="w-full flex items-end justify-between">
                {
                    numberBinnacles === 16 ? (
                        <h3 className="text-[1rem] text-[#3AB354] flex items-center gap-1"><IconCheck size={20} strokeWidth={2} color="#3AB354" /> Completado</h3>
                    ) : (
                        <h3 className="text-[1rem]"><b>{numberBinnacles}</b> de 16</h3>
                    )
                }
                <aside className="flex items-center gap-2">
                    <button onClick={handleViewBinnacles} type="button" className="text-[#707070] text-[.9rem] font-semibold border border-[#707070] py-1 px-3 rounded-full">Ver</button>
                    <button onClick={handleUpload} type="button" className="text-[.9rem] font-semibold bg-[#B33A3A] text-white px-3 py-1 rounded-full">Subir Bitacora</button>
                </aside>
            </article>
        </section>
    );
}