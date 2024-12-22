import { SUPPORTED_LANGUAGES, SupportedLanguage } from "@/langs";
import { ThemeProvider } from "next-themes";
import { Lato } from "next/font/google";
import React from "react";
import "../globals.css";

const lato = Lato({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params: { lang },
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
