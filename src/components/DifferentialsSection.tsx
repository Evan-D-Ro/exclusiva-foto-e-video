import { Heart, Shield, Eye, Handshake, Star, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-graduation.jpg";

const differentials = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Tratamos cada cliente com carinho e atenção personalizada.",
  },
  {
    icon: Shield,
    title: "Comprometimento e Responsabilidade",
    description: "Cumprimos prazos e garantimos qualidade em cada entrega.",
  },
  {
    icon: Eye,
    title: "Ética e Transparência",
    description: "Relacionamento honesto e claro em todas as etapas.",
  },
  {
    icon: Handshake,
    title: "Respeito com Clientes e Parceiros",
    description: "Valorizamos cada pessoa que confia em nosso trabalho.",
  },
  {
    icon: Star,
    title: "Qualidade em Cada Detalhe",
    description: "Materiais premium e acabamento impecável em todos os álbuns.",
  },
  {
    icon: Users,
    title: "Trabalho em Equipe",
    description: "Profissionais apaixonados pelo que fazem, unidos pelo mesmo objetivo.",
  },
];

const DifferentialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="diferenciais" 
      className="section-padding relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 text-primary-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Nossos Diferenciais
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Por que escolher a{" "}
            <span className="text-primary">Exclusiva?</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Nosso compromisso é garantir que cada formando receba um registro fiel, 
            bonito e emocionado do seu grande dia.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((diff, index) => (
            <div
              key={diff.title}
              className={`group flex gap-5 p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <diff.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-primary-foreground group-hover:text-primary transition-colors duration-300">
                  {diff.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className={`mt-16 text-center max-w-4xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote className="text-xl md:text-2xl font-light italic text-primary-foreground/80 leading-relaxed relative">
            <span className="absolute -top-6 -left-4 text-6xl text-primary/30 font-heading">"</span>
            Cada álbum é elaborado por profissionais experientes, com seleção 
            cuidadosa das fotos, diagramação harmoniosa e acabamento de alta qualidade.
            <span className="absolute -bottom-8 -right-4 text-6xl text-primary/30 font-heading">"</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
