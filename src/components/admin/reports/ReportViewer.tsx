import CheckBox from "@/components/ui/Checkbox";
import { Report } from "@/types/Report";
import ReportsVisualizer from "./ReportsVisualizer";
import { useRef, useState } from "react";
import { IconDownload, IconFileTypePdf, IconFileTypeXls } from "@tabler/icons-react";
import RadioInput from "@/components/ui/RadioInput";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface InfoReportProps {
  dataReport: Report;
  onClose: () => void;
}

export default function ReportsCreator({ dataReport, onClose }: InfoReportProps) {

  const pdfRef = useRef<HTMLElement>(null);
  const [typeFileExport, setTypeFileExport] = useState<Report["parameters"]["export"]>("pdf");
  const [fields, setFields] = useState<string[]>([]);

  // const fieldsReportsByType: Record<Report["typeReport"], string[]> = {
  //   "list": ["name", "documentID", "state"],
  //   "document": ["documents", "name", "documentID"],
  //   "scenario": ["scenary", "name"],
  //   "custom": ["name", "documentID", "scenary", "state", "documents"],
  //   "none": [],
  // };

  // const fieldLabels: Record<string, string> = {
  //   name: "Nombre completo",
  //   documentID: "Documento de Identidad",
  //   scenary: "Escenario",
  //   state: "Estado",
  //   documents: "Documentos",
  // }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Generar la captura de pantalla
    const canvas = await html2canvas(pdfRef.current as HTMLElement, {
      scale: 2, // Aumenta la resolución
    });

    const imgData = canvas.toDataURL("image/png");

    // Crear un nuevo documento PDF
    const pdf = new jsPDF("p", "mm", "a4");

    // Calcular las dimensiones del PDF
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // Definir márgenes opcionales
    const margin = 10; // Margen de 10mm en todos los lados
    pdf.addImage(imgData, "PNG", margin, margin, pdfWidth - 2 * margin, pdfHeight - 2 * margin);

    // Guardar el PDF
    pdf.save(`${dataReport.title}.pdf`);
  }


  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFields(prev => {
      return checked ? [...prev, value] : prev.filter(field => field !== value)
    });
  };

  return (
    <main className="fixed inset-0 z-10 bg-black/10 backdrop-blur-xs flex justify-center items-center p-4 overflow-auto">
      <section className="swing-in-top-fwd h-[40rem] max-md:h-full w-[60rem] flex gap-2 max-md:flex-col">
        <form onSubmit={handleSubmit} className="w-[25rem] max-md:w-fit max-sm:w-full flex flex-col gap-2 py-4 px-4.5 bg-[#f1f1f1] rounded-[10px]">
          <header className="flex flex-col gap-1.5">
            <h2 className="text-[1.2rem] font-bold">{dataReport.typeReport}</h2>
            <p className="text-[#707070] font-light text-sm">Personaliza y genera el reporte según tus necesidades.</p>
          </header>

          <article className="h-full flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-4">
              {
                dataReport.typeReport === "custom" && (
                  <aside className="flex flex-col gap-2">
                    <h3 className="text-[1rem] font-semibold">Campos a incluir</h3>
                    <div className="flex flex-col gap-2">
                      <CheckBox id="name" label="Nombre" value="name" returnValue={handleCheckboxChange} />
                      <CheckBox id="documentID" label="Documento de Identidad" value="documentID" returnValue={handleCheckboxChange} />
                      <CheckBox id="scenary" label="Escenario" value="scenary" returnValue={handleCheckboxChange} />
                      <CheckBox id="state" label="Estado" value="state" returnValue={handleCheckboxChange} />
                      <CheckBox id="documents" label="Documentos" value="documents" returnValue={handleCheckboxChange} />
                    </div>
                  </aside>
                )
              }
              <aside className="flex flex-col gap-2">
                <h3 className="text-[1rem] font-semibold">Formato de exportación</h3>
                <div className="flex flex-row gap-4">
                  <RadioInput<Report["parameters"]["export"]>
                    label="PDF" value="pdf"
                    icon={<IconFileTypePdf size={25} stroke={1} />}
                    id="pdf" group="typeExport"
                    defaultChecked={true}
                    returnValue={(value) => setTypeFileExport(value)}
                  />
                  {/* <RadioInput<Report["parameters"]["export"]>
                    label="Excel" value="excel"
                    icon={<IconFileTypeXls size={25} stroke={1} />}
                    id="excel" group="typeExport"
                    returnValue={(value) => setTypeFileExport(value)}
                  /> */}
                </div>
              </aside>
            </div>
            <div className="flex gap-2 pt-4 border-t border-[#c8c8c8]">
              <button type="button" onClick={onClose} className="py-2 px-3 border border-[#707070] text-[#707070] hover:bg-[#707070] hover:text-[#f1f1f1] rounded-sm font-medium">
                Cancelar
              </button>
              <button type="submit" className="group w-full border border-[#B33A3A] hover:bg-[#B33A3A] text-[#B33A3A] font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all">
                <IconDownload color="#B33A3A" className="group-hover:stroke-[#fff] transition-all" />
                <p className="group-hover:text-[#fff] transition-all">Descargar</p>
              </button>
            </div>
          </article>
        </form>

        {/* Panel de previsualización */}
        <ReportsVisualizer
          data={{
            title: dataReport.title,
            boss: dataReport.boss,
            typeReport: dataReport.typeReport,
            parameters: {
              fields: fields,
              export: typeFileExport,
            },
            dataToConfigure: dataReport.dataToConfigure,
          }}
          ref={pdfRef as React.RefObject<HTMLElement>}
          onClose={onClose}
        />
      </section>
    </main>
  )
}

