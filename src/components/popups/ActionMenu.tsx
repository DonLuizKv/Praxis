"use client"
import { ReactNode, useEffect, useRef } from "react";
import { Student } from "@/types/Users";

interface Action {
    label: string;
    icon: ReactNode;
    onClick: () => void;
}

interface ActionMenuProps {
    student: Student;
    setStudent: (student: Student) => void;
    actions: Action[];
    onClose?: () => void;
    position?: string;
}

export default function ActionMenu({ student, setStudent, actions, onClose, position }: ActionMenuProps) {
    const menuRef = useRef<HTMLElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose?.();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, onClose]);

    return (
        <section
            ref={menuRef}
            className={`absolute ${position} bg-white rounded-lg border border-[#C8C8C8] shadow-md w-fit flex flex-col z-10`}
        >
            {actions.map((action, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => {
                        if (setStudent) {
                            setStudent(student);
                        }
                        action.onClick();
                        onClose?.();
                    }}
                    className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 font-semibold"
                >
                    {action.icon}
                    {action.label}
                </button>
            ))}
        </section>
    );
}
