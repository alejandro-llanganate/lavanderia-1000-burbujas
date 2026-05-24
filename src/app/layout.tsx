import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { assetPath } from "@/lib/paths";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1000burbujas.ec";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lavandería 1000 Burbujas | Calderón, Quito",
  description:
    "Lavandería nueva en Calderón. Lavado impecable, secado eficiente, servicio a domicilio y autoservicio. Pide por WhatsApp.",
  openGraph: {
    title: "Lavandería 1000 Burbujas",
    description: "Burbujas de frescura, ropa siempre limpia.",
    images: [assetPath("/logo_lavanderia.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
