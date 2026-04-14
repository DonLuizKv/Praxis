"use client"
import BigGrid from "@/components/ui/BinnaclesGrid";
import BentoCard from "./BentoCard";
import HeaderSection from "@/components/ui/HeaderSection";
import { useEffect } from "react";
import { useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import Stadistics from "./Stadistics";
import { useData } from "@/hooks/general/useData";
import { Student } from "@/types/user";
import { useSocket } from "@/hooks/server/useSocket";
import ChartCard from "@/components/ui/ChartCard";
import { GenerateDataGraphic } from "@/utils/GenerateDataGraphic";

export function Dashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [validateSocket, setValidateSocket] = useState<{ message: string }>({ message: "" });
  const { data, loadingData } = useData();
  const { socket } = useSocket();

  if (loadingData) return (
    <div className="flex items-center justify-center h-full w-full">
      <IconLoader2 size={40} stroke={1} className="animate-spin" />
    </div>
  );

  return (
    <section className="flex flex-col gap-2 w-full max-lg:items-center px-4 pb-4">
      <HeaderSection title="Dashboard" faculty="Facultad de Ingenieria en Sistemas" />
      <article className="h-full w-full grid grid-cols-4 grid-rows-4 max-lg:flex max-lg:flex-col max-lg:w-[500px] max-md:w-full gap-4">
        <BentoCard
          shadow={false}
          addClass="bg-none border-none"
          gridStyle={{ rows: "row-span-4", columns: "col-span-1 " }}>
          <Stadistics data={students} />
        </BentoCard>
        <BentoCard addClass="bg-[#f1f1f1] border border-[#c8c8c8] max-lg:h-full" gridStyle={{ rows: "row-span-2 ", columns: "col-span-1" }}></BentoCard>
        <BentoCard addClass="bg-[#f1f1f1] border border-[#c8c8c8] max-lg:h-full" gridStyle={{ rows: "row-span-2", columns: "col-span-2" }}>
          {/* <ChartCard type="line" data={GenerateDataGraphic(students)} disabledLabels={true} /> */}
        </BentoCard>
        <BentoCard addClass="bg-[#f1f1f1] border border-[#c8c8c8] max-lg:h-full" gridStyle={{ rows: "row-span-2", columns: "col-span-1" }}></BentoCard>
        <BentoCard addClass="bg-[#f1f1f1] border border-[#c8c8c8] max-lg:h-full" gridStyle={{ rows: "row-span-2", columns: "col-span-1" }}>
          <BigGrid data={students} />
        </BentoCard>
        <BentoCard addClass="bg-[#f1f1f1] border border-[#c8c8c8] max-lg:h-full" gridStyle={{ rows: "row-span-2", columns: "col-span-1" }}>
        </BentoCard>
      </article>
    </section>
  )
}

