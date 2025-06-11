import { IconBuildingEstate, IconFileText, IconFolderOpen, IconTool, IconUsersGroup } from "@tabler/icons-react";
import { Report } from "@/types/Report";

interface ReportCardProps {
    title: string;
    description: string;
    mainColor: string;
    typeReport: Report["typeReport"];
    onGenerate: (typeReport: Report["typeReport"]) => void;
}

export default function CardReport({ title, description, mainColor, onGenerate, typeReport }: ReportCardProps) {

    const icon: Record<Report["typeReport"], React.ReactNode> = {
        list: <span className="bg-[#4670B4]/10 rounded-full p-2 w-fit"><IconUsersGroup size={30} stroke={1.5} color="#4670B4" /></span>,
        document: <span className="bg-[#C6971E]/10 rounded-full p-2 w-fit"><IconFileText size={30} stroke={1.5} color="#C6971E" /></span>,
        scenary: <span className="bg-[#3AB354]/10 rounded-full p-2 w-fit"><IconBuildingEstate size={30} stroke={1.5} color="#3AB354" /></span>,
        custom: <span className="bg-[#7229A9]/10 rounded-full p-2 w-fit"><IconTool size={30} stroke={1.5} color="#7229A9" /></span>,
    }
    return (
        <section className={`h-full w-full p-4 bg-[#f1f1f1] rounded-[10px] flex flex-col justify-around gap-3 border border-transparent ${mainColor}`}>
            {icon[typeReport]}
            <article className="flex flex-col gap-1.5">
                <h3 className="text-[1.2rem] font-semibold">{title}</h3>
                <p className="text-[.8rem] text-[#353535] font-normal">{description}</p>
            </article>
            <article className="w-full flex items-center justify-between gap-2">
                <p className="text-[.8rem] text-[#707070]">Ver Reporte</p>
                <button type="button" onClick={() => onGenerate(typeReport)}><IconFolderOpen color="#707070" stroke={1.5} /></button>
            </article>
        </section>
    )
}
