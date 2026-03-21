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
  tagline: "Contando historias desde el micrófono,\nla calle y el estudio",

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
    bio: "Soy Julieta Estévez, Locutora Nacional y Periodista. Cuento historias desde el micrófono, la calle y el estudio con energía, pasión y mirada propia.",
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
        type: "audio" as const,
        items: [] as WorkItem[],
        comingSoon: true,
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
