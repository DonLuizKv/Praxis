"use client";
import { Dashboard } from "@/components/admin/dashboard/Dashboard";
import { Sidebar } from "@/components/admin/Sidebar";
import { usePreventBackNavigation } from "@/hooks/client/usePreventBackNavigation";
import { useSocket } from "@/hooks/server/useSocket";
import { useEffect } from "react";

export default function Home() {
  const { socket } = useSocket();
  usePreventBackNavigation();

  useEffect(() => {
    socket?.on("users:create", (message) => console.log(message));
  }, [socket]);

  return (
    <div className="flex h-dvh justify-center ">
      <div className="flex w-dvw h-full max-w-[1550px] max-xl:flex-col max-xl:h-full ">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  )
}