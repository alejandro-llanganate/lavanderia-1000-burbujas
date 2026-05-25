"use client";

import { useState, FormEvent } from "react";
import {
  Scale,
  WashingMachine,
  Shirt,
  Send,
  User,
  FileText,
} from "lucide-react";
import { whatsAppUrl, buildOrderMessage } from "@/lib/whatsapp";
import type { ServiceId } from "@/lib/whatsapp";

const QUICK_ORDERS: {
  id: ServiceId;
  icon: typeof Scale;
  title: string;
  subtitle: string;
}[] = [
  { id: "peso", icon: Scale, title: "Al peso", subtitle: "Cotizar kilos" },
  { id: "autoservicio", icon: WashingMachine, title: "Autoservicio", subtitle: "Usar máquinas" },
  { id: "seco", icon: Shirt, title: "Lavado en seco", subtitle: "Prendas finas" },
];

export default function OrderSection() {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("Lavado al peso");
  const [detalle, setDetalle] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = nombre.trim() || "Cliente";
    const msg = buildOrderMessage(name, servicio, detalle.trim() || undefined);
    window.open(whatsAppUrl("pedido", msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="pedido"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">Haz tu pedido</h2>
          <p className="mt-3 text-white/60 max-w-md mx-auto">
            Un toque y te abrimos WhatsApp con el mensaje listo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          {QUICK_ORDERS.map(({ id, icon: Icon, title, subtitle }) => (
            <a
              key={id}
              href={whatsAppUrl(id)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-accent/50 hover:bg-white/10 hover:-translate-y-1"
            >
              <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/30 text-white transition group-hover:bg-accent group-hover:text-secondary">
                <Icon size={26} />
              </span>
              <strong className="text-white text-sm">{title}</strong>
              <span className="text-white/50 text-xs mt-1">{subtitle}</span>
            </a>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto rounded-3xl bg-white p-8 shadow-2xl"
        >
          <h3 className="text-xl font-bold text-secondary text-center mb-6">
            Pedido personalizado
          </h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="nombre" className="flex items-center gap-2 text-sm font-bold text-secondary mb-1.5">
                <User size={16} className="text-primary" />
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="w-full rounded-xl border-2 border-tertiary px-4 py-3 focus:border-primary outline-none"
              />
            </div>
            <div>
              <label htmlFor="servicio" className="flex items-center gap-2 text-sm font-bold text-secondary mb-1.5">
                <WashingMachine size={16} className="text-primary" />
                Servicio
              </label>
              <select
                id="servicio"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className="w-full rounded-xl border-2 border-tertiary px-4 py-3 focus:border-primary outline-none bg-white"
              >
                <option>Lavado al peso</option>
                <option>Autoservicio</option>
                <option>Lavado en seco</option>
              </select>
            </div>
            <div>
              <label htmlFor="detalle" className="flex items-center gap-2 text-sm font-bold text-secondary mb-1.5">
                <FileText size={16} className="text-primary" />
                Detalle
              </label>
              <textarea
                id="detalle"
                value={detalle}
                onChange={(e) => setDetalle(e.target.value)}
                rows={3}
                placeholder="Cantidad de ropa, horario preferido…"
                className="w-full rounded-xl border-2 border-tertiary px-4 py-3 focus:border-primary outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-full bg-whatsapp py-4 font-bold text-white transition hover:bg-whatsapp-dark"
            >
              <Send size={18} />
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
