"use client";
import StudentSection from "@/components/student/StudentSection";
import { useAuth } from "@/hooks/general/useAuth";
import { useData } from "@/hooks/general/useData";
import { Student } from "@/types/user";
import { useState, useEffect } from "react";

export default function Home() {
  const { data, loadingData } = useData();
  const { user, isAuthenticated } = useAuth();
  const [student, setStudent] = useState<Student | null>(null);

  const handleLogout = () => {}

  useEffect(() => {
    if (!data || !data.Students || !isAuthenticated) return;

    const foundStudent = data.Students.find(student => student.uid === user?.uid);
    console.log(data, "data");

    setStudent(foundStudent as Student);
  }, [data, loadingData, isAuthenticated]);

  // if (isLoading || isLoadingData) {
  //   return (
  //     <div className="min-h-screen w-full flex items-center justify-center">
  //       <div className="flex flex-col items-center gap-4">
  //         <IconLoader2 size={60} stroke={1} color="#707070" className="animate-spin" />
  //         <p className="text-[1.2rem] text-[#707070] font-light">Cargando...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (student && !student.state) {
  //   return (
  //     <section className="min-h-screen w-full flex items-center justify-center">
  //       <article className="slide-in-fwd-center flex flex-col justify-between gap-[5rem]">
  //         <aside className="w-[20rem] flex flex-col items-center text-center gap-3 pt-4">
  //           <IconMoodSadFilled size={40} color="#B33A3A" />
  //           <h2 className="text-[1.3rem] font-bold text-[#232121]">Lo sentimos, has sido deshabilitado por tu profesor de prácticas.</h2>
  //           <p className="text-sm text-[#555]">Te recomendamos que hables con el para saber el motivo de tu deshabilitación.</p>
  //         </aside>
  //         <Button type="button" style="outline-to-filled" text="Cerrar sesión" onClick={handleLogout}></Button>
  //       </article>
  //     </section>
  //   )
  // }

  // if (isLoggingOut) {
  //   return <div className="h-dvh w-full flex items-center justify-center backdrop-blur-[1px]">
  //     <div className="flex flex-col items-center justify-center">
  //       <h1 className="text-2xl font-bold">Cerrando sesión...</h1>
  //     </div>
  //   </div>;
  // }

  return (
    <main className="flex h-dvh min-w-dvw max-md:flex-col max-md:h-full justify-between p-6 max-md:p-2">
      <StudentSection data={student as Student} onLogout={handleLogout} />
    </main>
  );
}
