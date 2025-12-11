import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/12.jpg";
import { Camera, Heart, Sparkles, ScrollText } from "lucide-react"; // Novos ícones

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

  // Ícones para os pontos de compromisso
  const commitmentPoints = [
    { icon: Camera, label: "Registro Fiel e Emocionado" },
    { icon: Sparkles, label: "Seleção Cuidadosa das fotos" },
    { icon: ScrollText, label: "Diagramação Harmoniosa" },
    { icon: Heart, label: "Acabamento de Alta Qualidade" },
  ];

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-20 sm:py-32 bg-background relative overflow-hidden"
    >
      {/* Decoração de Fundo Suave (Glow) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LADO ESQUERDO: Imagem com nova proporção e estilo */}
          <div className={`relative w-full lg:w-1/2 max-w-md lg:max-w-none transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            {/* Elemento decorativo atrás da imagem */}
            <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-3xl -z-10" />

            <div className="relative aspect-[5/5] rounded-3xl overflow-hidden shadow-xl group">
              <img
                src={aboutImage}
                alt="Equipe Exclusiva Foto e Vídeo em ação"
                className="
                  w-full h-full object-cover
                  grayscale group-hover:grayscale-0
                  transition-all duration-700 ease-in-out
                  scale-100 group-hover:scale-105
                "
              />
              {/* Overlay gradiente sutil na imagem */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Selo Flutuante (opcional, pode remover se achar demais) */}
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-lg border border-border/50 hidden md:flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary fill-primary/20" />
              <div>
                <p className="font-bold text-foreground leading-none">Emoção</p>
                <p className="text-sm text-muted-foreground">Em cada detalhe</p>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Conteúdo Baseado no Novo Texto */}
          <div className={`flex-1 flex flex-col pt-8 lg:pt-0 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-sm font-bold tracking-wider uppercase text-primary">
                Nossa Essência
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Transformamos sua formatura em uma <span className="text-primary italic relative">
                lembrança eterna.
                {/* Sublinhado decorativo */}
              </span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                A <strong>Exclusiva Foto e Vídeo</strong> é especializada em registrar a emoção das formaturas. Mais do que fotos, criamos álbuns feitos com carinho, qualidade e atenção aos mínimos detalhes.
              </p>

              {/* Card de Destaque para o Processo */}
              <div className="bg-primary/5 p-6 rounded-2xl border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Sparkles size={80} />
                </div>
                <p className="relative z-10 font-medium text-foreground/90 text-base">
                  "Fotografamos cada etapa do seu grande dia. Após o evento, nossa equipe seleciona os melhores registros para montar um álbum exclusivo, pensado para valorizar sua trajetória com olhar profissional e sensibilidade."
                </p>
              </div>

              <p>
                Cada página é construída para transmitir a emoção, o orgulho e a conquista que tornam esse momento tão especial, contando a <em>sua</em> história.
              </p>
            </div>

            {/* Seção "Nosso Compromisso" */}
            <div className="mt-10 pt-8 border-t border-border/40">
              <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                <ScrollText className="w-5 h-5 text-primary" />
                Nosso Compromisso
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {commitmentPoints.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                    <item.icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;