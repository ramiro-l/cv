import { checkSupportedLanguage, type SupportedLanguage } from "@/langs"

const ABOUT_ME: { [key in string]: { [key in SupportedLanguage]: string } } = {
    profile: {
        en: "Developer and student of the Bachelor of Computer Science.",
        es: "Desarrollador y estudiante de Licenciatura en Ciencias de la Computación.",
    },
    summary: {
        en: "I enjoy software development, I'm always learning new technologies and methodologies. I value clean, efficient and scalable code.",
        es: "Disfruto del desarrollo de software, estoy siempre aprendiendo nuevas tecnologías y metodologías. Valoro el código limpio, eficiente y escalable.",
    },
}

const getAboutMe = (key: string, lang: string): string => {
    if (!checkSupportedLanguage(lang)) {
        throw new Error(`Unsupported language: ${lang}`)
    }
    if (!ABOUT_ME[key]) {
        throw new Error(`No about me found for key: ${key}`)
    }
    return ABOUT_ME[key][lang]
}

export default getAboutMe
