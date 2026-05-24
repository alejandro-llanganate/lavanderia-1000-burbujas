"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bike,
  Scale,
  WashingMachine,
  Shirt,
  MessageCircle,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { whatsAppUrl } from "@/lib/whatsapp";
import type { ServiceId } from "@/lib/whatsapp";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  bike: Bike,
  scale: Scale,
  "washing-machine": WashingMachine,
  shirt: Shirt,
};

export default function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <section id="servicios" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-secondary md:text-4xl">
            Servicios
          </h2>
          <p className="mt-2 text-secondary/55">
            Elige y escríbenos por WhatsApp.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Lista compacta */}
          <div className="flex flex-col gap-2 lg:col-span-4">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] ?? WashingMachine;
              const isActive = i === active;
              return (
                <motion.button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-colors ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-tertiary-soft text-secondary hover:bg-tertiary"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      isActive ? "bg-white/20" : "bg-white"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={isActive ? "text-white" : "text-primary"}
                    />
                  </span>
                  <span className="font-bold text-sm sm:text-base">{s.title}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Panel principal */}
          <div className="relative lg:col-span-8 min-h-[380px] sm:min-h-[440px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={service.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 overflow-hidden rounded-3xl shadow-xl ring-1 ring-secondary/5"
              >
                <div className="relative h-full min-h-[380px] sm:min-h-[440px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="rounded-2xl bg-white p-5 sm:p-6 shadow-2xl"
                    >
                      <h3 className="text-xl font-bold text-secondary sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-secondary/65 sm:text-base">
                        {service.description}
                      </p>
                      <a
                        href={whatsAppUrl(service.id as ServiceId)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-whatsapp-dark sm:w-auto sm:px-8"
                      >
                        <MessageCircle size={20} />
                        Pedir por WhatsApp
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
