import type { Metadata } from "next";
import "@/styles/globals.css"
import "@/styles/Animations.css"
import { Asap } from "next/font/google";
import { SocketProvider } from "@/hooks/server/useSocket";
import { DataProvider } from "@/hooks/auth/useData";
import AnimatedLayout from "@/components/ui/AnimatedLayout";

const asap = Asap({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praxis",
  description: "Una aplicacion de gestion de documentos de practicas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_animed.ico" />
      </head>
      <body className={asap.className}>
        <SocketProvider>
          <DataProvider>
            <AnimatedLayout>
              {children}
            </AnimatedLayout>
          </DataProvider>
        </SocketProvider>
      </body>
    </html>
  );
}
