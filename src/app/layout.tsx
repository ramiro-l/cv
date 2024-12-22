import { ThemeProvider } from "next-themes";
import { Lato } from "next/font/google";
import React from "react";
import "@/app/globals.css";
import { SupportedLanguage } from "@/langs";

const lato = Lato({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params: { lang = "en" },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: SupportedLanguage };
}>) {
  return (
    <html lang={lang} className={lato.className} suppressHydrationWarning>
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
