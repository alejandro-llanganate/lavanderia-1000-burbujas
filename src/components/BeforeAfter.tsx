"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shirt } from "lucide-react";
import CompareSplit from "./CompareSplit";
import { IMAGES } from "@/lib/constants";
import { whatsAppUrl } from "@/lib/whatsapp";

export default function BeforeAfter() {
  return (
    <section id="resultados" className="bg-tertiary-soft/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
              <Sparkles size={14} />
              Transformación real
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-secondary md:text-4xl lg:text-5xl">
              De{" "}
              <span className="text-red-500">sucio</span> a{" "}
              <span className="text-primary">impecable</span>
            </h2>

            <p className="mt-4 max-w-md text-lg text-secondary/70 leading-relaxed">
              La diferencia se nota en cada lavada: ropa fresca, limpia y lista
              para usar.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Eliminación de manchas difíciles",
                "Secado eficiente sin malos olores",
                "Cuidado según tipo de tela",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-medium text-secondary"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
                    <Shirt size={16} className="text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={whatsAppUrl("pedido")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white shadow-lg transition hover:bg-primary-dark"
            >
              Quiero este resultado
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <CompareSplit
              src={IMAGES.beforeAfter}
              beforeLabel="Antes"
              afterLabel="Después"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
