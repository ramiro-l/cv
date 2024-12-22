import { checkSupportedLanguage, type SupportedLanguage } from "@/langs";

const ABOUT_ME: { [key in string]: { [key in SupportedLanguage]: string } } = {
    profile: {
        en: "Developer and student of the Bachelor of Computer Science.",
        es: "Desarrollador y estudiante de Licenciatura en Ciencias de la Computación.",
    },
    summary: {
        en: "I enjoy software development, I'm always learning new technologies and methodologies. I value clean, efficient and scalable code.",
        es: "Disfruto del desarrollo de software, estoy siempre aprendiendo nuevas tecnologías y metodologías. Valoro el código limpio, eficiente y escalable.",
    }
};


const getAboutMe = (key: string, locale: string): string => {
    if (!checkSupportedLanguage(locale)) {
        throw new Error(`Unsupported locale: ${locale}`);
    }
    if (!ABOUT_ME[key]) {
        throw new Error(`No title found for key: ${key}`);
    }
    return ABOUT_ME[key][locale];
};

export default getAboutMe;
