import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ramiro Lugo Viola",
  initials: "RL",
  location: "Cordoba, Argentina",
  locationLink: "https://www.google.com/maps/place/C%C3%B3rdoba",
  about: "Estudiante de Licenciatura en Ciencias de la Computación.",
  summary:
    "Disfruto del desarrollo de software y estoy siempre aprendiendo nuevas tecnologías y metodologías. Valoro el código limpio, eficiente y escalable.Busco proyectos que representen un desafío.",
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
        url: "https://www.linkedin.com/in/ramiro-l/",
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
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Git",
    "Html",
    "CSS",
  ],
  projects: [
    {
      title: "El Dato",
      techStack: ["Side Project", "TypeScript", "Next.js", "TaiwindCSS"],
      description: "Cotizacione del dólar en tiempo real.",

      link: {
        label: "eldato.com.ar",
        href: "https://eldato.com.ar/",
      },
    },
    {
      title: "Truqito App",
      techStack: ["Side Project", "TypeScript", "Next.js", "TaiwindCSS"],
      description: "Contador de puntos del juego de cartas 'Truco'.",

      link: {
        label: "truquito-app.pages.dev",
        href: "https://truquito-app.pages.dev/",
      },
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
      description: "Visualizador de examenes viejos de la facultad FaMAF.",

      link: {
        label: "examenes-viejos.pages.dev",
        href: "https://examenes-viejos.pages.dev/",
      },
    },
  ],
} as const;
