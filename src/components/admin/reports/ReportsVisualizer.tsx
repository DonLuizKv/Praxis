import { IconX } from "@tabler/icons-react";
import PDFpreview from "./PDFpreview";
import ExcelPreview from "./ExcelPreview";
import { Report } from "@/types/Report";

interface ReportsHistoryProps {
    data: Report;
    ref: React.RefObject<HTMLElement> | null;
    onClose: () => void,
}

export default function ReportsVisualizer({ data, onClose, ref }: ReportsHistoryProps) {

    const styleExtensionFile = {
        "excel": {
            style: "text-center px-2 bg-green-500/20 text-green-500 rounded-full text-[.9rem] font-semibold",
            extension: "Excel",
        },
        "pdf": {
            style: "text-center px-2 bg-orange-500/20 text-orange-500 rounded-full text-[.9rem] font-semibold",
            extension: "PDF",
        },
    }

    return (
        <article className="h-full w-full flex flex-col gap-1.5 p-4 bg-[#f1f1f1] rounded-[10px]">
            <div className="flex justify-between items-center">
                <span className={styleExtensionFile[data?.parameters.export].style}>{styleExtensionFile[data?.parameters.export].extension}</span>
                <button type="button" onClick={onClose}><IconX /></button>
            </div>
            {data?.parameters.export === "pdf" && <PDFpreview data={data} ref={ref} />}
            {data?.parameters.export === "excel" && <ExcelPreview />}
        </article>
    );

}