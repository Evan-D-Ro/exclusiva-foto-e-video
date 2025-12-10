import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-team.jpg";
import { Camera, Heart, Award, Users } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Camera, value: "10+", label: "Anos de experiência" },
    { icon: Heart, value: "5000+", label: "Formandos atendidos" },
    { icon: Award, value: "100%", label: "Satisfação garantida" },
    { icon: Users, value: "50+", label: "Turmas por ano" },
  ];

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold tracking-widest uppercase text-sm mb-6">
            Quem Somos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Transformando momentos em <span className="text-primary">memórias eternas</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className={`relative transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Equipe Exclusiva Foto e Vídeo"
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>
            
            {/* Accent Elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
              A <strong className="text-primary font-semibold">Exclusiva Foto e Vídeo</strong> é especializada em registrar 
              a emoção das formaturas e transformar esses momentos em álbuns feitos com carinho, 
              qualidade e atenção aos detalhes.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Fotografamos cada etapa do seu grande dia e selecionamos os melhores registros 
              para montar um álbum exclusivo, pensado para valorizar sua trajetória.
            </p>

            <blockquote className="relative pl-6 border-l-4 border-primary py-2">
              <p className="text-lg italic text-foreground/80">
                "Com olhar profissional e sensibilidade, criamos álbuns que contam histórias — a sua história."
              </p>
            </blockquote>

            <p className="text-lg font-medium text-primary">
              Na Exclusiva Foto e Vídeo, sua formatura se torna uma lembrança eterna.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
