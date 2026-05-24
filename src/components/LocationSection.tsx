import { MapPin, Clock, Phone, ParkingCircle, Navigation } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function LocationSection() {
  const addressText = `${SITE.name}\n${SITE.location}\n${SITE.locationNear}\n${SITE.locationArea}`;

  const infoCards = [
    {
      icon: MapPin,
      title: "Dirección",
      text: addressText,
      link: SITE.mapsUrl,
      linkText: "Abrir en Google Maps",
    },
    {
      icon: Clock,
      title: "Horario",
      text: `${SITE.hours.weekdays} · ${SITE.hours.sunday}`,
    },
    {
      icon: Phone,
      title: "Teléfono",
      text: SITE.phone,
      link: `tel:+${SITE.phoneIntl}`,
      linkText: "Llamar ahora",
    },
    {
      icon: ParkingCircle,
      title: "Parqueadero",
      text: "Amplio parqueadero disponible para clientes",
    },
  ];

  return (
    <section id="ubicacion" className="bg-tertiary-soft/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            Nuestra ubicación
          </h2>
          <p className="mt-3 text-lg text-secondary/60">
            {SITE.locationNear} · {SITE.locationArea}
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl">
          <iframe
            title="Ubicación Lavandería 1000 Burbujas — Capitán Giovanni Calles, Quito"
            src={SITE.mapsEmbedSrc}
            className="aspect-[16/10] w-full min-h-[420px] border-0 md:min-h-[520px] lg:min-h-[580px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <p className="mt-4 text-center text-sm text-secondary/55">
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            Ver ubicación exacta en Google Maps
          </a>
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-tertiary bg-white p-5 shadow-sm transition hover:shadow-brand"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-bold text-secondary">{item.title}</h3>
              <p className="mt-1 flex-1 text-sm text-secondary/65 leading-relaxed whitespace-pre-line">
                {item.text}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                >
                  {item.title === "Dirección" && <Navigation size={14} />}
                  {item.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
