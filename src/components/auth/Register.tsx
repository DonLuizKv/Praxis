"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSocket } from "@/hooks/server/useSocket"
import { Register } from "@/utils/DataSync"
import { IconEye, IconEyeOff } from "@tabler/icons-react"
import InputField from "../ui/InputField"
import Button from "../ui/Button"

interface RegisterPageProps {
    changePointer: (pointer: "login" | "register") => void
}

export default function RegisterPage({ changePointer }: RegisterPageProps) {
    const router = useRouter();
    const { socket } = useSocket();

    const [name, setName] = useState<string>("")
    const [identity_document, setidentity_document] = useState<number>(0)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<{ value: string, strength: number }>({ value: "", strength: 0 })
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [errors, setErrors] = useState<{
        name?: string
        document?: string
        email?: string
        password?: string
        confirmPassword?: string
    }>({})

    const validateForm = () => {
        const newErrors: typeof errors = {}

        if (!name) newErrors.name = "El nombre es requerido"
        if (!email) {
            newErrors.email = "El email es requerido"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email inválido"
        }

        if (!password) {
            newErrors.password = "La contraseña es requerida"
        } else if (password.value.length < 6) {
            newErrors.password = "Debe tener al menos 6 caracteres"
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = "Confirma tu contraseña"
        } else if (password.value !== confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handlePasswordChange = (value: string) => {
        setPassword({ value, strength: 0 })
        let strength = 0
        if (value.length >= 8) strength += 1
        if (/[A-Z]/.test(value)) strength += 1
        if (/[0-9]/.test(value)) strength += 1
        if (/[^A-Za-z0-9]/.test(value)) strength += 1
        setPassword({ value, strength })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validateForm()) return
        setIsLoading(true)

        try {
            const payload = {
                name,
                email,
                password: password.value,
                identity_document,
                state: true,
                role: "student"
            }

            const response = await Register(payload)

            if (response.error) {
                alert(response.error)
                return
            }

            socket?.emit("UPDATE_DATA", {
                students: [response],
                replace: false
            })

            router.push("/login")
        } catch (err) {
            alert("Error al registrar usuario")
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="h-full w-full flex flex-col items-center justify-center overflow-auto relative p-2">
            <article className="bg-white rounded-2xl shadow-xl border border-gray-100 relative max-md:h-full max-sm:w-full">
                <div className="absolute top-0 right-0 w-15 h-15 bg-red-50 rounded-bl-[100px] rounded-tr-[1rem]"></div>
                <div className="absolute bottom-0 left-0 w-15 h-15 bg-red-50 rounded-tr-[100px] rounded-bl-[1rem]"></div>

                <aside className="h-full w-[25rem] max-sm:w-full px-8 py-6 flex flex-col justify-around gap-3 max-sm:gap-4 relative">
                    <div className="text-center flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">Crea una Cuenta</h1>
                        <p className="text-gray-600">Únete a Praxis y gestiona tus prácticas formativas</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <InputField
                            id="name"
                            type="text"
                            label="Nombre completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={errors.name}
                            placeholder="Tu nombre completo"
                        />
                        <InputField
                            id="email"
                            label="Correo electrónico"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={errors.email}
                            placeholder="tu@email.com"
                        />
                        <InputField
                            id="identity_document"
                            label="Cédula / Documento de identidad"
                            type="number"
                            onChange={(e) => setidentity_document(Number(e.target.value))}
                            error={errors.document}
                            placeholder="000 0000000"
                        />

                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-sm font-medium">
                                Contraseña
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password.value}
                                    onChange={(e) => handlePasswordChange(e.target.value)}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.password ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-red-500 transition-all`}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <IconEyeOff className="h-5 w-5" /> : <IconEye className="h-5 w-5" />}
                                    <span className="sr-only">{showPassword ? "Ocultar" : "Mostrar"} contraseña</span>
                                </button>
                            </div>
                            {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
                            <div className="flex gap-1">
                                {[1, 2, 3, 4].map((level) => (
                                    <div
                                        key={level}
                                        className={`h-1 flex-1 rounded-full mt-0.5 ${password.strength >= level
                                            ? level === 1
                                                ? "bg-red-500"
                                                : level === 2
                                                    ? "bg-yellow-500"
                                                    : level === 3
                                                        ? "bg-green-400"
                                                        : "bg-green-600"
                                            : "bg-[#c8c8c8]"
                                            }`}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <InputField
                            id="confirmPassword"
                            label="Confirmar contraseña"
                            type="password"
                            isPassword={true}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={errors.confirmPassword}
                            placeholder="••••••••"
                            rightIcon={
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    {showConfirmPassword ? <IconEyeOff className="h-5 w-5" /> : <IconEye className="h-5 w-5" />}
                                </button>
                            }
                        />

                        <Button
                            type="submit"
                            style="basic"
                            aditionalsStyles="w-full mt-2"
                            disabled={isLoading}
                            text={
                                isLoading ? (
                                    "Creando cuenta..."
                                ) : (
                                    "Crear cuenta"
                                )
                            }
                        />
                    </form>

                    <div className="w-full flex flex-wrap items-center justify-center gap-2 ">
                        <p className="text-gray-600">¿Ya tienes una cuenta?</p>
                        <button onClick={() => changePointer("login")} className="text-[#B33A3A] font-medium">Iniciar Sesion</button>
                    </div>
                </aside>
            </article>
        </section>
    )
}