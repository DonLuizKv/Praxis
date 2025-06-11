"use client";
import { IconAlertTriangle } from "@tabler/icons-react";
import Button from "../ui/Button";

interface ConfirmationDialogProps {
    title: string;
    message: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

export default function ConfirmationDialog({ title, message, onConfirm, onCancel }: ConfirmationDialogProps) {
    return (
        <section className="fixed inset-0 z-20 bg-black/30 backdrop-blur-[4px] flex items-center justify-center">
            <article className="bg-white rounded-xl p-6 max-h-[30rem] w-[25rem] max-md:w-full shadow-lg border border-[#D1D1D1]">
                <div className="flex flex-col items-center gap-3 mb-4">
                    <IconAlertTriangle size={40} color="#F59E0B" className="animate-pulse duration-100"/>
                    <h2 className="text-[1.3rem] font-bold text-[#232121]">
                        {title}
                    </h2>
                </div>
                <p className="text-sm text-[#555] mb-6">
                    {message}
                </p>
                <div className="flex justify-end gap-2">
                    <Button type="button" style="basic-gray" text="Cancelar" onClick={onCancel}></Button>
                    <Button type="submit" style="basic" text="Confirmar" onClick={onConfirm}></Button>
                </div>
            </article>
        </section>
    );
}
