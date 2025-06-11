import { Student } from "@/types/Users";
import { IconUserCheck, IconUserExclamation, IconUsersGroup, IconUserX } from "@tabler/icons-react";

interface StadisticsProps {
    data: Student[];
}

export default function Stadistics({ data }: StadisticsProps) {

    const stadistic = [
        {
            borderColor: "border-[#4670B4]",
            title: "Total de estudiantes",
            value: data.length,
            icon: <IconUsersGroup size={80} stroke={1} color="#4670B4" />,
        },
        {
            borderColor: "border-[#3AB354]",
            title: "Estudiantes Activos",
            value: data.filter(student => student.state === true).length,
            icon: <IconUserCheck size={80} stroke={1} color="#3AB354" />,
        },
        {
            borderColor: "border-[#B33A3A]",
            title: "Estudiantes Inactivos",
            value: data.filter(student => student.state === false).length,
            icon: <IconUserX size={80} stroke={1} color="#B33A3A" />,
        },
        {
            borderColor: "border-[#F5A524]",
            title: "Estudiantes Incompletos",
            value: data.filter(student => !student.documents.arl || !student.documents.coverLetter).length,
            icon: <IconUserExclamation size={80} stroke={1} color="#F5A524" />,
        },
    ]


    return (
        <section className="h-full w-full flex flex-col gap-4">
            {
                stadistic.map((item, i) => (
                    <aside className={`bento-card relative h-full w-full flex flex-col items-center justify-center gap-3 rounded-lg bg-[#f1f1f1] p-2 border ${item.borderColor}`} key={i}>
                        <span className={`flex items-center justify-center rounded-full p-2`}>
                            {item.icon}
                        </span>
                        <aside className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-2 backdrop-blur-[2px] rounded-lg bg-white/10 ">
                            <h3 className="text-lg font-regular">{item.title}</h3>
                            <p className="text-[2rem] font-bold">{item.value}</p>
                        </aside>
                    </aside>
                ))
            }
        </section>
    )
}
