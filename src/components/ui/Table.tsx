import { IconClick, IconRefresh, IconUserPlus, IconUserMinus, IconUserFilled } from "@tabler/icons-react";
import Button from "./Button";
import { useState, useEffect, useCallback } from "react";
import { Student } from "@/types/Users";

interface TableProps {
    pageSize: number;
    data: Student[];
    onAssign?: (ids: number[]) => void;
    assignedIds?: number[];
}

export default function Table({ data, pageSize, onAssign, assignedIds = [] }: TableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState<number[]>(assignedIds);

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    const pageData = data.slice(startIdx, endIdx);

    const handlePrev = useCallback(() => setCurrentPage(prev => Math.max(prev - 1, 1)), []);
    const handleNext = useCallback(() => setCurrentPage(prev => Math.min(prev + 1, totalPages)), [totalPages]);

    const handleAssignStudent = useCallback(
        (id: number) => {
            setSelectedRows(prev => {
                const updated = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
                onAssign?.(updated);
                return updated;
            });
        },
        [onAssign]
    );

    useEffect(() => {
        setSelectedRows(assignedIds);
    }, [assignedIds]);

    return (
        <div className="flex-1 flex flex-col gap-2 border border-[#c8c8c8] rounded-[10px]">
            <div className="h-full w-full overflow-auto">
                <table className="table-auto w-full text-sm border-collapse">
                    <thead className="border-b border-[#c8c8c8]">
                        <tr className="text-center">
                            <th className="px-4 py-3"></th>
                            <th className="px-4 py-3">No.</th>
                            <th className="px-4 py-3">Nombre</th>
                            <th className="px-4 py-3">Documento</th>
                            <th className="px-4 py-3">Estado</th>
                            <th className="px-4 py-3">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.map((item, i) => {
                            const globalIndex = startIdx + i;
                            const isAssigned = selectedRows.includes(item.id);
                            return (
                                <tr
                                    key={item.id}
                                    className={`text-center ${isAssigned ? "bg-[#b33a3a]/10 border-l-4 border-[#B33A3A]" : ""}`}
                                >
                                    <td className="px-4 py-3 flex items-center justify-center">
                                        {isAssigned && (
                                            <span title="Seleccionado" className="mr-2">
                                                <IconUserFilled size={18} color="#B33A3A" />
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3">{globalIndex + 1}</td>
                                    <td className="px-4 py-3">{item.name}</td>
                                    <td className="px-4 py-3">{item.identity_document}</td>
                                    <td className="px-4 py-3">
                                        <span className="py-1 px-2 rounded-full bg-green-500/20 border border-[#3AB354]/30 text-[#3AB354] text-[.7rem] font-semibold text-nowrap">
                                            {item.state ? "Activo" : "Inactivo"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <Button
                                            type="button"
                                            style={isAssigned ? "basic-gray" : "basic"}
                                            text={isAssigned ? "Asignado" : "Añadir"}
                                            aditionalsStyles="text-xs px-2 py-1"
                                            onClick={() => handleAssignStudent(item.id)}
                                            disabled={isAssigned}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <section className="flex items-center justify-between p-4">
                <p className="text-sm text-[#707070]">
                    <b>{currentPage}</b> de {totalPages}
                </p>
                <div className="flex items-center gap-2">
                    <Button
                        type="button"
                        style="outline-fullRound"
                        text="Anterior"
                        aditionalsStyles="text-[.7rem]"
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                    />
                    <Button
                        type="button"
                        style="outline-fullRound"
                        text="Siguiente"
                        aditionalsStyles="text-[.7rem]"
                        onClick={handleNext}
                        disabled={currentPage === totalPages || totalItems === 0}
                    />
                    <button
                        type="button"
                        className="group"
                        title="Limpiar Selección"
                        onClick={() => {
                            setSelectedRows([]);
                            onAssign?.([]);
                        }}
                    >
                        <IconRefresh size={24} color="#B33A3A" className="group-hover:rotate-[180deg] transition-all duration-300" />
                    </button>
                </div>
            </section>
        </div>
    );
}
