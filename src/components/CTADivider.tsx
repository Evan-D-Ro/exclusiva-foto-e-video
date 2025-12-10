import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-graduation.jpg";
import { FaWhatsapp } from "react-icons/fa";

const CTADivider = () => {
  const [isInView, setIsInView] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/85" />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-gradient-x" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary/50 rounded-full animate-float animation-delay-200" />
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float animation-delay-400" />
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-primary/20 rounded-full animate-float animation-delay-300" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              Transforme seu momento
            </span>
          </div>

          {/* Main Text */}
          <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Sua história merece ser
            <span className="block mt-2 relative">
              <span className="relative">
                contada com arte
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path
                    d="M2 10C50 2 100 2 150 6C200 10 250 10 298 2"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-draw-line"
                    style={{
                      strokeDasharray: 300,
                      strokeDashoffset: isInView ? 0 : 300,
                      transition: 'stroke-dashoffset 1.5s ease-out 0.5s'
                    }}
                  />
                </svg>
              </span>
            </span>
          </h2>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Cada formatura é única. Cada momento, irrepetível.
            <span className="block mt-2 font-medium text-primary-foreground">Vamos eternizar o seu juntos?</span>
          </p>

          {/* CTA Button */}
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              variant="hero"
              size="xl"
              asChild
              className="group relative overflow-hidden shadow-2xl shadow-primary/30"
            >
              <a
                href="https://wa.me/5544998611548"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/30 to-primary-foreground/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <FaWhatsapp className="!w-6 !h-6 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                Solicite seu orçamento
              </a>
            </Button>
          </div>
        </div>
      </div>


    </section>
  );
};

export default CTADivider;
