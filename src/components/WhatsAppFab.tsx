"use client";

import { MessageCircle } from "lucide-react";
import { whatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFab() {
  return (
    <a
      href={whatsAppUrl("general")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-2xl shadow-whatsapp/40 transition hover:scale-110 animate-pulse-soft"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
