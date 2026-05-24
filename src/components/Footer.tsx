import Image from "next/image";
import Link from "next/link";
import { Facebook, MessageCircle, MapPin } from "lucide-react";
import { SITE, NAV_LINKS, IMAGES } from "@/lib/constants";
import { whatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const links = [...NAV_LINKS.left, ...NAV_LINKS.right];

  return (
    <footer id="contacto" className="bg-secondary text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-4">
            <Image
              src={IMAGES.logo}
              alt={SITE.name}
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {SITE.tagline}. {SITE.slogan}
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-bold text-accent mb-4">Enlaces</h3>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-bold text-accent mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={whatsAppUrl("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <MessageCircle size={18} className="text-whatsapp" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>
                  {SITE.location}
                  <br />
                  <span className="text-white/55 text-xs">
                    {SITE.locationNear}
                  </span>
                </span>
              </li>
            </ul>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold hover:bg-white hover:text-secondary transition"
              aria-label="Facebook"
            >
              <Facebook size={18} />
              Síguenos en Facebook
            </a>
          </div>
        </div>

        <p className="text-center text-white/40 text-sm">
          © {new Date().getFullYear()} {SITE.name} · Calderón, Ecuador
        </p>
      </div>
    </footer>
  );
}
