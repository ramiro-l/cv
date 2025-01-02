import { GitHubIcon, LinkedInIcon } from "@/components/icons"

/**
 *  NOTE:
 *  Constants data for the website.
 *  This data not change between languages.
 */

interface ConstData {
    name: string
    initials: string
    location: string
    locationLink: string
    avatarUrl: string
    metaDescription: string
    contact: {
        email: string
        social: {
            name: string
            url: string
            icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
        }[]
    }
    skills: string[]
}

export const CONST_DATA: ConstData = {
    name: "Ramiro Lugo Viola",
    initials: "RL",
    location: "Córdoba, Argentina",
    locationLink: "https://www.google.com/maps/place/C%C3%B3rdoba",
    avatarUrl: "", // TODO: Add avatar URL
    metaDescription:
        "Developer and student of Computer Science. This is my personal website where I share my projects and experiences.",
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
    skills: [
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
        "Html",
        "CSS",
        "Bash",
    ],
} as const
