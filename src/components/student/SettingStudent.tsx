import { IconBell, IconShieldLock, IconUserCircle, IconX } from "@tabler/icons-react";
import { useState } from "react";
import General from "../ui/settings/General";
import Security from "../ui/settings/Security";
import Notifications from "../ui/settings/Notifications";
import { Student } from "@/types/Users";

interface SettingsProps {
    onClose: () => void;
    data: Student;
}

type Setting = {
    type: "general" | "security" | "notifications",
    icon: React.ReactNode,
};

export default function SettingStudent({ onClose, data }: SettingsProps) {

    const [setting, setSetting] = useState<"general" | "security" | "notifications">("general");
    const settings: Setting[] = [
        {
            type: "general",
            icon: <IconUserCircle size={32} color="#fff" />,
        },
        // {
        //     type: "security",
        //     icon: <IconShieldLock size={32} color="#fff" />,
        // },
        // {
        //     type: "notifications",
        //     icon: <IconBell size={32} color="#fff" />,
        // }
    ]
    
    const responsiveStyles = {
        sectionsConfig: "max-sm:mt-0 max-sm:w-full max-sm:flex-row max-sm:justify-center max-sm:p-2 max-sm:border-t border-[#c8c8c8]",
    }


    return (
        <section className="fixed h-full w-full inset-0 z-[5] bg-black/50 backdrop-blur-[1px] flex justify-end">
            <div className="h-full max-sm:w-full flex gap-4 max-sm:gap-0 max-sm:flex-col-reverse slide-in-right max-sm:bg-[#f1f1f1] max-sm:p-2">
                <article className={`flex flex-col gap-4 mt-3 ${responsiveStyles.sectionsConfig}`}>
                    {
                        settings.map((setting, i) => (
                            <button key={i} onClick={() => setSetting(setting.type)} className={`bg-[#B33A3A] rounded-[10px] p-2 hover:scale-[1.08] transition-all`}>
                                {setting.icon}
                            </button>
                        ))
                    }
                </article>
                <article className="w-[25rem] max-sm:w-full h-full flex flex-col gap-2 bg-[#f1f1f1] py-4 px-5 max-sm:p-2 overflow-auto ">
                    <aside className="flex items-center justify-between gap-2 border-b border-[#c8c8c8] pb-2">
                        <h3 className="font-semibold sticky top-0 bg-[#f1f1f1] text-[1.5rem] duration-300">Configuraciones</h3>
                        <button type="button" onClick={onClose}>
                            <IconX size={30} />
                        </button>
                    </aside>
                    <aside className="h-full w-full">
                        {
                            setting === "general" && (
                                <General dataUser={{
                                    idStudent: data?.id,
                                    name: data?.name || "",
                                    email: data?.email || "",
                                    document: data?.identity_document,
                                    profilePhoto: data?.profile_photo,
                                }} />
                            )
                        }
                        {
                            setting === "security" && (
                                <Security />
                            )
                        }
                        {
                            setting === "notifications" && (
                                <Notifications />
                            )
                        }
                    </aside>
                </article>
            </div>
        </section>
    );
}