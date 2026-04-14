import type { Metadata } from "next";
import "@/styles/globals.css"
import "@/styles/Animations.css"
import { SocketProvider } from "@/hooks/server/useSocket";
import AnimatedLayout from "@/components/ui/AnimatedLayout";
import { AuthProvider } from "@/hooks/general/useAuth";

export const metadata: Metadata = {
    title: "Praxis",
    description: "Una aplicacion de gestion de practicas.",
};

export default function StudentLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <AuthProvider>
            <SocketProvider>
                <AnimatedLayout>
                    {children}
                </AnimatedLayout>
            </SocketProvider>
        </AuthProvider>
    );
}
