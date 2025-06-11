"use client";
import StudentSection from "@/components/student/StudentSection";
import Button from "@/components/ui/Button";
import { useData } from "@/hooks/auth/useData";
import { Student } from "@/types/Users";
import { IconLoader2, IconMoodSadFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useLogout } from "@/hooks/client/useLogout";
import { usePreventBackNavigation } from "@/hooks/client/usePreventBackNavigation";

export default function Home() {
  const { data, isLoading: isLoadingData } = useData();
  const { logout, isLoggingOut } = useLogout();
  const [student, setStudent] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // usePreventBackNavigation();

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    if (isLoadingData || !data || !data.user || !data.students) return;

    const foundStudent = data.students.find(student => student.id === data.user.id);
    console.log(data, "data");

    setStudent(foundStudent);
  }, [data, isLoadingData]);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  if (isLoading || isLoadingData) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <IconLoader2 size={60} stroke={1} color="#707070" className="animate-spin" />
          <p className="text-[1.2rem] text-[#707070] font-light">Cargando...</p>
        </div>
      </div>
    );
  }

  if (student && !student.state) {
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

  if (isLoggingOut) {
    return <div className="h-dvh w-full flex items-center justify-center backdrop-blur-[1px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Cerrando sesión...</h1>
      </div>
    </div>;
  }

  return (
    <main className="flex h-dvh min-w-dvw max-md:flex-col max-md:h-full justify-between p-6 max-md:p-2">
      <StudentSection data={student} onLogout={handleLogout} />
    </main>
  );
}
