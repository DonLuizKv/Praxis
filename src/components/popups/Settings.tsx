import { IconX } from "@tabler/icons-react";

interface SettingsProps {
    onClose: () => void;
}

export default function Settings({ onClose }: SettingsProps) {


    return (
        <section className="fixed h-full w-full inset-0 z-[5] bg-black/50 backdrop-blur-[1px] flex justify-end max-md:justify-start">
            <article className="w-[25rem] max-md:w-full h-full flex flex-col gap-2 bg-[#f1f1f1] py-4 px-5 overflow-auto slide-in-right">
                <aside className="flex items-center justify-between gap-2 border-b border-[#c8c8c8] pb-2">
                    <h3 className="font-semibold sticky top-0 bg-[#f1f1f1] text-[1.5rem] duration-300">Notificaciones</h3>
                    <button type="button" onClick={onClose}>
                        <IconX size={30} />
                    </button>
                </aside>
                <aside className="flex flex-col gap-2">
                    <h1>Configuracion</h1>
                </aside>
            </article>
        </section>
    );
}