import { IconBuildingEstate, IconEdit, IconMoodSad2, IconTrash, IconUserFilled, IconX } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
import Button from "../ui/Button";
import MiniPopup from "../ui/MiniPopup";
import Table from "../ui/Table";
import { Scenary, Student } from "@/types/Users";

interface AddScenaryProps {
    students: Student[];
    scenarys: Scenary[];
    onclose: () => void;
    onCreateScenarys: (scenarys: Scenary[]) => void;
}

export default function AddScenary({ scenarys, students, onclose, onCreateScenarys }: AddScenaryProps) {
    const [scenaryIdCounter, setScenaryIdCounter] = useState<number>(Date.now());
    const [scenarysLocal, setScenarysLocal] = useState<Scenary[]>(() =>
        scenarys.map(s => s.id ? s : { ...s, id: Date.now() + Math.random() })
    );
    const [showNewScenary, setShowNewScenary] = useState<boolean>(false);
    const [selectedScenary, setSelectedScenary] = useState<Scenary | null>(null);
    const [newScenaryName, setNewScenaryName] = useState<string>("");
    const [newScenaryAddress, setNewScenaryAddress] = useState<string>("");

    // Edición
    const [editScenary, setEditScenary] = useState<Scenary | null>(null);
    const [editName, setEditName] = useState<string>("");
    const [editAddress, setEditAddress] = useState<string>("");

    // Eliminación
    const [deleteScenary, setDeleteScenary] = useState<Scenary | null>(null);

    // Asignaciones: escenarioId -> array de ids de estudiantes asignados
    const [scenaryAssignments, setScenaryAssignments] = useState<Record<number, number[]>>(() => {
        const map: Record<number, number[]> = {};
        students.forEach(s => {
            if (s.scenary?.id) {
                if (!map[s.scenary.id]) map[s.scenary.id] = [];
                map[s.scenary.id].push(s.id);
            }
        });
        return map;
    });

    // Al abrir la tabla de un escenario, muestra:
    // - estudiantes asignados a ese escenario (por asignación local o por s.scenary?.id)
    // - estudiantes sin escenario asignado
    // El indicador solo si está asignado por defecto Y está seleccionado
    const getTableDataForScenary = (scenaryId: number) => {
        const assignedIds = scenaryAssignments[scenaryId] ?? [];
        return students
            .filter(
                s =>
                    (!s.scenary?.id &&
                        !Object.entries(scenaryAssignments).some(
                            ([sid, ids]) => Number(sid) !== scenaryId && ids.includes(s.id)
                        )) ||
                    (s.scenary?.id === scenaryId || assignedIds.includes(s.id))
            )
            .map(s => ({
                ...s,
                _isAssigned: s.scenary?.id === scenaryId && assignedIds.includes(s.id)
            }));
    };

    // Estudiantes asignados actualmente al escenario seleccionado
    const selectedStudents = selectedScenary?.id ? (scenaryAssignments[selectedScenary.id] ?? []) : [];

    const handleCreateScenary = () => {
        if (!newScenaryName.trim() || !newScenaryAddress.trim()) return;
        const tempId = scenaryIdCounter;
        setScenaryIdCounter(prev => prev + 1);
        const newScenary: Scenary = { id: tempId, name: newScenaryName, address: newScenaryAddress };
        setScenarysLocal(prev => [...prev, newScenary]);
        setShowNewScenary(false);
        setNewScenaryName("");
        setNewScenaryAddress("");

    };

    const handleEditScenary = () => {
        if (!editScenary || !editName.trim() || !editAddress.trim()) return;
        setScenarysLocal(prev =>
            prev.map(s =>
                s.id === editScenary.id ? { ...s, name: editName, address: editAddress } : s
            )
        );
        setEditScenary(null);
        setEditName("");
        setEditAddress("");
    };

    const handleDeleteScenary = () => {
        if (!deleteScenary) return;
        setScenarysLocal(prev => prev.filter(s => s.id !== deleteScenary.id));
        setDeleteScenary(null);
        setSelectedScenary(null);
    };

    // Guardar escenarios (ejecuta onCreateScenarys con la lista local)
    const handleSaveScenarys = useCallback(() => {
        onCreateScenarys(scenarysLocal);
        onclose();
    }, [scenarysLocal, onCreateScenarys]);

    const handleAssignStudents = useCallback(
        (ids: number[]) => {
            setScenaryAssignments(prev => ({
                ...prev,
                [selectedScenary?.id ?? 0]: ids
            }));
        },
        [selectedScenary]
    );

    useEffect(() => {
        setScenarysLocal(
            scenarys.map(s => s.id ? s : { ...s, id: Date.now() + Math.random() })
        );
    }, [scenarys]);

    return (
        <section className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-30">
            <article className="h-[35rem] w-[27rem] p-6 bg-white flex flex-col gap-6 rounded-2xl shadow-lg border border-[#e0e0e0]">
                <header className="flex items-center justify-between">
                    <h1 className="text-[1.5rem] font-bold flex items-center gap-2 text-[#B33A3A]">
                        <IconBuildingEstate size={32} stroke={2} />
                        Escenarios
                    </h1>
                    <button type="button" onClick={onclose} className="hover:bg-[#f3f3f3] rounded-full p-1 transition">
                        <IconX size={28} color="#232121" />
                    </button>
                </header>
                <div className="h-full flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        {scenarysLocal.length === 0 && (
                            <div className="flex flex-col items-center justify-center gap-2 py-8">
                                <IconMoodSad2 size={48} stroke={1} color="#B33A3A" />
                                <p className="text-lg text-[#B33A3A] font-light">
                                    No hay escenarios registrados
                                </p>
                            </div>
                        )}
                        {scenarysLocal.map((scenary, i) => (
                            <div
                                key={scenary.id ?? `temp-${i}`}
                                className="flex items-center justify-between gap-2 p-4 rounded-xl border border-[#e0e0e0] bg-[#fafafa] hover:shadow transition cursor-pointer"
                                onClick={() => setSelectedScenary(scenary)}
                            >
                                <div className="flex flex-col">
                                    <span className="font-semibold text-[#232121] text-lg">{scenary.name}</span>
                                    <span className="text-[#707070] text-sm flex items-center gap-1">
                                        <IconUserFilled size={18} />
                                        {(scenaryAssignments[scenary.id]?.length ?? 0) +
                                            students.filter(s => s.scenary?.id === scenary.id).length}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        className="hover:bg-[#ffeaea] rounded-full p-1 transition"
                                        title="Editar"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setEditScenary(scenary);
                                            setEditName(scenary.name);
                                            setEditAddress(scenary.address);
                                        }}
                                    >
                                        <IconEdit size={20} color="#B33A3A" />
                                    </button>
                                    <button
                                        type="button"
                                        className="hover:bg-[#ffeaea] rounded-full p-1 transition"
                                        title="Eliminar"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setDeleteScenary(scenary);
                                        }}
                                    >
                                        <IconTrash size={20} color="#B33A3A" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-3 justify-between">
                        <Button type="button" style="basic" text="Nuevo escenario" aditionalsStyles="w-full" onClick={() => setShowNewScenary(true)} />
                        <Button type="button" style="outline" text="Guardar escenarios" aditionalsStyles="w-full" onClick={handleSaveScenarys} />
                    </div>
                </div>
                {/* Tabla compartida de estudiantes como popup flotante al seleccionar escenario */}
                {selectedScenary && (
                    <section className="fixed top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center z-40">
                        <article className="h-[35rem] w-[32rem] max-w-full p-6 bg-white flex flex-col gap-4 rounded-2xl shadow-lg border border-[#e0e0e0] relative">
                            <header className="flex items-center justify-between mb-2">
                                <h2 className="font-semibold text-lg flex items-center gap-2">
                                    Estudiantes en <span className="text-[#4676A3]">{selectedScenary.name}</span>
                                </h2>
                                <button type="button" onClick={() => setSelectedScenary(null)} className="hover:bg-[#f3f3f3] rounded-full p-1 transition">
                                    <IconX size={24} color="#232121" />
                                </button>
                            </header>
                            <Table
                                data={getTableDataForScenary(selectedScenary.id)}
                                pageSize={10}
                                assignedIds={scenaryAssignments[selectedScenary.id] ?? []}
                                onAssign={handleAssignStudents}
                            />
                        </article>
                    </section>
                )}
                {/* Popup para crear escenario */}
                {showNewScenary && (
                    <MiniPopup
                        title="Nuevo Escenario"
                        icon={<IconBuildingEstate size={24} />}
                        input={[
                            {
                                type: "text",
                                placeholder: "Nombre del escenario",
                                value: newScenaryName,
                                onChange: (e) => setNewScenaryName(e.target.value),
                            },
                            {
                                type: "text",
                                placeholder: "Dirección del escenario",
                                value: newScenaryAddress,
                                onChange: (e) => setNewScenaryAddress(e.target.value),
                            },
                        ]}
                        buttonText={["Crear"]}
                        onClick={handleCreateScenary}
                        onCancel={() => {
                            setShowNewScenary(false);
                            setNewScenaryName("");
                            setNewScenaryAddress("");
                        }}
                    />
                )}
                {/* Popup para editar escenario */}
                {editScenary && (
                    <MiniPopup
                        title="Editar Escenario"
                        icon={<IconEdit size={24} />}
                        input={[
                            {
                                type: "text",
                                placeholder: "Nombre del escenario",
                                value: editName,
                                onChange: (e) => setEditName(e.target.value),
                            },
                            {
                                type: "text",
                                placeholder: "Dirección del escenario",
                                value: editAddress,
                                onChange: (e) => setEditAddress(e.target.value),
                            },
                        ]}
                        buttonText={["Editar"]}
                        onClick={handleEditScenary}
                        onCancel={() => {
                            setEditScenary(null);
                            setEditName("");
                            setEditAddress("");
                        }}
                    />
                )}
                {/* Popup para confirmar eliminación */}
                {deleteScenary && (
                    <MiniPopup
                        title="Eliminar Escenario"
                        icon={<IconTrash size={24} />}
                        input={[]}
                        buttonText={["Eliminar"]}
                        onClick={handleDeleteScenary}
                        onCancel={() => setDeleteScenary(null)}
                    />
                )}
            </article>
        </section>
    );
}
