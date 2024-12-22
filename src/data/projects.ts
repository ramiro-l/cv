import { checkSupportedLanguage, type SupportedLanguage } from "@/langs";

export interface ProjectDetail extends ProjectData, ProjectMetadata { }

interface ProjectData {
    title: string;
    type: "University Project" | "Side Project" | "Proyecto Personal" | "Proyecto Universitario";
    description: string;
}

interface ProjectMetadata {
    techStack: string[];
    link: {
        label: string;
        href: string;
    };
    img: string;
}

type ProjectEntry = { [key in SupportedLanguage]: ProjectData } & { default: ProjectMetadata };

const PROJECTS: ProjectEntry[] = [
    {
        en: {
            title: "Conway's Game of Life",
            type: "Side Project",
            description: "Conway's Game of Life implementation in Rust for the console.",
        },
        es: {
            title: "Conway's Game of Life",
            type: "Proyecto Personal",
            description: "Implementación del juego de la vida de Conway en Rust para la consola.",
        },
        default: {
            techStack: ["Rust", "CLI"],
            link: {
                "label": "GitHub",
                "href": "https://github.com/ramiro-l/Game-Of-Life-Conway-Rust"
            },
            img: "https://i.ibb.co/Zz10Dwz/game-of-life.gif"
        }
    },
    {
        en: {
            title: "Truquito App",
            type: "Side Project",
            description: "Score counter for the card game 'Truco'.",
        },
        es: {
            title: "Truquito App",
            type: "Proyecto Personal",
            description: "Contador de puntos del juego de cartas 'Truco'.",
        },
        default: {
            techStack: ["TypeScript", "Next.js", "TailwindCSS"],
            link: {
                "label": "truquito-app.pages.dev",
                "href": "https://truquito-app.pages.dev/"
            },
            img: "https://i.ibb.co/mCGrz6R/Truquito.png"
        }
    },
    {
        en: {
            title: "El Dato",
            type: "Side Project",
            description: "Real-time dollar quotes. With calculator, charts, crypto dollar, and more.",
        },
        es: {
            title: "El Dato",
            type: "Proyecto Personal",
            description: "Cotizaciones del dólar en tiempo real. Con calculadora, gráficos, crypto dólar y más.",
        },
        default: {
            techStack: ["TypeScript", "Next.js", "TailwindCSS"],
            link: {
                "label": "eldato.com.ar",
                "href": "https://eldato.ar/"
            },
            img: "https://i.ibb.co/crvFQp3/El-Dato.png"
        }
    },
    {
        en: {
            title: "Web - Old Exams",
            type: "Side Project",
            description: "Viewer for old exams from the FaMAF faculty.",
        },
        es: {
            title: "Web - Exámenes Viejos",
            type: "Proyecto Personal",
            description: "Visualizador de exámenes viejos de la facultad FaMAF.",
        },
        default: {
            techStack: ["TypeScript", "Astro", "TailwindCSS", "ShadcnUI"],
            link: {
                "label": "examenes-viejos.pages.dev",
                "href": "https://examenes-viejos.pages.dev/"
            },
            img: "https://i.ibb.co/kKv1B9z/Banner-Examenes-Viejos.png"
        }
    },
    {
        en: {
            title: "El Switcher",
            type: "University Project",
            description: "El Switcher is a real-time game inspired by a board game.",
        },
        es: {
            title: "El Switcher",
            type: "Proyecto Universitario",
            description: "El Switcher es un juego en tiempo real inspirado en un juego de mesa.",
        },
        default: {
            techStack: [
                "TypeScript",
                "Vite",
                "TailwindCSS",
                "ShadcnUI",
                "Websockets",
                "SQLite",
                "FastAPI"
            ],
            link: {
                "label": "GitHub",
                "href": "https://github.com/orgs/DeMarc-Team/repositories"
            },
            img: "https://i.ibb.co/VBvCwPQ/El-Switcher.png"
        }
    },
    {
        en: {
            title: "Repo Downloader",
            type: "Side Project",
            description: "Download files/folders by selecting them from a GitHub repository.",
        },
        es: {
            title: "Repo Downloader",
            type: "Proyecto Personal",
            description: "Descarga archivos/carpetas seleccionándolos de un repositorio de GitHub.",
        },
        default: {
            techStack: [
                "API",
                "Next.js",
                "TailwindCSS",
                "ShadcnUI",
                "TypeScript"
            ],
            link: {
                "label": "repo-downloader.pages.dev",
                "href": "https://repo-downloader.pages.dev/"
            },
            img: "https://raw.githubusercontent.com/ramiro-l/repo-downloader/refs/heads/main/app/og.png"
        }
    }
];


const getProjects = (locale: string): ProjectDetail[] => {
    if (!checkSupportedLanguage(locale)) {
        throw new Error(`Unsupported locale: ${locale}`);
    }
    return PROJECTS.map((edu) => {
        const { default: metadata, ...data } = edu;
        return { ...data[locale], ...metadata };
    });
};

export default getProjects;
