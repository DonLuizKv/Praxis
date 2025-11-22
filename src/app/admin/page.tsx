"use client";
import Curriculums from "@/components/admin/curriculums/Curriculums";
import { Dashboard } from "@/components/admin/dashboard/Dashboard";
import Reports from "@/components/admin/reports/Reports";
import { Sidebar } from "@/components/admin/Sidebar";
import Students from "@/components/admin/students/Students";
import { Sections } from "@/types/app";
import { JSX, useState } from "react";

export default function Home() {

  const [sections, setSections] = useState<Sections>("dashboard");

  const SectionComponents: Record<Sections, JSX.Element> = {
    dashboard: <Dashboard />,
    students: <Students />,
    curriculums: <Curriculums />,
    reports: <Reports />
  };

  return (
    <main className="min-h-dvh flex max-xl:flex-col">
      <Sidebar setSections={setSections} current={sections} />
      {SectionComponents[sections]}
    </main>
  )
}