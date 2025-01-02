import React from "react"
import { Lato } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { ViewTransitions } from "next-view-transitions"

import { SupportedLanguage } from "@/langs"

import "@/app/globals.css"

const lato = Lato({
    weight: ["400", "700"],
    style: "normal",
    subsets: ["latin"],
})

export default async function LangLayout({
    children,
    params: { lang = "en" },
}: Readonly<{
    children: React.ReactNode
    params: { lang: SupportedLanguage }
}>) {
    return (
        <ViewTransitions>
            <html
                lang={lang}
                className={lato.className}
                suppressHydrationWarning
            >
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
        </ViewTransitions>
    )
}
