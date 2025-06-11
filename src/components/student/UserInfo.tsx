"use client"
import { IconBell, IconLogout, IconSettings } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSocket } from "@/hooks/server/useSocket";

interface UserInfoProps {
    userName: string;
    state: boolean;
    onShowNotifications: () => void;
    sonShowSettings: () => void;
    onLogout: () => void;
}

export default function UserInfo({ state, onShowNotifications, sonShowSettings, onLogout }: UserInfoProps) {

    const { socket } = useSocket();
    const [newNotification, setNewNotification] = useState<boolean>(false);

    useEffect(() => {
        socket?.on("binnacle_notification", () => {
            setNewNotification(true);
        });
    }, [socket]);

    const getCurrentWeekNumber = (startDateStr: string, totalWeeks = 16) => {
        const startDate: Date = new Date(startDateStr);
        const today: Date = new Date();

        startDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        const msPerDay = 1000 * 60 * 60 * 24;
        const daysPassed = Math.floor((today.getTime() - startDate.getTime()) / msPerDay);

        let currentWeek = Math.floor(daysPassed / 7) + 1;

        if (currentWeek < 1) currentWeek = 1;
        if (currentWeek > totalWeeks) currentWeek = totalWeeks;

        return currentWeek;

    }

    return (
        <section className="h-full w-full flex flex-col gap-4">
            <article className="h-fit w-full py-2 px-4 rounded-[10px] flex items-center gap-2 justify-between bg-[#F1F1F1] border border-[#C8C8C8]">
                <aside className="flex items-center gap-2">
                    <span className={`w-fit h-fit py-1 px-2 rounded-full ${state ? "bg-[#3AB354]/20 border border-[#3AB354] text-[#3AB354]" : "bg-red-500/10 border border-[#B33A3A]/30 text-[#B33A3A]"}`}>
                        <h3 className="text-[.7rem] font-bold">{state ? "Activo" : "Inactivo"}</h3>
                    </span>
                </aside>
                <aside className="flex items-center gap-2">
                    <button type="button" onClick={onShowNotifications} title="Notificaciones" className="bg-[#C8C8C8] rounded-[8px] p-1 flex items-center justify-center relative">
                        {newNotification && <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 z-[1] bg-[#E63A3A] rounded-full "></span>}
                        <IconBell size={25} stroke={1.5} className="bell" />
                    </button>

                    <button type="button" title="Configuraciones" onClick={sonShowSettings} className="bg-[#C8C8C8] rounded-[8px] p-1 flex items-center justify-center group" >
                        <IconSettings size={25} stroke={1.5} className="group-hover:rotate-90 transition-all duration-300" />
                    </button>

                    <button type="button" title="Salir" onClick={onLogout} className="bg-red-500/10 rounded-[8px] p-1 flex items-center justify-center" >
                        <IconLogout size={25} stroke={1.5} color="#B33A3A" />
                    </button>
                </aside>
            </article>
            <article className="h-full w-full p-4 rounded-[20px] bg-[#F1F1F1] border border-[#C8C8C8] max-lg:hidden max-md:flex">
                <aside className="flex items-center gap-2">
                    <p className="w-full h-full flex items-center gap-2">
                        <span className="text-[1.1rem] font-light text-[#707070]">Semana</span>
                        <span className="text-[1.1rem] font-light text-[#707070]">{getCurrentWeekNumber("2025-02-04")}</span>
                    </p>

                </aside>
            </article>
        </section>
    );
}
