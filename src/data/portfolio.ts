export type MediaType = "article" | "video" | "audio" | "instagram" | "youtube" | "podcast" | "soundcloud" | "image";

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  body?: string;
  mediaType: MediaType;
  date: string;
  source?: string;
  url?: string;
  secondaryUrl?: string;
  secondaryUrlLabel?: string;
  embedId?: string;
  thumbnailUrl?: string;
  thumbnailUrl2?: string;
  thumbnailPosition?: string;
  thumbnailUrl2Position?: string;
  duration?: string;
  tags?: string[];
  featured?: boolean;
  comingSoon?: boolean;
}

// ── COBERTURAS ────────────────────────────────────────────────────────────────
export const coberturasItems: WorkItem[] = [
  {
    id: "cob1",
    title: "Móvil en Barrio Chino",
    description:
      'Recorremos la calle principal del barrio chino para "Mi pais" para la pantalla de IP Noticias',
    mediaType: "video",
    date: "2024-02-10",
    source: "IP Noticias",
    embedId: "uj5KxFM3JFw",
    duration: "15:12",
    tags: ["entretenimiento", "cultura", "en vivo"],
  },
  {
    id: "cob2",
    title: " Crónica del conflicto en el Garrahan",
    description:
      'Crisis en el Garrahan: 70 horas por semana y sueldos que no alcanzan.Cobertura para el programa "A las 7" con la conducción de Agustina Diaz y Diego García Sáenz en vivo para IP Noticias',
    mediaType: "video",
    date: "2024-06-12",
    source: "IP Noticias",
    embedId: "d2iaPO8nZLA",
    duration: "09:08",
    tags: ["salud", "política", "móvil"],
  },
  {
    id: "cob3",
    title: "Salida al aire: Simulador de F1",
    description:
      "Móvil en vivo desde el la rural probando el simulador de F1. Recorremos la exposición con 'Mi pais' junto a Vicky Vanella por IP Noticias",
    mediaType: "video",
    date: "2024-03-08",
    source: "IP Noticias",
    embedId: "b8Ii_32BHXA",
    duration: "06:04",
    tags: ["F1", "deportes", "tecnología"],
  },
  {
    id: "cob4",
    title: "Móvil aumento de colectivos",
    description: "A raíz de entrevistas callejeras con pasajeros consultados por el aumento de colectivos, logramos, junto a Agus Kämpfer y David Kavlin, hacer un balance sobre la recepción de la sociedad con este tipo de medidas. Todo para la pantalla de IP Noticias.",
    mediaType: "video",
    date: "2024-01-01",
    source: "IP Noticias",
    embedId: "M-l33MsIMo8",
    duration: "12:39",
    tags: ["SUBE", "colectivo", "actualidad"],
  },
  {
    id: "cob5",
    title: "Cobertura tren solidario",
    description: "Frente a la angustia de las inundaciones, la respuesta siempre es la solidaridad. En este móvil de 'Mañanas Picantes', con David Kavlin y Agustina Kämpfer, estuvimos en la estación de Retiro para vivir la partida de un nuevo Tren Solidario con destino a Zárate y Campana.",
    mediaType: "video",
    date: "2024-01-01",
    source: "IP Noticias",
    embedId: "eiLbihWxCSQ",
    duration: "04:03",
    tags: ["inundaciones", "en vivo", "ayuda"],
  },
  {
    id: "cob6",
    title: "MADRES DE LA PATRIA - María Catalina Echeverría Vidal",
    description: "En el marco del especial por el Día de la Bandera para ETER, recordamos a María Catalina Echevarría por su labor y compromiso con nuestra patria e historia",
    mediaType: "video",
    date: "2024-01-01",
    source: "ETER",
    embedId: "9wqlcvY_hso",
    duration: "02:48",
    tags: ["mujeres", "historia", "patria"],
  },
];

// ── RADIO Y STREAMING ─────────────────────────────────────────────────────────
export const radioItems: WorkItem[] = [
  {
    id: "rad1",
    title: "Radioteatro: El Consorcio",
    description: "Radioteatro producido y emitido en radio.",
    mediaType: "soundcloud",
    date: "2024-01-01",
    url: "https://soundcloud.com/julieta-estevez-40940972/radioteatro-el-consorcio",
    tags: ["radioteatro", "ficción", "radio"],
  },
  {
    id: "rad2",
    title: "Columna Homogénica",
    description: "Columna emitida en radio.",
    mediaType: "soundcloud",
    date: "2024-01-01",
    url: "https://soundcloud.com/julieta-estevez-40940972/columna-homoge-nica",
    tags: ["columna", "radio"],
  },
  {
    id: "rad3",
    title: "Acá Hay un Pacto",
    description: "",
    mediaType: "soundcloud",
    date: "2024-01-01",
    tags: ["radio"],
  },
];

// ── LOCUCIÓN COMERCIAL ────────────────────────────────────────────────────────
export const locucionItems: WorkItem[] = [
  {
    id: "loc-demo",
    title: "Demo de Locución Comercial",
    description:
      "Compilación de trabajos que muestran versatilidad de registro: spots institucionales, narración documental, comerciales y e-learning. Producción de Estudio Sonoro.",
    mediaType: "audio",
    date: "2024-01-01",
    source: "Demo Reel",
    duration: "3:45",
    tags: ["demo", "comercial", "institucional", "documental"],
    featured: true,
    comingSoon: true,
  },
  {
    id: "loc1",
    title: "Spot institucional — APUBA",
    description:
      "Locución de spot publicitario para campaña de afiliación sindical. Estilo cálido y cercano, producción de Estudio Sonoro.",
    mediaType: "instagram",
    date: "2024-05-10",
    source: "APUBA",
    url: "https://www.instagram.com/reel/C-aUDbrxKtx/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    tags: ["institucional", "spot", "sindicato"],
  },
  {
    id: "loc2",
    title: "Buenos Aires Ciudad — Bien Público",
    description: "Locución para spot de bien público de Buenos Aires Ciudad.",
    mediaType: "soundcloud",
    date: "2024-01-01",
    source: "Buenos Aires Ciudad",
    url: "https://soundcloud.com/julieta-estevez-40940972/buenos-aires-ciudad-bien-pu-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=44d26b8724974c788c7d4e32f5c92c7c",
    tags: ["bien público", "institucional", "Buenos Aires"],
  },
  {
    id: "loc4",
    title: "Vanish — Aviso Exclusivo",
    description: "Locución para aviso exclusivo de Vanish.",
    mediaType: "soundcloud",
    date: "2024-01-01",
    source: "Vanish",
    url: "https://soundcloud.com/julieta-estevez-40940972/vanish-aviso-exclusivo?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=374df3b0b89e4669821e953cdd026aed",
    tags: ["comercial", "spot", "Vanish"],
  },
  {
    id: "loc3",
    title: "Locución comercial — Siconara",
    description: "Spot de locución comercial para Siconara.",
    mediaType: "instagram",
    date: "2024-01-20",
    source: "Siconara",
    url: "https://www.instagram.com/reel/DS5hqqYCcKL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    tags: ["comercial", "spot", "Siconara"],
  },
];

// ── PRODUCCIÓN PERIODÍSTICA ───────────────────────────────────────────────────
export const produccionItems: WorkItem[] = [
  {
    id: "pro-mc",
    title: "Radio Monte Castro",
    description: "Conductora y productora de streaming y radio.",
    body: "Mi recorrido en producción comenzó en Radio Monte Castro, donde además de conducir un programa me desempeñé como productora de streaming y radio. Fue el espacio donde adquirí las herramientas necesarias para manejar la agenda periodística y donde fui construyendo, poco a poco, mi criterio profesional.",
    mediaType: "image",
    date: "2022-01-01",
    source: "Radio Monte Castro",
    thumbnailUrl: "/images/produccion/monte-castro.jpg",
    thumbnailUrl2: "/images/produccion/monte-castro-2.jpg",
    thumbnailPosition: "center 65%",
    tags: ["radio", "streaming", "conducción", "producción"],
  },
  {
    id: "pro-cronica",
    title: "Crónica TV",
    description: "Asistente de producción, PNT y coordinación de invitados.",
    body: "Al poco tiempo me contactaron para ser asistente de producción en Crónica TV, donde tuve la posibilidad de rodearme de grandes profesionales como Chiche Gelblung, a quien tuve el placer de tratar muy de cerca. En este rol me encargué de la PNT (Publicidad No Tradicional) y de gestionarla con las distintas áreas como comercial, control y redacción. También coordiné invitados, facilitando su paso por el canal.",
    mediaType: "image",
    date: "2023-01-01",
    source: "Crónica TV",
    thumbnailUrl: "/images/produccion/cronica-tv.jpg",
    thumbnailUrl2: "/images/produccion/cronica-tv-2.jpg",
    tags: ["TV", "PNT", "invitados", "producción"],
  },
  {
    id: "pro-ip",
    title: "IP Noticias",
    description: "Producción bajo presión en un canal de noticias 24 horas.",
    body: "Cuando llegué a IP Noticias empecé a entender la producción periodística desde otro lado. Aprendí a producir bajo mucha presión y a describir cuestiones sociales sensibles de la manera que se merecen. También logré consolidar una agenda de contactos de actualidad, donde se pueden encontrar desde personajes del espectáculo hasta políticos o científicos.",
    mediaType: "image",
    date: "2024-01-01",
    source: "IP Noticias",
    thumbnailUrl: "/images/produccion/ip-noticias.jpg",
    thumbnailUrl2: "/images/produccion/ip-noticias-2.jpg",
    tags: ["TV", "noticias", "24 horas", "producción"],
  },
  {
    id: "pro-eter",
    title: "Tesis de carrera — ETER",
    description: "Producción ejecutiva de un programa de TV y uno de radio.",
    body: "Para mi etapa de tesis de la carrera de Locución Integral asumí el desafío de producir un programa de radio y otro de televisión. En la materia televisiva decidimos realizar un programa patrio llamado \"De ponchos y banderas\", sobre las prendas textiles que nos envuelven como argentinos. En cuanto a radio, optamos por un magazine llamado \"La bella y la bestia\", donde la perspectiva giraba sobre la diferencia y el balance entre una joven (yo) y un hombre de mediana edad, donde él hablaba de política y yo de la música del under.",
    mediaType: "image",
    date: "2024-06-01",
    source: "ETER",
    thumbnailUrl: "/images/produccion/eter-proyectos.jpg",
    thumbnailUrl2: "/images/produccion/eter-proyectos-2.jpg",
    url: "https://youtu.be/EiAtQs4Xlp4",
    secondaryUrl: "https://youtu.be/3vFRJexKGWo",
    secondaryUrlLabel: "La bella y la bestia",
    tags: ["TV", "radio", "tesis", "ETER"],
  },
];

// ── REDACCIÓN ─────────────────────────────────────────────────────────────────
export const redaccionItems: WorkItem[] = [
  {
    id: "red1",
    title: "Kowalik: \"En un demo lo primero que tiene que escucharse es un registro más cercano a la voz hablada\"",
    description: "",
    mediaType: "article",
    date: "2024-01-01",
    source: "ETER",
    url: "https://eter.edu.ar/pasa-en-eter/kowalik-en-un-demo-lo-primero-que-tiene-que-escucharse-es-un-registro-mas-cercano-a-la-voz-hablada",
    tags: ["entrevista", "locución", "ETER"],
  },
  {
    id: "red2",
    title: "Un día de improvisación teatral en locución de la mano de Nano Zyssholtz",
    description: "",
    mediaType: "article",
    date: "2024-01-01",
    source: "ETER",
    url: "https://eter.edu.ar/pasa-en-eter/un-dia-de-improvisacion-teatral-en-locucion-de-la-mano-de-nano-zyssholtz",
    tags: ["teatro", "locución", "ETER"],
  },
  {
    id: "red3",
    title: "Herrera: \"Hay que insistir, a veces no tenés la facilidad de conocer a alguien\"",
    description: "",
    mediaType: "article",
    date: "2024-01-01",
    source: "ETER",
    url: "https://eter.edu.ar/pasa-en-eter/herrera-hay-que-insistir-a-veces-no-tenes-la-facilidad-de-conocer-a-alguien",
    tags: ["entrevista", "ETER"],
  },
];

// ── REDES Y CONTENIDOS DIGITALES ──────────────────────────────────────────────
export const redesItems: WorkItem[] = [
  {
    id: "red-d1",
    title: "Reels de cobertura: paro docente nacional",
    description:
      "Serie de 4 reels para Instagram con imágenes del paro docente, declaraciones de gremialistas y datos del conflicto.",
    mediaType: "instagram",
    date: "2024-09-01",
    source: "@julietaestevez",
    tags: ["reels", "docentes", "educación"],
  },
  {
    id: "red-d2",
    title: "Hilo explicativo: ¿qué es el DNU y cómo funciona?",
    description:
      "Contenido educativo en formato carrusel para explicar el decreto de necesidad y urgencia en términos accesibles para el público general.",
    mediaType: "instagram",
    date: "2024-01-10",
    source: "@julietaestevez",
    tags: ["educativo", "política", "carrusel"],
  },
  {
    id: "red-d3",
    title: "Live de streaming: debate presidencial en tiempo real",
    description:
      "Conducción de stream en YouTube con análisis en vivo del debate presidencial. Más de 3.000 espectadores simultáneos.",
    mediaType: "youtube",
    date: "2023-10-08",
    source: "YouTube",
    embedId: "dQw4w9WgXcQ",
    duration: "2:15:00",
    tags: ["streaming", "debate", "en vivo"],
  },
];
