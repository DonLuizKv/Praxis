"use client";
import { Backend } from "@/api/Requests";
import StudentSection from "@/components/student/StudentSection";
import { useAuth } from "@/hooks/general/useAuth";
import { useFetch } from "@/hooks/server/useFetch"
import { useSocket } from "@/hooks/server/useSocket";
import { Student } from "@/types/user";
import { IconLoader2, IconMoodSadFilled } from "@tabler/icons-react";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function Home() {
  const router = useRouter();  
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    logout();
    router.push("/");
  }

  if (!user) {
    return (
      <section className="min-h-screen w-full flex items-center justify-center">
        <article className="slide-in-fwd-center flex flex-col justify-between gap-[5rem]">
          <aside className="w-[20rem] flex flex-col items-center text-center gap-3 pt-4">
            <IconMoodSadFilled size={40} color="#B33A3A" />
            <h2 className="text-[1.3rem] font-bold text-[#232121]">Contenido no encontrado.</h2>
            <p className="text-sm text-[#555]">Te recomendamos que recargues la página o inicies sesión de nuevo.</p>
          </aside>
          <Button type="button" style="outline-to-filled" text="Salir" onClick={() => router.push("/")}></Button>
        </article>
      </section>
    )
  }

  if (!user?.active) {
    return (
      <section className="min-h-screen w-full flex items-center justify-center">
        <article className="slide-in-fwd-center flex flex-col justify-between gap-[5rem]">
          <aside className="w-[20rem] flex flex-col items-center text-center gap-3 pt-4">
            <IconMoodSadFilled size={40} color="#B33A3A" />
            <h2 className="text-[1.3rem] font-bold text-[#232121]">Lo sentimos, has sido deshabilitado por tu profesor de prácticas.</h2>
            <p className="text-sm text-[#555]">Te recomendamos que hables con el para saber el motivo de tu deshabilitación.</p>
          </aside>
          <Button type="button" style="outline-to-filled" text="Cerrar sesión" onClick={handleLogout}></Button>
        </article>
      </section>
    )
  }

  return (
    <main className="flex h-dvh min-w-dvw max-md:flex-col max-md:h-full justify-between p-6 max-md:p-2">
      {/* <button onClick={printUser}>Print user</button> */}
      <StudentSection data={user as Student} onLogout={handleLogout} />
    </main>
  );
}
