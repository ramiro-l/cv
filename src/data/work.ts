import { checkSupportedLanguage, type SupportedLanguage } from "@/langs";

export interface WorkDetail extends WorkData, WorkMetadata { }

interface WorkData {
    title: string;
    description: string;
    start: string;
    end: string;
}

interface WorkMetadata {
    company: string;
    link: string;
    badges: string[];
    logo: string;
}

type ProjectEntry = { [key in SupportedLanguage]: WorkData } & { default: WorkMetadata };

const WORKS: ProjectEntry[] = [
    /*
    NOTE: This is an example entry. You can remove this and add your own data.

    {
        en: {
            title: "Senior Full Stack Developer",
            start: "2021",
            end: "2024",
            description:
                "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
        },
        es: {
            title: "Desarrollador Full Stack Senior",
            start: "2021",
            end: "2024",
            description:
                "Implementé nuevas características, lideré un equipo, trabajé en mejorar la forma en que los desarrolladores envían el código, comencé la migración de Emotion a Tailwind CSS y más. Tecnologías: React, TypeScript, GraphQL",
        },
        default: {
            company: "Ejemplo",
            logo: "https://example.com/logo.png",
            link: "https://ejemplo.co",
            badges: ["Remoto"],
        }
    },
*/
];


const getWorks = (lang: string): WorkDetail[] => {
    if (!checkSupportedLanguage(lang)) {
        throw new Error(`Unsupported language: ${lang}`);
    }
    return WORKS.map((edu) => {
        const { default: metadata, ...data } = edu;
        return { ...data[lang], ...metadata };
    });
};

export default getWorks;
