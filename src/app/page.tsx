import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import FacilitiesSection from "@/components/FacilitiesSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import OrderSection from "@/components/OrderSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <FacilitiesSection />
        <ServicesCarousel />
        <PricingSection />
        <AboutSection />
        <OrderSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
