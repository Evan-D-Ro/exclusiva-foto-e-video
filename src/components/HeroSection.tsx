import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-graduation.jpg";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* 1. Background Image com Zoom Lento */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Formandos celebrando"
          className="w-full h-full object-cover transition-transform duration-[10s] ease-out scale-105 hover:scale-110"
        />
        {/* Overlay Escuro apenas na parte inferior e esquerda para leitura */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent sm:via-black/20" />
      </div>

      {/* 2. Conteúdo Alinhado à Esquerda/Baixo */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-28 sm:pb-42 px-4 sm:px-6">
        <div className={`max-w-2xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Tagline pequena e elegante */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`h-[1px] w-12 bg-primary transition-all duration-1000 delay-300 ${isVisible ? 'w-12' : 'w-0'}`} />
            <span className="text-primary-foreground/80 text-sm font-medium tracking-[0.2em] uppercase">
              Exclusiva Foto e Vídeo
            </span>
          </div>

          {/* Título Compacto e Impactante */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Eternizando sua <br />
            <span className="text-primary-foreground">conquista</span> com a <br />
            grandeza que ela merece.
          </h1>

          {/* Texto de apoio limpo */}
          <p className="text-lg text-gray-300 font-light max-w-lg mb-8 leading-relaxed">
            Não é apenas sobre tirar fotos. É sobre capturar a emoção genuína de um ciclo que se encerra e o brilho do novo que começa.
          </p>

          {/* Botões alinhados */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-none border-l-2 border-white/20 hover:border-white transition-all"
              asChild
            >
              <a
                href="https://wa.me/5544998611548"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaWhatsapp className="!w-8 !h-8" />
                Orçamento via WhatsApp
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black h-12 rounded-none px-8 backdrop-blur-sm transition-all"
              asChild
            >
              <a href="#sobre" className="flex items-center gap-2 group">
                Ver Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;