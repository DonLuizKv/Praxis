import type { Metadata } from "next";
import "@/styles/globals.css"
import "@/styles/Animations.css"
import { AuthProvider } from "@/hooks/general/useAuth";
import AnimatedLayout from "@/components/ui/AnimatedLayout";
import { SocketProvider } from "@/hooks/server/useSocket";

export const metadata: Metadata = {
    title: "Praxis",
    description: "Una aplicacion de gestion de practicas.",
};

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
