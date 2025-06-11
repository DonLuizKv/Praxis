"use client"
import { usePathname } from "next/navigation"
import { IconBook, IconChartPie2Filled, IconLayoutDashboardFilled, IconLogout, IconMenu2, IconMenu3, IconUsersGroup } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"
import { useLogout } from "@/hooks/client/useLogout";
import Link from "next/link";

export function Sidebar() {
  const [toggleSidebar, setToggleSiderbar] = useState<boolean>(false);
  const { logout, isLoggingOut } = useLogout();
  const pathname = usePathname();

  const routes = [
    {
      label: "Inicio",
      icon: <IconLayoutDashboardFilled size={30} />,
      href: "/admin"
    },
    {
      label: "Estudiantes",
      icon: <IconUsersGroup size={30} />,
      href: "/admin/students"
    },
    {
      label: "Curriculums",
      icon: <IconBook size={30} />,
      href: "/admin/curriculums"
    },
    {
      label: "Reportes",
      icon: <IconChartPie2Filled size={30} />,
      href: "/admin/reports"
    }
  ]

  const handleLogout = async () => {
    await logout();
  }

  if (isLoggingOut) {
    return <div className="h-full w-full flex items-center justify-center fixed top-0 left-0 z-50 backdrop-blur-[2px] bg-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Cerrando sesión...</h1>
      </div>
    </div>
  }

  return (
    <section className={`bg-[#B33A3A] h-full p-2 text-white flex flex-col gap-3 max-xl:w-full transition-all duration-300 ${toggleSidebar ? "w-fit max-xl:h-fit" : "w-[20rem] max-xl:w-full max-xl:h-fit"}`}>
      <article className={`flex items-center gap-2 ${toggleSidebar ? "justify-center" : "justify-between"}`}>
        <Image
          height={55}
          width={55}
          alt="logo"
          src={"/logos/logo_vectorized_text.png"}
          className={`rounded-[4px] max-xl:size-[3rem] ${toggleSidebar ? "hidden max-xl:flex" : "flex"}`}
        />

        <button type="button" onClick={() => setToggleSiderbar(!toggleSidebar)} className="flex items-center h-[55px] px-2 justify-center">
          {toggleSidebar ? <IconMenu3 color="#ffff" /> : <IconMenu2 color="#ffff" />}
        </button>
      </article>

      <article className={`flex flex-col gap-2 py-2 max-xl:flex-row max-xl:justify-center ${toggleSidebar ? "flex" : "max-xl:hidden"}`}>
        {
          routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`
                ${pathname === route.href ? "bg-[#F1F1F1] text-[#B33A3A]" : "text-[#F1F1F1] bg-transparent"}
                flex items-center justify-start gap-2
                p-2 rounded-[4px]
                font-semibold
                transition-all duration-200
                hover:bg-[#F1F1F1] hover:text-[#B33A3A]

              `}>
              {route.icon}
              <span className={`max-sm:hidden ${toggleSidebar ? "hidden" : "block"}`}>{route.label}</span>
            </Link>
          ))
        }
      </article>

      <article className={`h-full flex flex-col justify-end gap-2 ${toggleSidebar ? "" : "max-xl:hidden"}`}>
        <aside className={`flex flex-col justify-between gap-2 pt-2 border-t border-[#c8c8c8] max-xl:flex-row max-xl:justify-center  ${toggleSidebar && "flex-col"}`}>
          <button type="button" onClick={handleLogout} className={`flex items-center gap-2 p-2 rounded-[4px] hover:bg-[#F1F1F1]/20`}>
            <IconLogout size={30} color="#FFF" />
            {!toggleSidebar && <span className="font-semibold max-lg:hidden">Cerrar sesión</span>}
          </button>
        </aside>
      </article>
    </section>
  )
}
