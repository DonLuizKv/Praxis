import { Binnacle } from "@/types/Users";
import { IconZoomScan } from "@tabler/icons-react"
import { IconDownload } from "@tabler/icons-react"
import { IconX } from "@tabler/icons-react"

interface ViewBinnaclesProps {
    binnacles: Binnacle[];
    onView: (binnacle: File | string, label: string) => void;
    onClose: () => void;
}

export default function ViewBinnacles({ binnacles, onView, onClose }: ViewBinnaclesProps) {

    const handleOpenViewer = (binnacle: File | string, label: string) => {
        onView(binnacle, label);
    }

    return (
        <section className="fixed top-0 left-0 w-full h-full bg-black/10 backdrop-blur-[4px] flex items-center justify-center z-20">
            <div className="slide-in-blurred-right h-[25rem] w-[20rem] py-2 px-4 bg-[#ffff] border border-[#D1D1D1] shadow rounded-[10px] flex flex-col gap-2">
                <header className="flex items-center justify-between gap-2">
                    <h1 className="text-[1.5rem] font-light">Bitacoras</h1>
                    <button type="button" onClick={onClose}><IconX size={30} /></button>
                </header>
                <article className="h-full flex flex-col gap-2 overflow-auto">
                    {
                        binnacles.length > 0 ? (
                            binnacles.map((binnacle, i) => (
                                <div key={i} className="flex items-center justify-between gap-2 border border-[#D1D1D1] py-2 px-3 rounded-md hover:bg-[#f1f1f1]">
                                    <h1>{binnacle.name}</h1>
                                    <div className="flex items-center gap-2">
                                        <button type="button" onClick={() => { }}><IconDownload size={20} color="#3AB354" /></button>
                                        <button type="button" onClick={() => handleOpenViewer(binnacle.file_path, binnacle.name)}><IconZoomScan size={20} color="#4670B4" /></button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center justify-center h-full w-full">
                                <p className="text-[#707070] text-[.8rem] font-semibold">No hay bitacoras</p>
                            </div>
                        )
                    }
                </article>
            </div>
        </section>
    )
}


