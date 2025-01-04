import { GitHubIcon, LinkedInIcon } from "@/components/icons"

/**
 *  NOTE:
 *  Constants data for the website.
 *  This data not change between languages.
 */
export const CONST_DATA = {
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
        "Linux",
        "Html",
        "CSS",
        "Bash",
    ],
} as const
