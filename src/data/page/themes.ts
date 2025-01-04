import { LanguageSpecificData } from "@/data/get-data"

export const Themes = new LanguageSpecificData<string>({
    system: {
        en: "System",
        es: "Sistema",
    },
    light: {
        en: "Light",
        es: "Claro",
    },
    dark: {
        en: "Dark",
        es: "Oscuro",
    },
})
