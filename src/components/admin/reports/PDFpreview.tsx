import { useCount } from "@/hooks/client/useCount";
import { Report } from "@/types/Report";
import { Student, Document } from "@/types/Users";
import { IconHelpCircle } from "@tabler/icons-react";

interface PDFpreviewProps {
    data: Report;
    ref: React.RefObject<HTMLElement> | null;
}

interface ResumeCardProps {
    title: string,
    data: number,
    color: string,
}

const ResumeCard = ({ title, data, color }: ResumeCardProps) => {
    return (
        <div className="bg-[#f1f1f1] border border-[#c8c8c8] h-[6rem] w-full p-2 rounded-[8px] flex flex-col items-center justify-center gap-1">
            <h3 className=" font-normal text-[#707070]">{title}</h3>
            <span className={`font-bold text-[1.5rem] ${color}`}>{data}</span>
        </div>
    );
}

const DocumentIcons = ({ student }: { student: Student }) => (
    <div className="flex items-center justify-around">
        <span className="flex flex-col items-center">
            {iconState((student?.documents.arl as Document)?.file_path !== null)}
            <p className="text-[.8rem] font-light text-[#707070]">Arl</p>
        </span>
        <span className="flex flex-col items-center">
            {iconState((student?.documents.coverLetter as Document)?.file_path !== null)}
            <p className="text-[.8rem] font-light text-[#707070]">Carta</p>
        </span>
    </div>
);

const iconState = (state: boolean | undefined) => {
    return state ? (
        <span className="h-4 w-4 rounded-full bg-[#3AB354]"></span>
    ) : (
        <span className="h-4 w-4 rounded-full bg-[#C6971E]"></span>
    );
};

export default function PDFpreview({ data, ref }: PDFpreviewProps) {
    const { countableData } = useCount({ data: data.dataToConfigure });

    const customColumnsNames: Record<Report["parameters"]["fields"][number], string> = {
        name: "Nombre",
        documentID: "Documento",
        scenary: "Escenario",
        state: "Estado",
        documents: "Documentos",
    };

    const columnsNames: Record<Report["typeReport"], string[]> = {
        list: ["Nombre", "Documento", "Escenario", "Estado", "Documentos"],
        document: ["Nombre", "Documento", "Documentos"],
        scenary: ["Nombre", "Documento", "Escenario", "Estado"],
        custom: data.parameters.fields.map(field => customColumnsNames[field] ?? field), // Mostrar nombres legibles
    };

    const changeTableColumns: Record<Report["typeReport"], string[]> = {
        list: ["name", "identity_document", "scenary", "state", "documents"],
        document: ["name", "identity_document", "documents"],
        scenary: ["name", "identity_document", "scenary", "state"],
        custom: data.parameters.fields, // Solo las claves reales, sin traducir
    };

    const statsKeyMap: Record<string, keyof typeof countableData> = {
        Total: "count",
        Activos: "actives",
        Inactivos: "inactives",
        Incompletos: "incompletes",
        Completos: "completes",
    };

    const stadisticCard: Record<Report["typeReport"], string[]> = {
        list: ["Total", "Activos", "Inactivos", "Incompletos", "Completos"],
        document: ["Total", "Incompletos", "Completos"],
        scenary: ["Total", "Activos", "Inactivos"],
        custom: ["Total", "Activos", "Inactivos", "Incompletos", "Completos"],
    }

    const renderCell = (field: string, student: Student) => {
        switch (field) {
            case "name":
                return student.name ?? "Sin nombre";
            case "identity_document":
                return student.identity_document ?? "Sin documento";
            case "scenary":
                return student.scenary.name ?? "Sin escenario";
            case "state":
                return (
                    <span
                        className={`${student.state ? "text-[#3AB354] bg-[#3AB354]/20" : "bg-[#B33A3A]/20 text-[#B33A3A] "} px-2 py-1 rounded-full font-semibold`}>
                        {student.state ? "habilitado" : "inhabilitado"}
                    </span>
                );
            case "documents":
                return <DocumentIcons student={student} />;
            default:
                return null;
        }
    };

    return (
        <main ref={ref} className="h-full w-full p-4 bg-[#EDEDED] rounded-[8px] border border-[#DEDEDE] overflow-auto">
            <header className="flex justify-between gap-2 pb-4 border-b border-[#c8c8c8]">
                <article className="flex flex-col gap-0.5">
                    <h1 className="text-[1.5rem] font-bold text-[#B33A3A]">{data.title}</h1>
                    <p className="text-[.95rem] font-normal text-[#707070]">{data.boss}</p>
                </article>
                <article className="flex flex-col justify-end gap-1 text-right w-[40%]">
                    <h2 className="text-[1.2rem] font-semibold">Universidad del Sinu</h2>
                    <h3 className="text-[.95rem] font-normal text-[#707070]">Facultad de Ingenieria en sistemas</h3>
                </article>
            </header>
            <section className="h-full w-full py-3 flex flex-col gap-4">
                <article className="flex flex-col gap-3">
                    <h2 className="text-[1.1rem] font-semibold">Resumen Estudiantil</h2>
                    <aside className="flex flex-row justify-around gap-4">
                        {
                            stadisticCard[data.typeReport].map((item, index) => {
                                const key = statsKeyMap[item];
                                const value = countableData[key];

                                return (
                                    <ResumeCard
                                        key={index}
                                        title={item}
                                        data={value}
                                        color="#232121"
                                    />
                                )
                            })
                        }
                    </aside>
                    <aside className="flex items-center gap-2 py-2 px-3 rounded-[8px] bg-[#4670B4]/10 border border-[#4670B4]">
                        <IconHelpCircle size={30} stroke={2} color="#4670B4" />
                        <p className="text-[.8rem] text-[#4670B4] font-medium">
                            Estudiantes Incompletos se refiere a aquellos estudiantes que les hace falta
                            documentos de practicas
                        </p>
                    </aside>
                </article>
                <table className="w-full text-sm border-collapse rounded-[8px]">
                    <thead className="border border-[#c8c8c8]">
                        <tr className="text-center border border-[#c8c8c8]">
                            {
                                changeTableColumns[data.typeReport].map((field, index) => (
                                    <th key={index} className="px-4 py-3 border border-[#c8c8c8] bg-[#dfdfdf]">
                                        {columnsNames[data.typeReport][index]}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.dataToConfigure.length > 0 ? (
                                data.dataToConfigure.map((student, index) => (
                                    <tr key={index} className="text-center border border-[#c8c8c8]">
                                        {
                                            changeTableColumns[data.typeReport].map((field, colIndex) => (
                                                <td key={colIndex} className="px-4 py-3 border border-[#c8c8c8]">
                                                    {renderCell(field, student)}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={8} className="text-center px-4 py-3 text-[#707070]">
                                        No se encontraron resultados
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <article className="flex items-center justify-between gap-2 border-t border-[#c8c8c8] pt-2">
                    <h3 className="text-[.8rem] font-normal text-[#707070]">Reporte generado por el sistema de gestion de practicas</h3>
                    <p className="text-[.8rem] font-normal text-[#707070]">Pagina 1 de 1</p>
                </article>
            </section>
        </main>
    );
}
