export type WorkItem = {
  id: string;
  title: string;
  description: string;
  src?: string;
  link?: string;
  thumbnail?: string;
};

export type WorkTab = {
  id: string;
  label: string;
  type: "audio" | "link" | "image";
  items: WorkItem[];
  comingSoon: boolean;
};

export const CONTENT = {
  name: "Julieta Estévez",
  nameFirst: "Julieta",
  nameLast: "Estévez",
  rolesString: "LOCUTORA NACIONAL · COMUNICADORA · PERIODISTA",
  tagline: "Una voz para cada historia.",

  hero: {
    photo: '/images/hero-photo.jpg' as string | null,
    ctas: [
      { label: "VER COBERTURAS", href: "#coberturas", tab: "coberturas" },
      { label: "ESCUCHAR MI VOZ", href: "#locucion", tab: "locucion" },
      { label: "VER PRODUCCIÓN", href: "#produccion", tab: "produccion" },
    ],
  },

  media: {
    companies: [
      "Noticias",
      "Crónica TV",
      "Radio Monte Castro",
      "ETER",
      "Punto.AR",
      "APUBA",
      "SICONARA",
    ],
  },

  about: {
    title: "SOBRE\nMÍ",
    subtitle: "Periodismo con energía,\ncuriosidad y mirada propia.",
    bio: "Soy Julieta Estévez, locutora nacional (ETER) y comunicadora con 5 años de experiencia entre radio, televisión y contenido digital. Mi especialidad es traducir información compleja en un lenguaje claro y accesible, sin perder profundidad. Puedo pasar de un spot comercial a una cobertura en vivo o a un podcast institucional, encontrando en cada uno el tono justo.\nTrabajé como asistente de producción en Crónica TV, como cronista de exteriores en IP Noticias y como Community Manager durante tres años en Punto.AR Accesorios. Hago voz en off, conducción, producción periodística y contenido editorial para redes.\n¿Tenés un proyecto, una marca o un podcast que necesita voz? Hablemos.",
    cta: { label: "ESCRIBIME", href: "#contacto" },
    photo: '/images/about-photo.jpg' as string | null,
    social: [
      { platform: "instagram", label: "IG", href: "https://www.instagram.com/juliesteveez/" },
      { platform: "linkedin", label: "LINKEDIN", href: "https://www.linkedin.com/in/julieta-estévez-999268318" },
      { platform: "email", label: "", href: "mailto:julieta.estevez96@gmail.com" },
    ],
  },

  works: {
    titleLine1: "REPOSITORIO",
    titleLine2: "DE TRABAJOS",
    tabs: [
      {
        id: "coberturas",
        label: "COBERTURAS",
        type: "link" as const,
        items: [] as WorkItem[],
        comingSoon: true,
      },
      {
        id: "radio",
        label: "RADIO Y/O STREAMING",
        type: "link" as const,
        items: [] as WorkItem[],
        comingSoon: true,
      },
      {
        id: "locucion",
        label: "LOCUCIÓN COMERCIAL",
        type: "link" as const,
        items: [
          {
            id: "siconara-reel",
            title: "Siconara",
            description: "Locución comercial para Siconara",
            link: "https://www.instagram.com/reel/DS5hqqYCcKL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          },
          {
            id: "baires-bien-publico",
            title: "Buenos Aires Ciudad — Bien Público",
            description: "Locución para spot de bien público de Buenos Aires Ciudad",
            link: "https://soundcloud.com/julieta-estevez-40940972/buenos-aires-ciudad-bien-pu-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=44d26b8724974c788c7d4e32f5c92c7c",
          },
        ] as WorkItem[],
        comingSoon: false,
      },
      {
        id: "produccion",
        label: "PRODUCCIÓN PERIODÍSTICA",
        type: "link" as const,
        items: [] as WorkItem[],
        comingSoon: true,
      },
      {
        id: "redaccion",
        label: "REDACCIÓN",
        type: "link" as const,
        items: [] as WorkItem[],
        comingSoon: true,
      },
      {
        id: "redes",
        label: "REDES Y CONTENIDOS DIGITALES",
        type: "image" as const,
        items: [] as WorkItem[],
        comingSoon: true,
      },
    ] as WorkTab[],
  },

  contact: {
    titleLine1: "CON-",
    titleLine2: "TACTO",
    subtitle: "¿Tenés un proyecto? ¿Querés trabajar juntos? Escribime.",
    email: "julieta.estevez96@gmail.com",
    whatsapp: "1169409408",
    instagram: "https://www.instagram.com/juliesteveez/",
    linkedin: "https://www.linkedin.com/in/julieta-estévez-999268318",
    spotify: null as string | null,
  },
};
