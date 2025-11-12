import type { Metadata } from "next";
import "@/styles/globals.css"
import "@/styles/Animations.css"
import { Asap } from "next/font/google";
import { AuthProvider } from "@/hooks/general/useAuth";
import AnimatedLayout from "@/components/ui/AnimatedLayout";

const asap = Asap({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Praxis",
    description: "Una aplicacion de gestion de practicas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/logo_animed.ico" />
            </head>
            <body className={asap.className}>
                <AuthProvider>
                    <AnimatedLayout>
                        {children}
                    </AnimatedLayout>
                </AuthProvider>
            </body>
        </html>
    );
}
