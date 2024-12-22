import { ThemeProvider } from "next-themes";
import { Lato } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import React from "react";
import "../globals.css";

const lato = Lato({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale} className={lato.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          themes={["light", "dark"]}
          enableSystem
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
