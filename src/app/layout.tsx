import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const asap = Rubik({
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
      <body className={asap.className}>
        {children}
      </body>
    </html>
  );
}
