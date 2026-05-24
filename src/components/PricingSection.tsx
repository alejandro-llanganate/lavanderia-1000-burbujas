"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Package, Clock } from "lucide-react";
import { PRICING_TABS, IMAGES } from "@/lib/constants";
import { whatsAppUrl } from "@/lib/whatsapp";

const TAB_ICONS = [DollarSign, Package, Clock];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = PRICING_TABS[activeTab];
  const Icon = TAB_ICONS[activeTab];

  return (
    <section id="precios" className="overflow-hidden bg-tertiary-soft/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-secondary md:text-4xl">
            Lavado al <span className="text-primary">peso</span>
          </h2>
          <p className="mt-2 text-secondary/55">Cotiza por WhatsApp</p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Tabs + contenido */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white p-6 shadow-brand-lg sm:p-8"
          >
            <div className="mb-6 flex gap-2">
              {PRICING_TABS.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className="relative flex-1 rounded-xl py-3 text-sm font-bold transition-colors"
                >
                  {i === activeTab && (
                    <motion.span
                      layoutId="pricing-tab"
                      className="absolute inset-0 rounded-xl bg-primary shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      i === activeTab ? "text-white" : "text-secondary/45"
                    }`}
                  >
                    {t.label}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex gap-4">
                  <motion.div
                    animate={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10"
                  >
                    <Icon size={26} className="text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">
                      {tab.highlight}
                    </p>
                    <p className="mt-2 text-secondary/60 leading-relaxed">
                      {tab.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.a
              href={whatsAppUrl("peso")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-xl bg-whatsapp py-4 font-bold text-white shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cotizar ahora
            </motion.a>
          </motion.div>

          {/* Balanza sin fondo */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md aspect-[3/4]"
            >
              <Image
                src={IMAGES.pricingScale}
                alt="Balanza digital"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 512px) 50vw"
              />
            </motion.div>

            <motion.div
              className="absolute -right-2 top-1/4 hidden rounded-2xl bg-white px-4 py-3 shadow-lg sm:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 0.4 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <p className="text-xs font-bold uppercase text-primary">Al peso</p>
              <p className="text-lg font-bold text-secondary">Cotiza ya</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
