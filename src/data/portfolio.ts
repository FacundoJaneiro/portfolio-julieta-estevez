export type MediaType = "article" | "video" | "audio" | "instagram" | "youtube" | "podcast" | "soundcloud";

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  mediaType: MediaType;
  date: string;
  source?: string;
  url?: string;
  embedId?: string;
  thumbnailUrl?: string;
  duration?: string;
  tags?: string[];
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
    id: "loc1",
    title: "Spot institucional — APUBA",
    description:
      "Locución de spot publicitario para campaña de afiliación sindical. Estilo cálido y cercano, producción de Estudio Sonoro.",
    mediaType: "audio",
    date: "2024-05-10",
    source: "APUBA",
    duration: "0:30",
    tags: ["institucional", "spot", "sindicato"],
  },
  {
    id: "loc2",
    title: "Narración documental — Historia de la UBA",
    description:
      "Voz en off para documental de 45 minutos sobre los 200 años de la Universidad de Buenos Aires. Registro formal y emotivo.",
    mediaType: "audio",
    date: "2023-09-17",
    source: "UBA",
    duration: "45:00",
    tags: ["documental", "narración", "universidad"],
  },
  {
    id: "loc3",
    title: "Demo de locución comercial",
    description:
      "Compilado de estilos: institucional, comercial joven, informativo y dramático. Producción propia.",
    mediaType: "audio",
    date: "2024-01-20",
    source: "SICONARA",
    duration: "3:15",
    tags: ["demo", "comercial", "variedad"],
  },
];

// ── PRODUCCIÓN PERIODÍSTICA ───────────────────────────────────────────────────
export const produccionItems: WorkItem[] = [
  {
    id: "pro1",
    title: "Producción especial: crisis habitacional en CABA",
    description:
      "Investigación de tres meses sobre el mercado inmobiliario porteño. Coordinación de equipo de cinco periodistas y camarógrafos.",
    mediaType: "video",
    date: "2024-08-05",
    source: "IP Noticias",
    embedId: "dQw4w9WgXcQ",
    duration: "22:40",
    tags: ["investigación", "vivienda", "CABA"],
  },
  {
    id: "pro2",
    title: "Dirección editorial: especial aniversario Malvinas",
    description:
      "Coordinación del especial de 2 horas para el 42.° aniversario de la Guerra de Malvinas. Selección de archivo, entrevistas a veteranos y guión.",
    mediaType: "video",
    date: "2024-04-02",
    source: "Crónica TV",
    embedId: "dQw4w9WgXcQ",
    duration: "1:58:00",
    tags: ["producción", "Malvinas", "especial"],
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
