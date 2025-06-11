"use client"
import { useState } from "react"
import RegisterPage from "@/components/auth/Register"
import LoginPage from "@/components/auth/Login"
import Link from "next/link"
import { IconArrowLeft } from "@tabler/icons-react"
import Image from "next/image"

export default function Home() {
    const [authType, setAuthType] = useState<"login" | "register">("login")

    return (
        <main className="flex flex-col h-dvh min-w-dvw max-md:flex-col max-md:h-full justify-between">
            <header className="w-full py-4 px-6 flex justify-between items-center relative z-10">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-white p-2 rounded-full shadow-sm group-hover:-translate-x-1 transition-transform">
                        <IconArrowLeft size={20} color="#B33a3a" />
                    </div>
                    <span className="text-sm font-semibold">Volver al inicio</span>
                </Link>
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Praxis Logo" width={32} height={32} className="rounded-md" />
                    <span className="text-xl font-bold text-[#B33a3a]">PRAXIS</span>
                </div>
            </header>
            {
                authType === "login" && (
                    <LoginPage changePointer={(pointer) => setAuthType(pointer)} />
                )
            }
            {
                authType === "register" && (
                    <RegisterPage changePointer={(pointer) => setAuthType(pointer)} />
                )
            }
        </main>
    )
}
