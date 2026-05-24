"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { whatsAppUrl } from "@/lib/whatsapp";
import clsx from "clsx";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const allLinks = [...NAV_LINKS.left, ...NAV_LINKS.right];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled
          ? "border-b border-tertiary/60 bg-white/95 py-2 shadow-sm backdrop-blur-xl"
          : "bg-white/70 py-3 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="#inicio" className="flex items-center gap-2.5">
          <Image
            src="/logo_lavanderia.png"
            alt={SITE.name}
            width={48}
            height={48}
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            priority
          />
          <span className="hidden font-bold text-secondary text-sm sm:block">
            1000 Burbujas
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-secondary/80 hover:text-primary transition relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <a
          href={whatsAppUrl("general")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:scale-[1.02]"
        >
          <MessageCircle size={16} />
          {SITE.phone}
        </a>

        <button
          type="button"
          className="lg:hidden p-2 text-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar" : "Menú"}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-tertiary bg-white px-4 py-6 shadow-lg">
          <ul className="flex flex-col items-center gap-4">
            {allLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-secondary hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={whatsAppUrl("general")}
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-white"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
