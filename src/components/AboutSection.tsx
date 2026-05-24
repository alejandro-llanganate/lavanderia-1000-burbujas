"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Droplets } from "lucide-react";
import { SITE, STATS } from "@/lib/constants";

const FEATURES = [
  "Instalaciones modernas y limpias",
  "Parqueadero amplio para tu comodidad",
  "Atención rápida por WhatsApp",
  "Variedad de servicios en un solo lugar",
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold text-tertiary/30 pointer-events-none select-none">
        1000
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <Droplets size={16} />
              Sobre nosotros
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary leading-tight">
              {SITE.name}
              <span className="text-primary"> en Calderón</span>
            </h2>
            <p className="mt-6 text-secondary/70 text-lg leading-relaxed">
              Combinamos equipos industriales con un trato cercano. Lavandería nueva
              pensada para quienes valoran tiempo, calidad y un espacio impecable.
            </p>
            <ul className="mt-8 space-y-4">
              {FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 font-medium text-secondary"
                >
                  <CheckCircle2 size={22} className="text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`rounded-3xl p-6 text-center border transition hover:shadow-brand ${
                  i === 1
                    ? "bg-primary text-white border-primary sm:col-span-1 sm:row-span-1 sm:-translate-y-4 shadow-xl"
                    : "bg-tertiary-soft border-tertiary"
                }`}
              >
                <p
                  className={`text-4xl font-bold mb-2 ${
                    i === 1 ? "text-white" : "text-primary"
                  }`}
                >
                  {stat.value}
                </p>
                <p
                  className={`text-sm font-medium ${
                    i === 1 ? "text-white/85" : "text-secondary/65"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
