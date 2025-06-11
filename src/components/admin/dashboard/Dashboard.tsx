"use client"
import BigGrid from "@/components/ui/BinnaclesGrid";
import BentoCard from "./BentoCard";
import HeaderSection from "@/components/ui/HeaderSection";
import { useData } from "@/hooks/auth/useData";
import { useEffect } from "react";
import { useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import Stadistics from "./Stadistics";
import ChartCard from "@/components/ui/ChartCard";
import { GenerateDataGraphic } from "@/utils/GenerateDataGraphic";

export function Dashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data } = useData();

  useEffect(() => {
    if (data && data.students.length > 0) setIsLoading(false);
  }, [data])

  if (isLoading) return (
    <div className="flex items-center justify-center h-full w-full">
      <IconLoader2 size={40} stroke={1} className="animate-spin" />
    </div>
  );

  // const studen = Array.from({ length: 50 }, (_, i) => {
  //   // Simula condiciones iniciales
  //   const initialHasScenary = Math.random() < 0.8;
  //   const initialHasARL = Math.random() < 0.9;
  //   const initialHasCoverLetter = Math.random() < 0.85;
  //   const initialBinnacles = Math.floor(Math.random() * 17); // de 0 a 16

  //   // Simula pérdida (decadencia) con probabilidad
  //   const lostScenary = Math.random() < 0.2 && initialHasScenary;
  //   const lostARL = Math.random() < 0.3 && initialHasARL;
  //   const lostCover = Math.random() < 0.25 && initialHasCoverLetter;
  //   const lostBinnacles = Math.random() < 0.3 ? Math.floor(initialBinnacles * Math.random()) : initialBinnacles;

  //   return {
  //     id: i + 1,
  //     name: `Estudiante ${i + 1}`,
  //     email: `estudiante${i + 1}@correo.com`,
  //     identity_document: 10000000 + Math.floor(Math.random() * 10000000),
  //     scenary: !lostScenary && initialHasScenary
  //       ? {
  //         id: 1,
  //         name: "Escenario A",
  //         address: "Dirección X",
  //       }
  //       : null,
  //     state: true,
  //     profile_photo: "foto.jpg",
  //     documents: {
  //       arl: !lostARL && initialHasARL ? { name: "ARL.pdf", file_path: "arl.pdf" } : null,
  //       coverLetter: !lostCover && initialHasCoverLetter ? { name: "Carta.pdf", file_path: "carta.pdf" } : null,
  //     },
  //     binnacles: Array.from({ length: lostBinnacles }, (_, j) => ({
  //       name: `Binnacle ${j + 1}`,
  //       file_path: `binnacle${j + 1}.pdf`,
  //     })),
  //   };
  // });


  return (
    <section className="flex flex-col gap-2 h-full w-full max-lg:items-center px-4 pb-4">
      <HeaderSection title="Dashboard" faculty="Facultad de Ingenieria en Sistemas" />
      <article className="h-full w-full grid grid-cols-4 grid-rows-4 max-lg:flex max-lg:flex-col max-lg:w-[500px] max-md:w-full gap-4">
        <BentoCard
          shadow={false}
          addClass="bg-none border-none"
          gridStyle={{ rows: "row-span-4", columns: "col-span-1 " }}>
          <Stadistics data={data.students} />
        </BentoCard>
        <BentoCard addClass="bg-[#f1f1f1] border border-[#c8c8c8] max-lg:h-full" gridStyle={{ rows: "row-span-2 ", columns: "col-span-1" }}></BentoCard>
        <BentoCard addClass="bg-[#f1f1f1] border border-[#c8c8c8] max-lg:h-full" gridStyle={{ rows: "row-span-2", columns: "col-span-2" }}>
          <ChartCard type="line" data={GenerateDataGraphic(data.students)} disabledLabels={true} />
        </BentoCard>
        <BentoCard addClass="bg-[#f1f1f1] border border-[#c8c8c8] max-lg:h-full" gridStyle={{ rows: "row-span-2", columns: "col-span-1" }}></BentoCard>
        <BentoCard addClass="bg-[#f1f1f1] border border-[#c8c8c8] max-lg:h-full" gridStyle={{ rows: "row-span-2", columns: "col-span-1" }}>
          <BigGrid data={data.students} />
        </BentoCard>
        <BentoCard addClass="bg-[#f1f1f1] border border-[#c8c8c8] max-lg:h-full" gridStyle={{ rows: "row-span-2", columns: "col-span-1" }}>
        </BentoCard>
      </article>
    </section>
  )
}

