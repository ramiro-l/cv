import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export interface WorkDetail {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: string;
  start: string;
  end: string;
  description: string;
}

export interface EducationDetail {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface ProjectDetail {
  title: string;
  techStack: string[];
  type: "Side Project" | "University Project";
  description: string;
  img: string;
  link?: {
    label: string;
    href: string;
  };
}

interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  contact: {
    email: string;
    social: {
      name: string;
      url: string;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[];
  };
  education: EducationDetail[];
  work: WorkDetail[];
  skills: string[];
  projects: ProjectDetail[];
}

export const RESUME_DATA: ResumeData = {
  name: "Ramiro Lugo Viola",
  initials: "RL",
  location: "Cordoba, Argentina",
  locationLink: "https://www.google.com/maps/place/C%C3%B3rdoba",
  about: "Estudiante de Licenciatura en Ciencias de la Computación.",
  summary:
    "Disfruto del desarrollo de software, estoy siempre aprendiendo nuevas tecnologías y metodologías. Valoro el código limpio, eficiente y escalable.",
  avatarUrl: "",
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
  education: [
    {
      school: "Universidad Nacional de Cordoba (FaMAF)",
      degree: "Licenciatura en Ciencias de la Computación.",
      start: "2022",
      end: "ACTUALIDAD",
    },
  ],
  work: [
    // {
    //   company: "Ejemplo",
    //   link: "https://ejemplo.co",
    //   badges: ["Remoto"],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description:
    //     "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    // },
  ],
  skills: [
    "C",
    "Rust",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Html",
    "CSS",
    "Bash",
  ],
  projects: [
    {
      title: "Conway's Game of Life",
      type: "Side Project",
      techStack: ["Rust", "CLI"],
      description:
        "Implementación del juego de la vida de Conway en Rust para la consola.",
      link: {
        label: "GitHub",
        href: "https://github.com/ramiro-l/Game-Of-Life-Conway-Rust",
      },
      img: "https://i.ibb.co/Zz10Dwz/game-of-life.gif",
    },
    {
      title: "Truquito App",
      type: "Side Project",
      techStack: ["TypeScript", "Next.js", "TailwindCSS"],
      description: "Contador de puntos del juego de cartas 'Truco'.",
      link: {
        label: "truquito-app.pages.dev",
        href: "https://truquito-app.pages.dev/",
      },
      img: "https://i.ibb.co/mCGrz6R/Truquito.png",
    },

    {
      title: "El Dato",
      type: "Side Project",
      techStack: ["TypeScript", "Next.js", "TailwindCSS"],
      description:
        "Cotizaciones del dólar en tiempo real. Con calculadora, gráficos, crypto dólar y más.",
      link: {
        label: "eldato.com.ar",
        href: "https://eldato.ar/",
      },
      img: "https://i.ibb.co/crvFQp3/El-Dato.png",
    },
    {
      title: "Web - Examenes Viejos",
      type: "Side Project",
      techStack: ["TypeScript", "Astro", "TailwindCSS", "ShadcnUI"],
      description: "Visualizador de exámenes viejos de la facultad FaMAF.",
      link: {
        label: "examenes-viejos.pages.dev",
        href: "https://examenes-viejos.pages.dev/",
      },
      img: "https://i.ibb.co/kKv1B9z/Banner-Examenes-Viejos.png",
    },
    {
      title: "El Switcher",
      type: "University Project",
      techStack: [
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "ShadcnUI",
        "Websockets",
        "SQLite",
        "FastAPI",
      ],
      description:
        "El Switcher es un juego en tiempo real inspirado en un juego de mesa.",
      link: {
        label: "GitHub",
        href: "https://github.com/orgs/DeMarc-Team/repositories",
      },
      img: "https://i.ibb.co/VBvCwPQ/El-Switcher.png",
    },
    {
      title: "Repo Downloader",
      type: "Side Project",
      techStack: ["API", "Next.js", "TailwindCSS", "ShadcnUI", "TypeScript"],
      description:
        "Descarga archivos/carpetas seleccionándolos de un repositorio de GitHub.",
      link: {
        label: "repo-downloader.pages.dev",
        href: "https://repo-downloader.pages.dev/",
      },
      img: "https://raw.githubusercontent.com/ramiro-l/repo-downloader/refs/heads/main/app/og.png",
    },
  ],
} as const;
