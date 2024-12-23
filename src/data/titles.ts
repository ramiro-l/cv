import { checkSupportedLanguage, type SupportedLanguage } from "@/langs";

const TITLES: { [key in string]: { [key in SupportedLanguage]: string } } = {
    about: {
        es: "Sobre mí",
        en: "About me"
    },
    work: {
        es: "Experiencia Laboral",
        en: "Work Experience"
    },
    education: {
        es: "Educación",
        en: "Education"
    },
    skills: {
        es: "Habilidades",
        en: "Skills"
    },
    projects: {
        es: "Proyectos",
        en: "Projects"
    }
};


const getTitle = (key: string, lang: string): string => {
    if (!checkSupportedLanguage(lang)) {
        throw new Error(`Unsupported language: ${lang}`);
    }
    if (!TITLES[key]) {
        throw new Error(`No title found for key: ${key}`);
    }
    return TITLES[key][lang];
};

export default getTitle;
