import { assetPath } from "./paths";

export const SITE = {
  name: "Lavandería 1000 Burbujas",
  tagline: "Burbujas de frescura, ropa siempre limpia",
  slogan: "Facilitando tu día, lavada tras lavada.",
  description:
    "Lavandería nueva en Calderón. Lavado impecable, secado eficiente, y amplio parqueadero.",
  phone: "099 777 7138",
  phoneIntl: "593997777138",
  location: "Capitán Giovanni Calles, 170203 Quito",
  locationArea: "Calderón, Quito, Ecuador",
  locationNear: "La más cercana al Coral Caran",
  coordinates: { lat: -0.09179, lng: -78.4299564 },
  mapsUrl:
    "https://www.google.com/maps/place/Lavander%C3%ADa+1000+Burbujas/@-0.09179,-78.4299564,17z",
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=-0.09179,-78.4299564&hl=es&z=17&output=embed",
  facebook: "https://www.facebook.com/profile.php?id=61557940066258",
  hours: {
    weekdays: "Lun – Sáb: 8:00 – 20:00",
    sunday: "Dom: consultar por WhatsApp",
  },
} as const;

export const IMAGES = {
  beforeAfter: assetPath("/antes-despues-ropa.jpg"),
  facilities: assetPath("/lavadora.jpg"),
  logo: assetPath("/logo_lavanderia.png"),
  pricingScale:
    "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/792x1068/prd-cl/product-medias/6b7e42af-f846-434d-8ac0-0c90fcf1922e/MK7KHAAPZ5/MK7KHAAPZ5-1/1686420820813-MK7KHAAPZ5-1-1.jpg",
} as const;

export const NAV_LINKS = {
  left: [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#precios", label: "Precios" },
  ],
  right: [
    { href: "#nosotros", label: "Nosotros" },
    { href: "#ubicacion", label: "Ubicación" },
    { href: "#contacto", label: "Contacto" },
  ],
} as const;

export type ServiceId = "domicilio" | "peso" | "autoservicio" | "seco";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: "domicilio",
    title: "Servicio a Domicilio",
    description: "Recogemos y entregamos en la puerta de tu casa.",
    icon: "bike",
    image:
      "https://img.freepik.com/foto-gratis/joven-propietaria-pequena-empresa-empacando-productos-cajas-preparandolos-entrega-mujeres-empacando-paquetes-sus-productos-que-vende-linea_657921-1227.jpg?semt=ais_rp_50_assets&w=740&q=80",
  },
  {
    id: "peso",
    title: "Lavado al Peso",
    description: "Paga solo por lo que lavas. Ideal para familias.",
    icon: "scale",
    image:
      "https://static.misionesonline.news/wp-content/uploads/2017/12/Pesarse-3g785qalqbm0.jpg",
  },
  {
    id: "autoservicio",
    title: "Autoservicio",
    description: "Lavadoras y secadoras modernas a tu ritmo.",
    icon: "washing-machine",
    image:
      "https://www.electroluxprofessional.com/es/wp-content/uploads/2024/10/Self-services-laundry_1.jpg",
  },
  {
    id: "seco",
    title: "Lavado al Seco",
    description: "Cuidado experto para prendas delicadas.",
    icon: "shirt",
    image:
      "https://inspiring.tonello.com/wp-content/uploads/2025/07/Dry_Cleaner_treating_ink_stain_on_white_shirt.jpg",
  },
];

export const STATS = [
  { value: "4", label: "Servicios disponibles" },
  { value: "100%", label: "Compromiso con calidad" },
  { value: "24h", label: "Respuesta por WhatsApp" },
] as const;

export const PRICING_TABS = [
  {
    id: "precio",
    label: "Precio",
    title: "Lavado al Peso",
    content: "Consulta precio por kilo según tipo de prenda. Escríbenos y te cotizamos al instante.",
    highlight: "Cotización personalizada",
  },
  {
    id: "incluye",
    label: "Incluye",
    title: "¿Qué incluye?",
    content: "Detergente de calidad, suavizante, secado eficiente y doblado básico según servicio.",
    highlight: "Todo incluido",
  },
  {
    id: "tiempo",
    label: "Entrega",
    title: "Tiempo de entrega",
    content: "Entrega el mismo día o al día siguiente según volumen y servicio seleccionado.",
    highlight: "Rápido y confiable",
  },
] as const;
