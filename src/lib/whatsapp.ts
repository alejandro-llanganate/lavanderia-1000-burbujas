import { SITE, type ServiceId } from "./constants";

const MESSAGES: Record<string, string> = {
  general: `¡Hola! Vi su página web y me gustaría más información sobre ${SITE.name}. 🫧`,
  pedido: `¡Hola! Quiero hacer un pedido en ${SITE.name}.`,
  peso:
    "¡Hola! Quiero cotizar *Lavado al Peso*.\n\n⚖️ Kilos aproximados:\n👕 Tipo de ropa:\n\n¿Precio y tiempo? Gracias.",
  autoservicio:
    "¡Hola! Consulta sobre *Autoservicio*.\n\n🕐 Día y hora que planeo ir:\n🧺 ¿Hay máquinas disponibles?\n\nGracias.",
  seco:
    "¡Hola! Necesito *Lavado al Seco*.\n\n👔 Prendas:\n📋 Cantidad:\n\n¿Precio y entrega? Gracias.",
};

export function whatsAppUrl(key: string = "general", customText?: string): string {
  const text = customText ?? MESSAGES[key] ?? MESSAGES.general;
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;
}

export function buildOrderMessage(
  nombre: string,
  servicio: string,
  detalle?: string
): string {
  let text = `¡Hola! Soy *${nombre}* y quiero un pedido:\n\n`;
  text += `🧺 *Servicio:* ${servicio}\n`;
  if (detalle) text += `📝 *Detalle:* ${detalle}\n`;
  text += `\n¿Me confirman disponibilidad y precio? Gracias.`;
  return text;
}

export type { ServiceId };
