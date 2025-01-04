import { LanguageSpecificData } from "@/data/get-data"

export const Introduction = new LanguageSpecificData<string>({
    profile: {
        en: "Developer and student of the Bachelor of Computer Science.",
        es: "Desarrollador y estudiante de Licenciatura en Ciencias de la Computación.",
    },
    summary: {
        en: "I enjoy software development, I'm always learning new technologies and methodologies. I value clean, efficient and scalable code.",
        es: "Disfruto del desarrollo de software, estoy siempre aprendiendo nuevas tecnologías y metodologías. Valoro el código limpio, eficiente y escalable.",
    },
})
