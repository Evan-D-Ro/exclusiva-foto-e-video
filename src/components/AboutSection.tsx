import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-team.jpg";
import { Camera, CheckCircle2 } from "lucide-react";

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
      { threshold: 0.15 } // Dispara um pouco antes para suavidade
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "10+", label: "Anos de História" },
    { value: "5k+", label: "Formandos" },
    { value: "50+", label: "Turmas/Ano" },
  ];

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="pt-24 pb-12 sm:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Decorativo Minimalista */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* LADO ESQUERDO: Imagem Editorial */}
          <div className={`relative w-full lg:w-5/12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm group">
              <img
                src={aboutImage}
                alt="Equipe Exclusiva Foto e Vídeo"
                className="
    w-full h-full object-cover
    grayscale group-hover:grayscale-0
    transition-all duration-1000 ease-in-out
    group-hover:scale-105
  "              />
              {/* Moldura sutil */}
              <div className="absolute inset-0 border-[1px] border-white/10" />
            </div>

            {/* Elemento Decorativo Flutuante */}
            <div className="absolute -bottom-8 -right-8 bg-background p-6 shadow-2xl max-w-[200px] hidden md:block border-l-4 border-primary">
              <p className="font-heading text-lg leading-tight font-bold text-foreground">
                Qualidade <br /> Garantida
              </p>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="w-2 h-2 bg-primary rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Conteúdo */}
          <div className={`flex-1 flex flex-col justify-center pt-8 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">
                Nossa Essência
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Não contamos apenas histórias. <br />
              <span className="text-primary">Nós as eternizamos.</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed mb-12 border-l border-border pl-6">
              <p>
                A <strong>Exclusiva Foto e Vídeo</strong> nasceu da paixão por capturar o irrepetível. Entendemos que a formatura não é apenas um evento; é o clímax de anos de dedicação.
              </p>
              <p>
                Nossa abordagem foge do tradicional. Misturamos a técnica do fotojornalismo com a estética de editoriais de moda, garantindo que você não tenha apenas fotos, mas obras de arte da sua própria história.
              </p>
            </div>

            {/* Checkpoints rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {['Equipe Especializada', 'Edição Premium', 'Entrega Ágil', 'Álbuns de Luxo'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-foreground/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;