import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-graduation.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Formandos celebrando"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-foreground/40" />
      
      {/* Animated Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-primary-foreground/20 via-primary-foreground/5 to-transparent transform -skew-x-12 animate-light-ray" />
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-primary-foreground/15 via-primary-foreground/5 to-transparent transform skew-x-12 animate-light-ray animation-delay-300" />
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-primary-foreground/10 via-primary-foreground/5 to-transparent transform -skew-x-6 animate-light-ray animation-delay-500" />
      </div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-foreground/20 rounded-full animate-float animation-delay-200" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-float animation-delay-400" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-sm font-medium tracking-widest uppercase mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Exclusiva Foto e Vídeo
            </span>
          </div>
          
          {/* Main Heading with Letter Animation */}
          <h1 className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block">Sua formatura,</span>
            <span className="block mt-2 relative">
              <span className="relative inline-block">
                eternizada
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-foreground/60 to-transparent animate-shimmer-line" />
              </span>
            </span>
            <span className="block mt-2">com exclusividade.</span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Transformamos momentos únicos em lembranças que duram para sempre, 
            com emoção, qualidade e atenção aos detalhes.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button variant="hero" size="xl" asChild className="group relative overflow-hidden">
              <a
                href="https://wa.me/5544998611548"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/20 to-primary-foreground/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                Fale Conosco
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              asChild
              className="text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground backdrop-blur-sm"
            >
              <a href="#sobre" className="group">
                Conheça nosso trabalho
                <ChevronDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#sobre" className="block group">
          <div className="flex flex-col items-center gap-2">
            <span className="text-primary-foreground/60 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5 group-hover:border-primary-foreground/60 transition-colors">
              <div className="w-1 h-2 bg-primary-foreground/60 rounded-full animate-scroll-indicator" />
            </div>
          </div>
        </a>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
