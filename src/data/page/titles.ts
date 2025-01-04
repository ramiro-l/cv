import { LanguageSpecificData } from "@/data/get-data"

export const Titles = new LanguageSpecificData<string>({
    about: {
        en: "About me",
        es: "Sobre mí",
    },
    work: {
        en: "Work Experience",
        es: "Experiencia Laboral",
    },
    education: {
        en: "Education",
        es: "Educación",
    },
    skills: {
        en: "Skills",
        es: "Habilidades",
    },
    projects: {
        en: "Projects",
        es: "Proyectos",
    },
})
