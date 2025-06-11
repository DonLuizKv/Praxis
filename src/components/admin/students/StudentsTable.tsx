"use client"

import { useEffect, useState } from "react";
import StudentRow from "@/components/admin/students/StudentRow";
import ViewStudent from "@/components/popups/ViewStudent";
import ConfirmationDialog from "@/components/popups/ConfirmationDialog";
import { Student } from "@/types/Users";
import { IconLoader2, IconMoodPuzzled } from "@tabler/icons-react";
import { useStudent } from "@/hooks/server/useStudent";

interface StudentsTableProps {
    dataStudents: Student[],
    isLoading: boolean;
}

export default function StudentsTable({ dataStudents, isLoading }: StudentsTableProps) {
    const { handleDelete: deleteStudent, handleUpdate: updateStudent } = useStudent();
    const [student, setStudent] = useState<Student>();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [viewEstudent, setViewEstudent] = useState<boolean>(false);
    const [alertPopup, setAlertPopup] = useState<boolean>(false);
    const [actionType, setActionType] = useState<'delete' | 'disable' | null>(null);

    const handleDelete = async () => {
        try {
            const response = await deleteStudent(student.id);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDisable = async () => {
        try {
            const response = await updateStudent(student.id, { state: !student.state });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const handleConfirmAction = () => {
        if (actionType === 'delete') {
            handleDelete();
        } else if (actionType === 'disable') {
            handleDisable();
        }
        setAlertPopup(false);
        setActionType(null);
    }

    const setStudentData = (newStudent: Student) => {
        setStudent(newStudent);
    }

    const openAlertWithAction = (type: 'delete' | 'disable') => {
        setActionType(type);
        setAlertPopup(true);
    }

    useEffect(() => {
        if (!isLoading) setHasLoaded(true);
    }, [isLoading]);

    if (isLoading) {
        return (
            <div className="h-full w-full p-6 flex flex-col gap-4 items-center justify-center">
                <IconLoader2 size={50} stroke={1} color="#707070" className="animate-spin" />
                <span className="font-semibold text-[#707070]">
                    Cargando Estudiantes...
                </span>
            </div>
        );
    }

    if (hasLoaded && dataStudents.length === 0) {
        return (
            <div className="h-full w-full p-6 flex flex-col gap-4 items-center justify-center">
                <IconMoodPuzzled size={50} stroke={1.5} color="#707070" />
                <span className="font-semibold text-[#707070]">
                    No se encontraron resultados
                </span>
            </div>
        );
    }

    return (
        <div className="overflow-auto h-full w-full">
            <table className="table-auto w-full text-sm border-collapse ">
                <thead className="bg-[#F1F1F1]">
                    <tr className="text-center border-b border-[#C8C8C8]">
                        <th className="px-4 py-3">No.</th>
                        <th className="px-4 py-3">Nombre</th>
                        <th className="px-4 py-3">Documento</th>
                        <th className="px-4 py-3">Escenario</th>
                        <th className="px-4 py-3">Estado</th>
                        <th className="px-4 py-3">Documentos</th>
                        <th className="px-4 py-3">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataStudents.map((student: Student, index: number) => (
                            <StudentRow
                                key={index}
                                index={index += 1}
                                dataStudent={student}
                                setStudent={setStudent}
                                openAlert={(type) => openAlertWithAction(type)}
                                openStudent={(student) => {
                                    setViewEstudent(true);
                                    setStudentData(student);
                                }}
                            />
                        ))
                    }
                </tbody>
            </table>

            {/* Popups */}
            {
                viewEstudent && (
                    <ViewStudent
                        data={student}
                        onClose={() => setViewEstudent(!viewEstudent)}
                    />
                )
            }
            {
                alertPopup && (
                    <ConfirmationDialog
                        title={`¿Estas seguro de realizar esta acción?`}
                        message={`Esta acción ${actionType === 'delete' ? 'eliminará' : 'deshabilitará'} al estudiante. Esta acción puede ser irreversible, por lo que se recomienda tener precaución al realizarla.`}
                        onConfirm={handleConfirmAction}
                        onCancel={() => {
                            setAlertPopup(false);
                            setActionType(null);
                        }}
                    />
                )
            }
        </div>
    );
}
