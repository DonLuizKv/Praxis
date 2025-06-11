import { Notification } from "@/types/Notification";
import { IconX } from "@tabler/icons-react";

interface typeNotificationsProps {
    title: string,
    description: string,
    date: string,
}

interface NotificationsProps {
    notifications: Notification[];
    onClose: () => void;
}

const AlertNotification = ({ title, description, date }: typeNotificationsProps) => {
    return (
        <aside className="flex items-center justify-between h-auto w-auto p-2 bg-[#d3d3d3] border border-[#c8c8c8] rounded-[4px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#ffff" stroke="#EA6A64" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" /><path d="M12 9v4" stroke="#000" /><path d="M12 16h.01" stroke="#000" /></svg>
            <div className="flex flex-col h-full w-[65%]">
                <h3 className="text-[1rem] text-[#373737]">{title}</h3>
                <p className="text-[.8rem] text-[#707070] ">{description}</p>
            </div>
            <div className="h-full flex items-end">
                <p className="text-[.6rem] text-center font-light">{date}</p>
            </div>
        </aside>
    );
};

export default function Notifications({ onClose }: NotificationsProps) {
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
                    {/* {
                        notifications.map((notification, i) => ( */}
                    <AlertNotification title={"Sube tu Bitacora"} description={"Recuerda subir la bitacora de esta semana"} date={"2025-04-27"} />
                    {/* ))
                    } */}
                </aside>
            </article>
        </section>
    );
}