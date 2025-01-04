interface EducationData {
    school: string
    degree: string
    start: string
    end: string
}

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
