"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gauge, Clock, ShieldCheck } from "lucide-react";
import { IMAGES, SITE } from "@/lib/constants";

const BADGES = [
  { icon: Gauge, label: "Alta capacidad", sub: "Equipos industriales" },
  { icon: Clock, label: "Rápido", sub: "Ciclos eficientes" },
  { icon: ShieldCheck, label: "Higiénico", sub: "Espacio impecable" },
];

export default function FacilitiesSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-tertiary/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-secondary/10">
              <Image
                src={IMAGES.facilities}
                alt={`Instalaciones de ${SITE.name} — lavadoras industriales Speed Queen`}
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl drop-shadow-lg">
                  Autoservicio profesional
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Lavadoras de gran capacidad · Calderón
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              Nuestras instalaciones
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-secondary leading-tight">
              Tecnología que cuida{" "}
              <span className="text-primary">tu ropa</span>
            </h2>
            <p className="mt-5 text-secondary/70 text-lg leading-relaxed">
              Espacio amplio, luminoso y equipado con lavadoras industriales de
              última generación. {SITE.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {BADGES.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-tertiary bg-tertiary-soft/50 p-4 transition hover:border-primary/40 hover:shadow-brand"
                >
                  <Icon size={24} className="text-primary mb-2" />
                  <p className="font-bold text-secondary text-sm">{label}</p>
                  <p className="text-secondary/60 text-xs mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
