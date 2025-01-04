import { LanguageData, LanguageSpecificData } from "@/lib/language-data"

import { GitHubIcon, LinkedInIcon } from "@/components/icons"

export const USER_DETAILS = {
    name: "Ramiro Lugo Viola",
    initials: "RL",
    location: "Córdoba, Argentina",
    locationLink: "https://www.google.com/maps/place/C%C3%B3rdoba",
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
        "Developer and student of Computer Science. This is my personal website where I share my projects and experiences.",
}

export const Introduction = new LanguageSpecificData({
    profile: {
        en: "Developer and student of the Bachelor of Computer Science.",
        es: "Desarrollador y estudiante de Licenciatura en Ciencias de la Computación.",
    },
    summary: {
        en: "I enjoy software development, I'm always learning new technologies and methodologies. I value clean, efficient and scalable code.",
        es: "Disfruto del desarrollo de software, estoy siempre aprendiendo nuevas tecnologías y metodologías. Valoro el código limpio, eficiente y escalable.",
    },
})

interface EducationData {
    school: string
    degree: string
    start: string
    end: string
}

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

interface WorkData {
    title: string
    start: string
    end: string
    description: string
}
interface WorkDefaultData {
    company: string
    logo: string
    link: string
    badges: string[]
}

export const Works = new LanguageData<WorkData, WorkDefaultData>([
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
])

export const Skills = [
    "C",
    "Rust",
    "Python",
    "SQL",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Haskell",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Linux",
    "Html",
    "CSS",
    "Bash",
]

interface ProjectData {
    title: string
    type: string
    description: string
}

interface ProjectDefaultData {
    techStack: string[]
    link: {
        label: string
        href: string
    }
    img: string
}

export const Projects = new LanguageData<ProjectData, ProjectDefaultData>([
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
            img: "https://raw.githubusercontent.com/ramiro-l/repo-downloader/refs/heads/main/app/og.png",
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
            img: "https://i.ibb.co/VBvCwPQ/El-Switcher.png",
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
            img: "https://i.ibb.co/kKv1B9z/Banner-Examenes-Viejos.png",
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
            img: "https://i.ibb.co/crvFQp3/El-Dato.png",
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
            img: "https://i.ibb.co/mCGrz6R/Truquito.png",
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
            img: "https://i.ibb.co/Zz10Dwz/game-of-life.gif",
        },
    },
])
