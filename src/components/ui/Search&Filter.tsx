"use client";
import DropdownList from "@/components/ui/DropdownList";
import { IconSearch } from "@tabler/icons-react";
interface SearchComponentProps {
    onSearch: (searchTerm: string) => void;
    onFilterEstado: (estado: string) => void;
    onFilterDocumentos: (documento: string) => void;
    onFilterEscenario?: (escenario: string) => void;
    scenary?: string[];
    filters: {
        estado: boolean;
        documentos: boolean;
        escenario: boolean;
    }
}

export default function SearchAndFilter({ onSearch, onFilterEstado, onFilterDocumentos, onFilterEscenario, scenary, filters }: SearchComponentProps) {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <aside className="w-full flex items-center gap-2 max-lg:flex-wrap">
            <div className="relative w-full">
                <IconSearch size={18} color="#707070" stroke={1.5} className="absolute top-1/2 left-3 -translate-y-1/2" />
                <input
                    type="text"
                    className="bg-white w-full border border-[#C8C8C8] rounded-md p-2 pl-10 focus:outline-[#707070]"
                    placeholder="Buscar por nombre o numero de documento"
                    onChange={handleSearch}
                />
            </div>
            <div className="flex gap-1.5 max-md:flex-wrap">
                {filters?.estado && (
                    <DropdownList
                        placeholder="Estado"
                        style="normal"
                    options={[
                        { label: "Todos", value: "todos" },
                        { label: "Habilitado", value: "habilitado" },
                        { label: "Inhabilitado", value: "inhabilitado" },
                        ]}
                        onSelect={onFilterEstado}
                    />
                )}
                {filters?.escenario && (
                <DropdownList
                    placeholder="Escenario"
                    style="normal"
                    options={[
                        { label: "Todos", value: "todos" },
                        ...scenary.map((escenario) => ({ label: escenario, value: escenario })),
                        ]}
                        onSelect={onFilterEscenario}
                    />
                )}
                {filters?.documentos && (
                    <DropdownList
                        placeholder="Documentos"
                        style="normal"
                    options={[
                        { label: "Todos", value: "todos" },
                        { label: "ARL", value: "arl" },
                        { label: "Carta", value: "carta" },
                        { label: "Pendientes", value: "pendientes" },
                        { label: "Completos", value: "completos" },
                        ]}
                        onSelect={onFilterDocumentos}
                    />
                )}
            </div>
        </aside>
    );
}
