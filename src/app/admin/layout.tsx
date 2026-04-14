import type { Metadata } from "next";
import "@/styles/globals.css"
import "@/styles/Animations.css"
import AnimatedLayout from "@/components/ui/AnimatedLayout";
import { DataProvider } from "@/hooks/general/useData";
import { SocketProvider } from "@/hooks/server/useSocket";

export const metadata: Metadata = {
    title: "Praxis - Admin",
    description: "Una aplicacion de gestion de practicas.",
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <DataProvider>
            <SocketProvider>
                <AnimatedLayout>
                    {children}
                </AnimatedLayout>
            </SocketProvider>
        </DataProvider>
    );
}
