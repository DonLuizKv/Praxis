"use client";

import { useEffect, useState } from "react";

type NotificationType = "success" | "error" | "info" | "warning";

interface NotificationProps {
    title: string;
    description: string;
    type?: NotificationType;
    duration?: number;
    onClose?: () => void;
}

const typeStyles = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
};

export default function Notification({ 
    title, 
    description, 
    type = "info", 
    duration = 3000,
    onClose 
}: NotificationProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose?.();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0  ${typeStyles[type]} animate-slide-in`}>
            <div className="flex items-start">
                <div className="flex-1">
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-sm">{description}</p>
                </div>
                <button
                    onClick={() => {
                        setIsVisible(false);
                        onClose?.();
                    }}
                    className="ml-4 text-current hover:text-opacity-75"
                >
                    ✕
                </button>
            </div>
        </div>
    );
} 