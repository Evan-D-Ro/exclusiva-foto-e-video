import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Video } from "lucide-react";
import heroImage from "@/assets/hero-graduation.webp";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import GraduationCapsAnimation from "@/components/GraduationCapsAnimation";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Ícones animando
  const icons = [Camera, Video];
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // --- NOVA FUNÇÃO DE SCROLL (Mesma do Header) ---
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 30; // Altura aproximada do header fixo

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.warn(`Seção "${id}" não encontrada. Verifique se a <section> tem o id correto.`);
    }
  };

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">

      {/* 1. Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Formandos celebrando"
          className="w-full h-full object-cover transition-transform duration-[15s] ease-out scale-105 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent sm:via-black/20" />
      </div>

      {/* Animação dos chapéus */}
      <GraduationCapsAnimation />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 lg:pt-12 md:pt-0">
        <div className={`max-w-2xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Tagline com ícone animado */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm font-medium tracking-[0.2em] uppercase">
              {/* Ícone animando */}
              <div className="relative w-5 h-5">
                {icons.map((Icon, i) => (
                  <Icon
                    key={i}
                    className={`
                      absolute top-0 left-0 w-5 h-5 transition-all duration-500
                      ${i === iconIndex ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                    `}
                  />
                ))}
              </div>
              Exclusiva Foto e Vídeo
            </div>
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Eternizando sua <br />
            <span className="text-primary-foreground">conquista</span> com a <br />
            grandeza que ela merece.
          </h1>

          {/* Texto */}
          <p className="text-lg text-gray-300 font-light max-w-lg mb-8 leading-relaxed">
            Não é apenas sobre tirar fotos. É sobre capturar a emoção genuína de um ciclo que se encerra e o brilho do novo que começa.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">

            {/* Botão WhatsApp (Link externo mantém <a>) */}
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

            {/* Botão Serviços (Alterado para onClick) */}
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black h-12 rounded-none px-8 backdrop-blur-sm transition-all group"
              // AQUI ESTÁ A MUDANÇA: Usamos onClick chamando a função
              onClick={() => scrollToSection("servicos")}
            >
              Nossos Serviços
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;