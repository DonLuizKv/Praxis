"use client"
import { useState } from "react"
import Link from "next/link"
import { IconEye, IconEyeOff } from "@tabler/icons-react"
import Button from "@/components/ui/Button"
import { useData } from "@/hooks/auth/useData"
import { useRouter } from "next/navigation"
import { Login } from "@/utils/DataSync"
import Cookies from "js-cookie"

interface LoginPageProps {
    changePointer: (pointer: "register" | "login") => void
}

export default function LoginPage({ changePointer }: LoginPageProps) {
    const [showPassword, setShowPassword] = useState(false)
    const [login, setLogin] = useState<{ email: string, password: string, }>({ email: "", password: "" });
    const [errors, setErrors] = useState<{ email?: string; password?: string, generalError?: string }>({})
    const [showErrorButton, setShowErrorButton] = useState<boolean>(false)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const { setIsAuthenticated } = useData()

    const validateForm = () => {
        const newErrors: typeof errors = {}
        if (!login.email) {
            newErrors.email = "El email es requerido"
        } else if (!/\S+@\S+\.\S+/.test(login.email)) {
            newErrors.email = "Email inválido"
        }
        if (!login.password) {
            newErrors.password = "La contraseña es requerida"
        } else if (login.password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validateForm()) return;

        setIsLoading(true)

        try {
            const response = await Login({
                email: login.email,
                password: login.password
            });
            
            if (response.error) {
                setShowErrorButton(true);
                setTimeout(() => {
                    setShowErrorButton(false);
                }, 2000);
                setErrors({ generalError: response.error });
                return;
            };

            if (response.token) {
                Cookies.set("token", response.token)
                setIsAuthenticated(true)
                router.push(`/${response.user.role}`)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="h-full w-full flex flex-col gap-4 items-center justify-center p-2">
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative max-sm:w-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100px] -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-50 rounded-tr-[100px] -ml-16 -mb-16"></div>

                <aside className="h-[30rem] w-[25rem] max-sm:w-full p-8 flex flex-col justify-around gap-6 relative">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-2">Iniciar Sesión</h1>
                        <p className="text-gray-600">Accede a tu cuenta de Praxis</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-sm font-medium">
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                placeholder="tu@email.com"
                                value={login.email}
                                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                            />
                            {errors.email && <p className="text-[#B33A3A] text-xs ml-2">{errors.email}</p>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between max-sm:flex-col gap-1">
                                <label htmlFor="password" className="text-sm font-medium">
                                    Contraseña
                                </label>
                                <Link href="#" className="text-sm text-wrap text-red-600 hover:text-red-800 transition-colors">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        placeholder="••••••••"
                                        value={login.password}
                                        onChange={(e) => setLogin({ ...login, password: e.target.value })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? <IconEyeOff className="h-5 w-5" /> : <IconEye className="h-5 w-5" />}
                                        <span className="sr-only">{showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}</span>
                                    </button>
                                </div>
                                {errors.password && <p className="text-[#B33A3A] text-xs ml-2">{errors.password}</p>}
                            </div>
                        </div>

                        {
                            showErrorButton ? (
                                <Button
                                    type="submit"
                                    style="disabled"
                                    aditionalsStyles="w-full"
                                    disabled={true}
                                    text="Credenciales Invalidas"
                                />
                            ) : (
                                <Button
                                    type="submit"
                                    style="basic"
                                    aditionalsStyles="w-full"
                                    disabled={isLoading}
                                    text={
                                        isLoading ? (
                                            "Iniciando sesión..."
                                        ) : (
                                            "Iniciar sesión"
                                        )
                                    }
                                />
                            )
                        }
                    </form>

                    <div className="w-full flex flex-wrap items-center justify-center gap-2">
                        <p className="text-gray-600">¿No tienes una cuenta?</p>
                        <button onClick={() => changePointer("register")} className="text-[#B33A3A] font-medium">Regístrate</button>
                    </div>
                </aside>
            </article>

            <article className="w-fit flex items-center justify-center">
                <p className="w-[60%] text-center text-wrap text-[.75rem] text-gray-500">
                    Al iniciar sesión, aceptas nuestros
                    <a href="#" className="text-[#B33A3A]  hover:text-red-500  transition-colors"> Términos y Condiciones </a>
                    y <a href="#" className="text-[#B33A3A] hover:text-red-500 transition-colors"> Política de Privacidad </a>.
                </p>
            </article>
        </section>
    )
}
