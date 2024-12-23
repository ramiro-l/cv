import { checkSupportedLanguage, type SupportedLanguage } from "@/langs";

const THEMES: { [key in string]: { [key in SupportedLanguage]: string } } = {
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
    }
};


const getTheme = (key: string, lang: string): string => {
    if (!checkSupportedLanguage(lang)) {
        throw new Error(`Unsupported lang: ${lang}`);
    }
    if (!THEMES[key]) {
        throw new Error(`No title found for key: ${key}`);
    }
    return THEMES[key][lang];
};

export default getTheme;
