import React from "react"
import { Lato } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { ViewTransitions } from "next-view-transitions"

import "@/app/globals.css"

import { Metadata } from "next"

import { META_TAGS } from "@/data/cv"

const font = Lato({
    weight: ["400", "700"],
    style: "normal",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: META_TAGS.title,
    description: META_TAGS.metaDescription,
}

export default function LangLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ViewTransitions>
            <html
                lang="en"
                className={font.className}
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
