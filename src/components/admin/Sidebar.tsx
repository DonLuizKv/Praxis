import { Sections } from "@/types/app";
import { IconBell, IconBrandGithub, IconChevronDown, IconChevronRight, IconLogicOr, IconLogout, IconMail, IconPhone, IconHome, IconBook, IconFileText, IconSettings, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { JSX } from "react";

interface Props {
  setSections: (v: Sections) => void;
  current: Sections;
}

type NavItem = {
  label: string;
  icon: JSX.Element;
  value: Sections;
}

const NavButton = ({ label, icon, value, current, setSections }: NavItem & { current: Sections; setSections: (v: Sections) => void }) => {
  return (
    <button
      onClick={() => setSections(value)}
      className={`
          relative
          w-full
          text-background
          flex items-center gap-2 p-2 rounded-lg
          transition-colors ease
          group
        `}
      >
      <span className={`
        text-base 
        font-semibold 
        font-asap 
        flex gap-1 items-center
        ${current === value ? "text-background" : ""}
      `}>{icon}</span>
      <span className="absolute left-8 ml-2 whitespace-nowrap opacity-0 bg-border-dark px-2 py-1 rounded-lg text-xs group-hover:opacity-100 transition-opacity duration-300 delay-100">{label}</span>
    </button>
  )
}

export function Sidebar({ setSections, current }: Props) {
  const items: NavItem[] = [
    { label: "Inicio", icon: <IconHome size={25} stroke={2} />, value: "dashboard" },
    { label: "Estudiantes", icon: <IconUser size={25} stroke={2} />, value: "students" },
    { label: "Curriculums", icon: <IconBook size={25} stroke={2} />, value: "curriculums" },
    { label: "Reportes", icon: <IconFileText size={25} stroke={2} />, value: "reports" },
  ];

  const handleLogout = async () => {
  }

  return (
    <aside className="w-fit p-4 flex flex-col gap-4 bg-red-primary rounded-2xl">
      <ExpandableButton />

      <nav className="flex flex-col items-start gap-3">
        {
          items.map((item: NavItem, index: number) => (
            <NavButton
              key={index}
              label={item.label}
              value={item.value}
              current={current}
              icon={item.icon}
              setSections={setSections}
            />
          ))
        }
      </nav>
    </aside>
  );
}

const ExpandableButton = () => {
  return (
    // 1. Añadimos overflow-hidden para ocultar los iconos cuando el botón es pequeño
    // 2. Definimos un ancho inicial (w-12) y un ancho final (w-48 o el que prefieras)
    <button className="group relative flex items-center rounded-full p-1 w-10.5 h-10.5 hover:w-40 transition-all duration-500 ease-in-out overflow-hidden">

      {/* Imagen: Siempre visible a la izquierda */}
      <div className="shrink-0">
        <Image
          src="/profile.jpeg"
          alt="User"
          width={34}
          height={34}
          className="rounded-full object-cover"
        />
      </div>

      {/* Contenedor de Iconos: Se revelan al expandirse */}
      <div className="w-full h-full text-background flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        <IconBell size={20} className="hover:scale-110 transition-transform" />
        <IconSettings size={20} className="hover:scale-110 transition-transform" />
        <IconLogout size={20} className="hover:scale-110 transition-transform" />
      </div>
    </button>
  );
}
