"use client"
import HeaderSection from "@/components/ui/HeaderSection"
import { Report } from "@/types/Report";
import { useState } from "react"
import CardReport from "./CardReport";
import ReportViewer from "./ReportViewer";
import { useData } from "@/hooks/auth/useData";

export default function Reports() {
  const { data } = useData();
  const [reportsViewer, setReportsViewer] = useState<{
    name: string, typeReport: Report["typeReport"], open: boolean,
  }>({ name: "", typeReport: "list", open: false, });

  const reports = [
    {
      title: "Listado de Estudiantes",
      description: "Todos los estudiantes dentro del sistema Praxis en un solo lugar",
      mainColor: "#4670B4 hover:border-[#4670B4]/50",
      typeReport: "list",
      onGenerate: () => setReportsViewer({ name: "Listado de Estudiantes", typeReport: "list", open: true })
    },
    {
      title: "Documentos de Estudiantes",
      description: "Identifica estudiantes en funcion de sus documentos",
      mainColor: "#C6971E hover:border-[#C6971E]/50",
      typeReport: "document",
      onGenerate: () => setReportsViewer({ name: "Documentos de Estudiantes", typeReport: "document", open: true })
    },
    {
      title: "Distribucion por Escenarios",
      description: "Visualiza los estudiantes en funcion de sus escenarios",
      mainColor: "#3AB354 hover:border-[#3AB354]/50",
      typeReport: "scenary",
      onGenerate: () => setReportsViewer({ name: "Distribucion por Escenarios", typeReport: "scenary", open: true })
    },
  ]

  return (
    <section className="h-full w-full flex flex-col gap-4 px-4 pb-4">
      <HeaderSection title="Reportes" faculty="Facultad de Ingenieria en Sistemas" />
      <article className="h-full w-full flex gap-4 pr-2 max-lg:flex-col">
        <aside className="h-full w-full grid grid-cols-2 grid-rows-3 gap-2">
          {
            reports.map((report, i) => (
              <CardReport key={i}
                title={report.title}
                description={report.description}
                mainColor={report.mainColor}
                typeReport={report.typeReport as Report["typeReport"]}
                onGenerate={report.onGenerate} />
            ))
          }
          <CardReport
            title="Reporte Personalizado"
            description="Genera un reporte personalizado en base a filtros especificos"
            mainColor="#7229A9 hover:border-[#7229A9]/50"
            typeReport="custom"
            onGenerate={() => setReportsViewer({ name: "Reporte Personalizado", typeReport: "custom", open: true })} />
        </aside>
      </article>
      { reportsViewer.open && <ReportViewer dataReport={{
        title: reportsViewer.name,
        typeReport: reportsViewer.typeReport,
        parameters: {
          fields: [],
          export: "pdf"
        },
        dataToConfigure: data.students
      }} onClose={() => setReportsViewer({ name: "", typeReport: "list", open: false })} /> }
    </section>
  )
}
