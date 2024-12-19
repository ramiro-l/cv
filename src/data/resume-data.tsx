import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
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
    "C / C++",
    "Rust",
    "Python",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Git",
    "Html",
    "CSS",
    "Bash",
  ],
  projects: [
    {
      title: "El Dato",
      techStack: ["Side Project", "TypeScript", "Next.js", "TaiwindCSS"],
      description: "Cotizaciones del dólar en tiempo real.",
      link: {
        label: "eldato.com.ar",
        href: "https://eldato.ar/",
      },
      img: "https://i.ibb.co/crvFQp3/El-Dato.png",
    },
    {
      title: "Truquito App",
      techStack: ["Side Project", "TypeScript", "Next.js", "TaiwindCSS"],
      description: "Contador de puntos del juego de cartas 'Truco'.",
      link: {
        label: "truquito-app.pages.dev",
        href: "https://truquito-app.pages.dev/",
      },
      img: "https://i.ibb.co/mCGrz6R/Truquito.png",
    },
    {
      title: "Conway's Game of Life",
      techStack: ["Side Project", "Rust"],
      description:
        "Implementación del juego de la vida de Conway en Rust para la consola.",

      link: {
        label: "GitHub",
        href: "https://github.com/ramiro-l/Game-Of-Life-Conway-Rust",
      },
      img: "https://i.ibb.co/Zz10Dwz/game-of-life.gif",
    },
    {
      title: "Web - Examenes Viejos",
      techStack: [
        "Side Project",
        "TypeScript",
        "Astro",
        "TaiwindCSS",
        "ShadcnUI",
      ],
      description: "Visualizador de exámenes viejos de la facultad FaMAF.",
      link: {
        label: "examenes-viejos.pages.dev",
        href: "https://examenes-viejos.pages.dev/",
      },
      img: "https://i.ibb.co/kKv1B9z/Banner-Examenes-Viejos.png",
    },
    {
      title: "El Switcher",
      techStack: [
        "University Project",
        "TypeScript",
        "Vite",
        "TaiwindCSS",
        "ShadcnUI",
        "Websockets",
      ],
      description:
        "El Switcher es un juego en tiempo real inspirado en un juego de mesa.",
      link: {
        label: "GitHub",
        href: "https://github.com/orgs/DeMarc-Team/repositories",
      },
      img: "https://i.ibb.co/Q9WPG0m/El-Switcher-Imagen.png",
    },
    {
      title: "Repo-Downloader",
      techStack: [
        "Side Project",
        "API",
        "Next.js",
        "TaiwindCSS",
        "ShadcnUI",
        "TypeScript",
      ],
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
