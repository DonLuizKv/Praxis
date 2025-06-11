// import Graphic from "./Graphic";

import { useMemo } from "react";
import WeekProgress from "../ui/WeekProgress";
import { Student } from "@/types/Users";


export default function Scenary({ scenary, student }: { scenary: string, student: Student }) {

    const progress = useMemo(() => {
        const totalBitacoras = 16;
        let totalProgress = 0;

        if (scenary) totalProgress += 20;
        if (student?.documents?.arl) totalProgress += 15;
        if (student?.documents?.coverLetter) totalProgress += 15;

        const actualBinnacles = student?.binnacles?.length || 0;
        const bitacoraProgress = Math.min((actualBinnacles / totalBitacoras) * 50, 50);
        totalProgress += bitacoraProgress;

        return Math.round(Math.min(Math.max(totalProgress, 0), 100));
    }, [student, scenary]);



    return (
        <section className="h-full w-full bg-gradient-to-tr from-[#B33A3A] to-[#EA6A64] flex justify-between max-lg:flex-col rounded-[20px]">
            <article className="h-full w-full flex flex-col justify-between gap-2 p-4">
                <aside className="flex flex-col gap-3">
                    <h3 className="text-[1rem] font-medium text-white">Escenario</h3>
                    <h1 className=" text-white font-bold italic text-[calc(2rem-0.1ch)] max-w-fit leading-8">{scenary}</h1>
                    <p className="text-[.9rem] font-medium text-white">
                        Este el lugar  donde realizaras tus practicas formativas.
                    </p>
                </aside>
                <aside className="flex flex-col gap-2">
                    {/** inicio info **/}
                    <div className="flex items-center gap-2">
                        <div className="bg-[#EA6A64] rounded-[5px] p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M7 14h.013" /><path d="M10.01 14h.005" /><path d="M13.01 14h.005" /><path d="M16.015 14h.005" /><path d="M13.015 17h.005" /><path d="M7.01 17h.005" /><path d="M10.01 17h.005" /></svg>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[.9rem] text-white">Inicio</h2>
                            <h3 className="text-[1.1rem] font-semibold text-white">4 febrero 2025</h3>
                        </div>
                    </div>

                    {/** duracion info **/}
                    <div className="flex items-center gap-2">
                        <div className="bg-[#EA6A64] rounded-[5px] p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#ffffff"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[.9rem] text-white">Duracion</h2>
                            <h3 className="text-[1.1rem] font-semibold text-white">6 Meses</h3>
                        </div>
                    </div>
                </aside>
            </article>
            <article className="h-full w-full flex flex-col justify-center p-2 max-lg:p-4">
                <WeekProgress percentage={progress} size={265} strokeWidth={25} />
            </article>
        </section>
    );
}