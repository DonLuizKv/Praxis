import Image from "next/image";
import Button from "../ui/Button";
import { IconDownload } from "@tabler/icons-react";

interface CurriculumProps {
    nameStudent: string,
    description: string,
    faculty: string,
    tags?: string[],
    uploadCurriculum: () => void,
}

export default function Curriculum({ nameStudent, description, faculty, uploadCurriculum }: CurriculumProps) {

    // const colorPairs = [
    //     "bg-[#FEE2E2] text-[#9F241E] border border-[#9F241E]",
    //     "bg-[#DBEAFE] text-[#1E40B3] border border-[#1E40B3]",
    //     "bg-[#CFFAFE] text-[#2572A8] border border-[#2572A8]",
    //     "bg-[#FEF9C3] text-[#914D0E] border border-[#914D0E]",
    //     "bg-[#F3E8FF] text-[#7229A9] border border-[#7229A9]",
    //     "bg-[#DCFCE7] text-[#1B6735] border border-[#1B6735]",
    //     "bg-[#FFEDD5] text-[#A63412] border border-[#A63412]",
    // ];

    // Función para seleccionar un par de colores aleatorio
    // const getRandomColorPair = () => {
    //     const randomIndex = Math.floor(Math.random() * colorPairs.length);
    //     return colorPairs[randomIndex];
    // };

    return (
        <section className="h-full w-full flex flex-col items-center justify-between gap-4 p-4 bg-[#F1F1F1] border border-[#c8c8c8] rounded-[20px] overflow-auto">
            <article className="h-full w-full flex flex-col gap-4 items-center justify-center">
                <Image src="/profile.jpeg" height={100} width={100} alt="profile photo" className="rounded-full" />
                <aside className="flex flex-col items-center text-center justify-center gap-2">
                    <h1 className="text-[1.8rem] font-semibold">{nameStudent}</h1>
                    <p className="text-[#707070] font-normal p-2">{description}</p>
                    <p className="text-[#707070] font-bold p-2">{faculty}</p>
                </aside>
            </article>
            <aside className="w-full flex gap-2">
                <Button type="button" style="outline-to-filled" text="Subir" aditionalsStyles="w-full" onClick={uploadCurriculum} />
                <Button type="button" style="outline-to-filled" icon={<IconDownload />} />
            </aside>
        </section>
    );
}