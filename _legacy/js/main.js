/**
 * Lavandería 1000 Burbujas — Landing interactions
 * Imágenes de servicios vía Unsplash Source API (sin API key)
 */

const WHATSAPP_NUMBER = "593997777138";

const MESSAGES = {
  general: "¡Hola! Vi su página web y me gustaría obtener más información sobre Lavandería 1000 Burbujas. 🫧",
  pedido: "¡Hola! Quiero hacer un pedido en Lavandería 1000 Burbujas. 🧺",
  domicilio:
    "¡Hola! Me interesa el *Servicio a Domicilio*.\n\n📍 Mi dirección:\n📦 Cantidad aproximada de ropa:\n🕐 Horario preferido de recogida:\n\nGracias.",
  peso:
    "¡Hola! Quiero cotizar *Lavado al peso*.\n\n⚖️ Kilos aproximados:\n👕 Tipo de ropa (normal/delicada):\n\n¿Me pueden indicar precio y tiempo? Gracias.",
  autoservicio:
    "¡Hola! Tengo consulta sobre *Autoservicio*.\n\n🕐 Día y hora que planeo ir:\n🧺 ¿Hay máquinas disponibles?\n\nGracias.",
  seco:
    "¡Hola! Necesito *Lavado en seco*.\n\n👔 Prendas (ej. saco, vestido, etc.):\n📋 Cantidad:\n\n¿Precio y tiempo de entrega? Gracias.",
};

const SERVICES = [
  {
    id: "domicilio",
    title: "Servicio a Domicilio",
    description: "Recogemos y entregamos tu ropa en la puerta de tu casa.",
    query: "delivery scooter laundry",
    unsplashId: "1600880292203-757bb62b4baf",
    waKey: "domicilio",
  },
  {
    id: "peso",
    title: "Lavado al peso",
    description: "Paga solo por lo que lavas. Ideal para familias y grandes volúmenes.",
    query: "laundry basket clean clothes",
    unsplashId: "1582735680886-8ebb406a41fd",
    waKey: "peso",
  },
  {
    id: "autoservicio",
    title: "Autoservicio",
    description: "Usa nuestras lavadoras y secadoras cuando quieras.",
    query: "laundromat washing machines",
    unsplashId: "1626806819282-c0baa874f6a8",
    waKey: "autoservicio",
  },
  {
    id: "seco",
    title: "Lavado al seco",
    description: "Cuidado especial para prendas delicadas y formales.",
    query: "dry cleaning suit shirt",
    unsplashId: "1558171813-dff8d8f77cf4",
    waKey: "seco",
  },
];

/** Unsplash CDN — imágenes dinámicas por búsqueda o ID fijo */
function unsplashUrl(service, width = 400) {
  if (service.unsplashId) {
    return `https://images.unsplash.com/photo-${service.unsplashId}?w=${width}&q=80&auto=format&fit=crop`;
  }
  const q = encodeURIComponent(service.query);
  return `https://source.unsplash.com/${width}x300/?${q}`;
}

function buildWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function openWhatsApp(key) {
  const msg = MESSAGES[key] || MESSAGES.general;
  window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
}

function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.innerHTML = SERVICES.map(
    (s) => `
    <article class="service-card">
      <div class="service-card__icon-wrap">
        <img
          class="service-card__icon"
          src="${unsplashUrl(s, 120)}"
          alt=""
          loading="lazy"
          width="56"
          height="56"
        />
      </div>
      <div class="service-card__body">
        <h3>${s.title}</h3>
        <p>${s.description}</p>
        <a href="#" class="service-card__link" data-wa="${s.waKey}">
          Pedir este servicio →
        </a>
      </div>
      <div class="service-card__thumb">
        <img
          src="${unsplashUrl(s, 280)}"
          alt="${s.title} — Lavandería 1000 Burbujas"
          loading="lazy"
          width="280"
          height="140"
        />
      </div>
    </article>
  `
  ).join("");
}

function initWhatsAppLinks() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsApp(el.getAttribute("data-wa"));
    });
  });
}

function initOrderForm() {
  const form = document.getElementById("order-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim() || "Cliente";
    const servicio = document.getElementById("servicio").value;
    const detalle = document.getElementById("detalle").value.trim();

    let text = `¡Hola! Soy *${nombre}* y quiero un pedido:\n\n`;
    text += `🧺 *Servicio:* ${servicio}\n`;
    if (detalle) text += `📝 *Detalle:* ${detalle}\n`;
    text += `\n¿Me confirman disponibilidad y precio? Gracias. 🫧`;

    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  });
}

function initBubbles() {
  const container = document.querySelector(".bubbles-bg");
  if (!container) return;

  for (let i = 0; i < 18; i++) {
    const b = document.createElement("div");
    b.className = "bubble";
    const size = 8 + Math.random() * 40;
    b.style.width = `${size}px`;
    b.style.height = `${size}px`;
    b.style.left = `${Math.random() * 100}%`;
    b.style.animationDuration = `${12 + Math.random() * 18}s`;
    b.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(b);
  }
}

function initNav() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });

  nav.querySelectorAll(".nav__links a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });
}

function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  initWhatsAppLinks();
  initOrderForm();
  initBubbles();
  initNav();
  initYear();
});
