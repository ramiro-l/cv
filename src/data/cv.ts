import { LanguageData, LanguageSpecificData } from "@/lib/language-data"

import { GitHubIcon, LinkedInIcon } from "@/components/icons"

export const USER_DETAILS = {
    name: "Ramiro Lugo Viola",
    initials: "RL",
    location: "Argentina",
    locationLink: "https://www.google.com/maps/place/Argentina",
    avatarUrl: "", // TODO: Add avatar URL
    contact: {
        email: "ramirolugov@gmail.com",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/ramiro-l/",
                icon: GitHubIcon,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ramirolugo/",
                icon: LinkedInIcon,
            },
        ],
    },
}

export const META_TAGS = {
    title: `${USER_DETAILS.name} | CV`,
    metaDescription:
        "Developer and advanced student of Computer Science. This is my personal website where I share my projects and experiences.",
}

export const Introduction = new LanguageSpecificData({
    profile: {
        en: "Developer and advanced student of the Bachelor of Computer Science.",
        es: "Desarrollador y estudiante avanzado de Licenciatura en Ciencias de la Computación.",
    },
    summary: {
        en: "I enjoy software development, I'm always learning new technologies and methodologies. I value clean, efficient and scalable code.",
        es: "Disfruto del desarrollo de software, estoy siempre aprendiendo nuevas tecnologías y metodologías. Valoro el código limpio, eficiente y escalable.",
    },
})

export const Education = new LanguageData<EducationData>([
    {
        en: {
            school: "National University of Cordoba (FaMAF)",
            degree: "Bachelor of Computer Science.",
            start: "2022",
            end: "PRESENT",
        },
        es: {
            school: "Universidad Nacional de Cordoba (FaMAF)",
            degree: "Licenciatura en Ciencias de la Computación.",
            start: "2022",
            end: "ACTUALIDAD",
        },
    },
])

export const Works = new LanguageData<WorkData, WorkDefaultData>([
    {
        en: {
            title: "Software Developer",
            start: "2025",
            end: "PRESENT",
            description: "",
        },
        es: {
            title: "Desarrollador de Software",
            start: "2025",
            end: "ACTUALIDAD",
            description: "",
        },
        default: {
            company: "Web3D.app",
            logo: "/cv/images/web3d-logo.svg",
            link: "https://web3d.app",
            badges: [],
        }
    },
])

export const Skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Git",
    "Rust",
    "Python",
    "SQL",
    "MongoDB",
    "Linux",
    "Bash",
    "C",
    "Ocaml",
    "Haskell",
]

export const Projects = new LanguageData<ProjectData, ProjectDefaultData>([
    {
        en: {
            title: "S-Sigma Web Interpreter",
            type: "Personal Project",
            description:
                "Interpreter for an academic formal language, used in the study of computability. Implementing parsing and dynamic evaluation.",
        },
        es: {
            title: "Intérprete Web S-Sigma",
            type: "Proyecto Personal",
            description:
                "Intérprete para un lenguaje formal académico, utilizado en el estudio de la computabilidad. Implementando análisis sintáctico y evaluación dinámica.",
        },
        default: {
            techStack: [
                "Vite",
                "TypeScript",
                "Monaco Editor",
            ],
            link: {
                label: "S-Sigma Interpreter",
                href: "https://ramiro-l.github.io/S-Sigma-Interprete-Web/",
            },
            img: "/cv/images/ssigma.webp",
        },
    },
    {
        en: {
            title: "Holidays Argentina",
            type: "Personal Project",
            description:
                "Minimalist calendar with information about holidays in Argentina and related data. With a focus on design and usability.",
        },
        es: {
            title: "Feriados Argentina",
            type: "Proyecto Personal",
            description:
                "Calendario minimalista con información de los feriados en Argentina y datos relacionados. Enfocándome en el diseño y la usabilidad.",
        },
        default: {
            techStack: [
                "API",
                "Next.js",
                "TailwindCSS",
                "ShadcnUI",
                "TypeScript",
            ],
            link: {
                label: "feriados.eldato.ar",
                href: "https://feriados.eldato.ar/",
            },
            img: "/cv/images/opengraph-image.webp",
        },
    },
    {
        en: {
            title: "Repo Downloader",
            type: "Side Project",
            description:
                "Download files/folders by selecting them from a GitHub repository.",
        },
        es: {
            title: "Repo Downloader",
            type: "Proyecto Personal",
            description:
                "Descarga archivos/carpetas seleccionándolos de un repositorio de GitHub.",
        },
        default: {
            techStack: [
                "API",
                "Next.js",
                "TailwindCSS",
                "ShadcnUI",
                "TypeScript",
            ],
            link: {
                label: "repo-downloader.pages.dev",
                href: "https://repo-downloader.pages.dev/",
            },
            img: "/cv/images/repo-downloader-og.webp",
        },
    },
    {
        en: {
            title: "El Switcher",
            type: "University Project",
            description:
                "El Switcher is a real-time game inspired by a board game.",
        },
        es: {
            title: "El Switcher",
            type: "Proyecto Universitario",
            description:
                "El Switcher es un juego en tiempo real inspirado en un juego de mesa.",
        },
        default: {
            techStack: [
                "TypeScript",
                "Vite",
                "TailwindCSS",
                "ShadcnUI",
                "Websockets",
                "SQLite",
                "FastAPI",
            ],
            link: {
                label: "GitHub",
                href: "https://github.com/orgs/DeMarc-Team/repositories",
            },
            img: "/cv/images/el-switcher.webp",
        },
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
            description:
                "Visualizador de exámenes viejos de la facultad FaMAF.",
        },
        default: {
            techStack: ["TypeScript", "Astro", "TailwindCSS", "ShadcnUI"],
            link: {
                label: "examenes-viejos.pages.dev",
                href: "https://examenes-viejos.pages.dev/",
            },
            img: "/cv/images/banner-examenes-viejos.webp",
        },
    },
    {
        en: {
            title: "El Dato",
            type: "Side Project",
            description:
                "Real-time dollar quotes. With calculator, charts, crypto dollar, and more.",
        },
        es: {
            title: "El Dato",
            type: "Proyecto Personal",
            description:
                "Cotizaciones del dólar en tiempo real. Con calculadora, gráficos, crypto dólar y más.",
        },
        default: {
            techStack: ["TypeScript", "Next.js", "TailwindCSS"],
            link: {
                label: "eldato.com.ar",
                href: "https://eldato.ar/",
            },
            img: "/cv/images/el-dato.webp",
        },
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
                label: "truquito-app.pages.dev",
                href: "https://truquito-app.pages.dev/",
            },
            img: "/cv/images/truquito.webp",
        },
    },
    {
        en: {
            title: "Conway's Game of Life",
            type: "Side Project",
            description:
                "Conway's Game of Life implementation in Rust for the console.",
        },
        es: {
            title: "Conway's Game of Life",
            type: "Proyecto Personal",
            description:
                "Implementación del juego de la vida de Conway en Rust para la consola.",
        },
        default: {
            techStack: ["Rust", "CLI"],
            link: {
                label: "GitHub",
                href: "https://github.com/ramiro-l/Game-Of-Life-Conway-Rust",
            },
            img: "/cv/images/game-of-life.webp",
        },
    },
])
