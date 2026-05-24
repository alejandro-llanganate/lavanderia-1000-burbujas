"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE, IMAGES } from "@/lib/constants";
import { whatsAppUrl } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.facilities}
          alt="Lavadoras industriales — Lavandería 1000 Burbujas"
          fill
          className="object-cover object-center scale-105"
          sizes="100vw"
          priority
          quality={90}
        />
        <div className="absolute inset-0 hero-overlay-left" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-6 md:pt-32">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-sm font-semibold text-primary">
              Calderón · Parqueadero
            </p>

            <h1 className="text-balance text-4xl font-bold leading-tight text-secondary sm:text-5xl md:text-[3.25rem]">
              Burbujas de frescura,
              <span className="mt-1 block text-primary">
                ropa siempre limpia
              </span>
            </h1>

            <p className="mt-4 max-w-sm text-secondary/70">
              {SITE.slogan}
            </p>

            <a
              href={whatsAppUrl("pedido")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 font-bold text-white shadow-lg transition hover:scale-[1.02]"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center lg:col-span-5 lg:justify-end"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src={IMAGES.logo}
              alt={SITE.name}
              width={560}
              height={560}
              className="w-64 sm:w-72 md:w-96 lg:w-[28rem] xl:w-[32rem] drop-shadow-2xl animate-float"
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-12 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
