"use client"
import { useState } from "react"
import RegisterPage from "@/components/auth/Register"
import LoginPage from "@/components/auth/Login"
import Link from "next/link"
import { IconArrowLeft } from "@tabler/icons-react"
import Image from "next/image"
import { AuthSections } from "@/types/app"

export default function Home() {
    const [authType, setAuthType] = useState<AuthSections>("login")

    return (
        <main className="flex flex-col h-dvh min-w-dvw max-md:flex-col max-md:h-full justify-between">
            {
                authType === "login" ? (
                    <LoginPage changePointer={(pointer) => setAuthType(pointer)} />
                ) : (
                    <RegisterPage changePointer={(pointer) => setAuthType(pointer)} />
                )
            }
        </main>
    )
}
