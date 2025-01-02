"use client"

import { useTransitionRouter } from "next-view-transitions"

import { SUPPORTED_LANGUAGES } from "@/langs"

const ToggleLang = ({ lang }: { lang: string }) => {
    return (
        <div className="flex h-8 w-fit items-center gap-1 rounded-md border border-muted p-0.5 text-xs text-muted-foreground">
            {SUPPORTED_LANGUAGES.map((language) => (
                <LangButton key={language} lang={language} currentLang={lang} />
            ))}
        </div>
    )
}

const LangButton = ({
    lang,
    currentLang,
}: {
    lang: string
    currentLang: string
}) => {
    const router = useTransitionRouter()

    return (
        <button
            onClick={() => {
                if (lang !== currentLang) {
                    router.replace(`/${lang}`)
                }
            }}
            className={` flex min-w-7 items-center justify-center rounded-sm p-1.5 pb-1 uppercase text-secondary-foreground hover:bg-muted/50 hover:font-semibold hover:text-secondary-foreground ${currentLang === lang ? "!bg-muted font-semibold" : ""}`}
        >
            {lang}
        </button>
    )
}

export default ToggleLang
