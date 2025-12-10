import { BookImage, Users, Truck, Camera, GraduationCap, Shirt } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: BookImage,
    title: "Produção de Álbuns",
    description:
      "Álbuns personalizados com acabamento premium e impressão de alta definição.",
  },
  {
    icon: Users,
    title: "Vendas e Atendimento",
    description:
      "Suporte especializado e condições acessíveis para formandos e comissões.",
  },
  {
    icon: Truck,
    title: "Gestão de Cobrança e Entrega",
    description:
      "Processo transparente do início ao fim, acompanhamento completo da entrega.",
  },
  {
    icon: Camera,
    title: "Cobertura Fotográfica",
    description:
      "Registro profissional de todos os momentos especiais do dia da colação.",
  },
  {
    icon: GraduationCap,
    title: "Fotos de Identificação",
    description:
      "Sessões individuais para cada formando, com qualidade profissional.",
  },
  {
    icon: Shirt,
    title: "Fornecimento de Becas",
    description:
      "Disponibilização de becas e acessórios para as fotos oficiais.",
  },
];

const ServicesSection = () => {
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
      id="servicos" 
      className="section-padding relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 50%, hsl(var(--accent)) 100%)`
      }}
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Nossos Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Soluções <span className="text-primary">completas</span> para sua formatura
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos um serviço completo de formatura, desde o primeiro contato 
            até a entrega do álbum final.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Full Service Highlight */}
        <div className={`mt-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 md:p-12 text-primary-foreground relative overflow-hidden transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-1/2 -left-1/4 w-72 h-72 bg-primary-foreground/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Serviço Completo de Formatura
            </h3>
            <p className="text-primary-foreground/90 mb-8">
              Da organização inicial até a entrega do álbum: contato com formandos, 
              fotos de identificação, fornecimento de becas, cobertura completa do 
              dia da colação e produção do álbum digital e físico.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                "Contato com formandos",
                "Fotos de identificação",
                "Fornecimento de becas",
                "Cobertura da colação",
                "Álbum digital e físico",
              ].map((item, index) => (
                <span
                  key={item}
                  className="bg-primary-foreground/10 backdrop-blur px-4 py-2 rounded-full hover:bg-primary-foreground/20 transition-colors duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
