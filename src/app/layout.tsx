import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Ramiro Lugo Viola | CV",
  description: "Estudiante de Licenciatura en Ciencias de la Computación.",
};

const lato = Lato({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={lato.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          themes={["light", "dark"]}
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
