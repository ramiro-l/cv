import { SupportedLanguage } from "@/langs"

import ToggleTheme from "@/components/toggles/theme"

import { USER_DETAILS } from "@/data/cv"

export default function Footer({
    lang,
}: Readonly<{ lang: SupportedLanguage }>) {
    return (
        <footer className=" mx-auto my-8 mb-3 flex w-full max-w-2xl items-center justify-between max-[375px]:flex-col-reverse max-[375px]:justify-center max-[375px]:gap-4 print:hidden">
            <p
                className=" ml-1 text-nowrap text-xs text-muted-foreground"
                translate="no"
            >
                <strong>
                    © {new Date().getFullYear()} {USER_DETAILS.name}
                </strong>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
                <ToggleTheme lang={lang} />
            </div>
        </footer>
    )
}
