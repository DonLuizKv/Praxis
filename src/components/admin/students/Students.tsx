"use client"
import { useEffect, useState } from "react"
import HeaderSection from "../../ui/HeaderSection"
import Button from "@/components/ui/Button"
import Pagination from "@/components/ui/Pagination"
import StudentsTable from "./StudentsTable"
import SearchAndFilter from "../../ui/Search&Filter"
import { usePagination } from "@/hooks/client/usePagination"
import AddScenary from "@/components/popups/AddScenary"
import { Scenary, Student } from "@/types/Users"
import { useData } from "@/hooks/auth/useData"

export default function Students() {
  const { data, isLoading } = useData();
  const [openAddScenary, setOpenAddScenary] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterState, setFilterState] = useState<string>("todos");
  const [filterDocument, setFilterDocument] = useState<string>("todos");
  const [filterScenary, setFilterScenary] = useState<string>("todos");
  const [filteredData, setFilteredData] = useState<Student[]>([]);

  const parseDocumentStudent = (student: Student, filter: string) => {
    switch (filter) {
      case "arl": return Boolean(student.documents.arl);
      case "carta": return Boolean(student.documents.coverLetter);
      case "pendientes": return !Boolean(student.documents.arl) || !Boolean(student.documents.coverLetter);
      case "completos": return Boolean(student.documents.arl) && Boolean(student.documents.coverLetter);
      default: return true;
    }
  }

  useEffect(() => {
    const filtered = data.students.filter(student => {
      const matchesName = student.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDocumentID = student.identity_document.toString().includes(searchTerm);
      const matchesState = filterState === "todos" || (student.state ? "habilitado" : "inhabilitado") === filterState;
      const matchesDocument = filterDocument === "todos" || parseDocumentStudent(student, filterDocument);
      const matchesScenary = filterScenary === "todos" || student.scenary.name === filterScenary;
      return (matchesName || matchesDocumentID) && matchesState && matchesDocument && matchesScenary;
    });

    setFilteredData(filtered);
  }, [searchTerm, filterState, filterDocument, filterScenary, data.students]);

  const { currentItems, currentPage, totalPages, nextPage, previousPage, } = usePagination<Student>({
    items: filteredData,
    itemsPerPage: 10,
  });

  const handleCreateScenary = async (newScenary: Scenary[]) => {
    // const create = await createScenary({ name: newScenary.name, address: newScenary.address });
    console.log(newScenary);
  }

  return (
    <section className="h-full w-full flex flex-col gap-3.5 px-4">
      <HeaderSection title="Estudiantes" faculty="Facultad de Ingenieria en Sistemas" />
      <article className="w-full flex justify-between gap-2 max-lg:flex-col max-md:gap-2.5">
        <SearchAndFilter
          filters={{ estado: true, documentos: true, escenario: true }}
          onSearch={setSearchTerm}
          onFilterEstado={setFilterState}
          onFilterDocumentos={setFilterDocument}
          onFilterEscenario={setFilterScenary}
          scenary={[...new Set(data.students.map(s => s.scenary?.name))]}
        />
        <hr className="h-full border border-[#e0e0e0]" />
        <aside className="flex max-md:flex-wrap items-center gap-1.5 justify-end max-md:justify-start">
          <Button
            type="button"
            onClick={() => setOpenAddScenary(true)}
            text="Escenarios"
            style="basic"
            aditionalsStyles="text-nowrap h-full"
          />
        </aside>
      </article>

      <article className="h-full w-full flex flex-col justify-between gap-3 overflow-auto">
        <StudentsTable dataStudents={currentItems} isLoading={isLoading} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPrevious={previousPage} onNext={nextPage} />
      </article>

      {openAddScenary && (
        <AddScenary students={data.students} onCreateScenarys={handleCreateScenary} scenarys={data.scenarys} onclose={() => setOpenAddScenary(false)} />
      )}
    </section>
  );
}

