import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import GallerySection from "@/components/GallerySection";
import CTADivider from "@/components/CTADivider";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    // Update page title and meta for SEO
    document.title = "Exclusiva Foto e Vídeo | Álbuns de Formatura Premium";
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <GallerySection />
      <CTADivider />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
