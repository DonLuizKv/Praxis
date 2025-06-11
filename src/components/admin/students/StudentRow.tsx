"use client";
import { IconDotsVertical, IconFolderOpen, IconTrash, IconUserCheck, IconUserX } from "@tabler/icons-react";
import ActionMenu from "@/components/popups/ActionMenu";
import { Student } from "@/types/Users";
import { useState } from "react";

interface StudentRowProps {
    index: number,
    dataStudent: Student,
    setStudent: (student: Student) => void;
    openAlert: (type: 'delete' | 'disable') => void;
    openStudent: (student: Student) => void;
}

export default function StudentRow({ index, dataStudent, setStudent, openAlert, openStudent }: StudentRowProps) {
    const [open, setOpen] = useState<boolean>(false);
    
    const styles = {
        good: "py-1 px-3 rounded-full bg-green-500/20 border border-[#3AB354]/30 text-[#3AB354] text-[.7rem] font-semibold text-nowrap",
        bad: "py-1 px-3 rounded-full bg-red-500/10 border border-[#B33A3A]/30 text-[#B33A3A] text-[.7rem] font-semibold",
        pending: "py-1 px-3 rounded-full bg-yellow-500/20 border border-[#C6971E]/30 text-[#C6971E] text-[.7rem] font-semibold text-nowrap",
    };

    const actions = [
        {
            label: "Eliminar",
            icon: <IconTrash size={20} color="#D14343" />,
            onClick: () => {
                openAlert('delete');
            },
        },
        {
            label: dataStudent.state ? "Inhabilitar" : "Habilitar",
            icon: dataStudent.state ? <IconUserX size={20} color="#F0A202" /> : <IconUserCheck size={20} color="#3AB354" />,
            onClick: () => {
                openAlert('disable');
            },
        },
    ];

    const handleOpenStudent = () => {
        openStudent(dataStudent);
    }

    return (
        <tr className="hover:bg-gray-50 text-center">
            <td className="px-4 py-3">{index}</td>
            <td className="px-4 py-3">{dataStudent?.name}</td>
            <td className="px-4 py-3">{dataStudent?.identity_document}</td>
            <td className="px-4 py-3">{dataStudent?.scenary?.name}</td>
            <td className="px-4 py-3">
                <p className={`${dataStudent.state ? styles.good : styles.bad} inline-block text-center`}>
                    {dataStudent.state ? "Activo" : "Inactivo"}
                </p>
            </td>
            <td className="px-4 py-3">
                <div className="w-full h-full flex items-center justify-center gap-2">
                    <p className={dataStudent.documents?.arl ? styles.good : styles.pending}>ARL</p>
                    <p className={dataStudent.documents?.coverLetter ? styles.good : styles.pending}>Carta Presentación</p>
                </div>
            </td>
            <td className="px-4 py-3">
                <div className="h-full w-full flex items-center justify-center gap-2 relative">
                    <button title="Ver estudiante" onClick={handleOpenStudent}>
                        <IconFolderOpen size={24} color="#707070" />
                    </button>
                    <button title="Más opciones" onClick={() => setOpen(!open)}>
                        <IconDotsVertical size={24} color="#232121" />
                    </button>
                    {open && <ActionMenu 
                        student={dataStudent} 
                        setStudent={setStudent} 
                        actions={actions} 
                        onClose={() => setOpen(!open)} 
                        position="top-full right-0" />}
                </div>
            </td>
        </tr>
    );
}
