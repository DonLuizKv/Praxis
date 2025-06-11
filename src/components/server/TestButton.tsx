"use client";

import { useSocket } from "@/hooks/server/useSocket";
import { useData } from "@/hooks/auth/useData";
import { useState } from "react";
import Notification from "../ui/Notification";

interface NotificationState {
    show: boolean;
    title: string;
    description: string;
    type: "success" | "error" | "info" | "warning";
}

export default function TestButton() {
    const { socket } = useSocket();
    const { data } = useData();
    const [notification, setNotification] = useState<NotificationState>({
        show: false,
        title: "",
        description: "",
        type: "info"
    });

    const handleClick = () => {
        if (data.user?.role === "admin") {
            socket?.emit("new_notification", {
                title: "Sube la bitacora",
                description: "La bitacora debe ser subida antes de las 12:00 pm",
                id: 1
            })
        }
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
            >
                Test Button
            </button>
            {notification.show && (
                <Notification
                    title={notification.title}
                    description={notification.description}
                    type={notification.type}
                    onClose={() => setNotification(prev => ({ ...prev, show: false }))}
                />
            )}
        </>
    );
} 