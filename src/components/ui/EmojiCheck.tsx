"use client";
import { useState } from "react";

interface EmojiCheckProps {
    isActive: boolean; // Asegurar que se recibe un booleano, no una función
    alertDatabase: (newState: boolean) => void; // Función para actualizar la base de datos
}

export default function EmojiCheck({ isActive, alertDatabase }: EmojiCheckProps) {
    const [isChecked, setIsChecked] = useState<boolean>(isActive); // false

    const handleIsChecked = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        alertDatabase(newState);
    };

    return (
        <div>
            <input
                type="checkbox"
                id="enableNotifications"
                className="sr-only"
                checked={isChecked}
                onChange={handleIsChecked}
            />
            <label htmlFor="enableNotifications" className="cursor-pointer">
                {isChecked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#707070">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 9.86a4.5 4.5 0 0 0 -3.214 1.35a1 1 0 1 0 1.428 1.4a2.5 2.5 0 0 1 3.572 0a1 1 0 0 0 1.428 -1.4a4.5 4.5 0 0 0 -3.214 -1.35zm-2.99 -4.2l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm6 0l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#3AB354">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 9.66h-6a1 1 0 0 0 -1 1v.05a3.975 3.975 0 0 0 3.777 3.97l.227 .005a4.026 4.026 0 0 0 3.99 -3.79l.006 -.206a1 1 0 0 0 -1 -1.029zm-5.99 -5l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm6 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" />
                    </svg>
                )}
            </label>
        </div>
    );
}
