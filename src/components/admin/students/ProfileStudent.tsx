import StudentInfoCard from "@/components/ui/StudentInfoCard";
import { Student } from "@/types/Users";
import { IconBuildings, IconDownload, IconEye, IconFolderOpen, IconId, IconUpload, IconUser, IconUserCircle, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useRef } from "react";

interface ProfileStudentProps {
    data: Student;
    gridStyle?: string;
    onClose: () => void;
    onView: (label: string, file: File | string) => void;
    onUpload: (pointer: string) => void;
    onViewBinnacle: () => void;
}

export default function ProfileStudent({ data, onClose, gridStyle, onView, onUpload, onViewBinnacle }: ProfileStudentProps) {
    const ButtonOpenViwerRef = useRef<HTMLButtonElement>(null);

    const openViewer = (name: string, data: File | string) => {
        ButtonOpenViwerRef.current?.scrollIntoView({ behavior: "smooth" })
        onView(name, data);
    }

    const styles = {
        good: "w-fit h-fit py-0.5 px-3 rounded-full bg-green-500/20 border border-[#3AB354]/30 text-[#3AB354] text-[.7rem] font-semibold text-nowrap",
        bad: "w-fit h-fit py-0.5 px-3 rounded-full bg-red-500/10 border border-[#B33A3A]/30 text-[#B33A3A] text-[.7rem] font-semibold",
        pending: "w-fit h-fit py-0.5 px-3 rounded-full bg-yellow-500/20 border border-[#C6971E]/30 text-[#C6971E] text-[.7rem] font-semibold text-nowrap",
    };

    const isNotUploaded = (document: string) => {
        return !data?.documents[document as keyof typeof data.documents];
    }

    return (
        <section className={`swing-in-top-fwd h-[32rem] w-[25rem] p-4 bg-[#ffff] border border-[#D1D1D1] rounded-[10px] shadow flex flex-col justify-between ${gridStyle}`}>
            <header className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                    <IconUserCircle size={35} strokeWidth={1} />
                    <h1 className="text-[1.5rem] font-light">Perfil de Estudiante</h1>
                </div>
                <button type="button" onClick={onClose}><IconX size={30} /></button>
            </header>

            <article className="flex flex-col gap-2 h-full">
                <aside className="flex items-center justify-between gap-3 py-3 ">
                    <div className="flex items-center gap-3">
                        <Image src={data.profile_photo as string} alt="profile" width={70} height={70} className="rounded-full" />
                        <span className="flex flex-col gap-1">
                            <h2 className="text-[1.3rem] font-bold">{data?.name}</h2>
                            <p className="text-[0.8rem] font-light text-[#707070]">Facultad de Ingenieria en Sistemas</p>
                        </span>
                    </div>
                </aside>
                <aside className="grid grid-cols-2 gap-2">
                    <StudentInfoCard
                        title="Estado"
                        value={data?.state}
                        icon={<IconUser size={17} />}
                        type="state"
                        statusConfig={{
                            value: data?.state,
                            styles: data?.state ? styles.good : styles.bad
                        }}
                    />
                    <StudentInfoCard
                        title="Escenario"
                        value={data?.scenary.name}
                        icon={<IconBuildings size={17} />}
                        type="custom"
                        customValue={<div>{data?.scenary.name}</div>}
                    />
                    <StudentInfoCard
                        title="Documento"
                        value={data?.identity_document}
                        icon={<IconId size={17} />}
                        type="custom"
                        customValue={<div>{data?.identity_document}</div>}
                    />
                </aside>
            </article>

            <article className="flex flex-col gap-2">
                {
                    (Object.keys(data.documents) as Array<keyof typeof data.documents>).map((document, i) => (
                        <article key={i} className="flex justify-between gap-1.5">
                            <div className="flex items-center justify-between w-full border border-[#c8c8c8] rounded-[4px] px-3 py-2">
                                <p>{document === "arl" ? "ARL" : "Carta de presentación"}</p>
                                {
                                    data?.documents[document] ? (
                                        <p className={styles.good}>Enviada</p>
                                    ) : (
                                        <p className={styles.pending}>Pendiente</p>
                                    )
                                }
                            </div>
                            <button ref={ButtonOpenViwerRef} disabled={isNotUploaded(document)} type="button" onClick={() => openViewer(document, data.documents[document].file_path)} className="border border-[#c8c8c8] rounded-[4px] px-2 py-2 hover:bg-[#c8c8c8] disabled:opacity-50"><IconEye size={24} /></button>
                            <button type="button"  onClick={() => onUpload(document)} className="border border-[#c8c8c8] rounded-[4px] px-2 py-2 hover:bg-[#4670B4]/20"><IconUpload size={24} color="#4670B4" /></button>
                        </article>
                    ))
                }

                <article className="flex justify-between gap-1.5">
                    <div className="flex items-center justify-between w-full border border-[#c8c8c8] rounded-[4px] px-3 py-2">
                        <p>Bitacoras</p>
                        <p className="text-[#707070] text-[.8rem] font-semibold">{data?.binnacles.length} / 16</p>
                    </div>
                    <button type="button" onClick={onViewBinnacle} className="border border-[#c8c8c8] rounded-[4px] px-2 py-2 hover:bg-[#c8c8c8]"><IconFolderOpen size={24} /></button>
                    <button type="button" onClick={() => { }} className="border border-[#c8c8c8] rounded-[4px] px-2 py-2 hover:bg-[#3AB354]/20"><IconDownload size={24} color="#3AB354" /></button>
                </article>
            </article>
        </section>
    );
}
