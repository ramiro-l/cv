import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Ramiro Lugo Viola | CV",
  description: "Estudiante de Licenciatura en Ciencias de la Computación.",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="py-5">{children}</body>
    </html>
  );
}
