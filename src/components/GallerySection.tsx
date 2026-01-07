import { useState, useEffect, useRef } from "react";
import { X, Camera, Aperture, Focus } from "lucide-react";
import gallery1 from "@/assets/17.png";
import gallery2 from "@/assets/19.jpg";
import gallery3 from "@/assets/13.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/18.png";
import gallery6 from "@/assets/gallery-5.jpg";

const galleryImages = [
  { src: gallery1, alt: "Álbum de formatura premium" },
  { src: gallery2, alt: "Celebração de formatura" },
  { src: gallery3, alt: "Formanda com diploma" },
  { src: gallery4, alt: "Entrega de diploma" },
  { src: gallery5, alt: "Formando com diploma" },
  { src: gallery6, alt: "Fotógrafo em ação" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [focusedImage, setFocusedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="bg-foreground relative overflow-hidden">

      {/* --- CAMADA 1: INTERFACE DA CÂMERA (VIEWFINDER) --- */}
      {/* Adicionei 'container mx-auto' aqui também para que as bordas da câmera acompanhem a largura do conteúdo */}
      <div className="absolute inset-0 pointer-events-none select-none z-20">
        <div className="w-full h-full max-w-[1400px] mx-auto relative">

          {/* Cantos (Corner Brackets) - Posicionados dentro do limite max-w */}
          <div className="absolute top-6 left-6 lg:top-10 lg:left-10 w-12 h-12 lg:w-20 lg:h-20 border-l-[3px] border-t-[3px] border-primary/50" />
          <div className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 lg:w-20 lg:h-20 border-r-[3px] border-t-[3px] border-primary/50" />
          <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 w-12 h-12 lg:w-20 lg:h-20 border-l-[3px] border-b-[3px] border-primary/50" />
          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 w-12 h-12 lg:w-20 lg:h-20 border-r-[3px] border-b-[3px] border-primary/50" />

          {/* Info da Câmera (f/2.8, REC) - Alinhados com os cantos */}
          <div className="absolute bottom-10 left-10 lg:bottom-16 lg:left-16 text-primary-foreground/60 font-mono text-xs space-y-1 hidden md:block">
            <div className="flex items-center gap-2">
              <Aperture className="w-4 h-4" />
              <span>f/2.8</span>
            </div>
            <div className="flex items-center gap-2">
              <Focus className="w-4 h-4" />
              <span>1/250s</span>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 lg:bottom-16 lg:right-16 text-primary-foreground/60 font-mono text-xs hidden md:block">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.7)]" />
              <span className="font-bold tracking-widest">REC</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- CAMADA 2: ELEMENTOS DE FUNDO (Grades e Foco) --- */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Ponto de Foco Central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-20">
          <div className="absolute inset-0 border border-primary-foreground/30 rounded-full animate-pulse" />
          <div className="absolute inset-4 border border-primary-foreground/20 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-px h-full bg-primary-foreground/20" />
            <div className="absolute w-full h-px bg-primary-foreground/20" />
          </div>
        </div>

        {/* Linhas da Grade (Rule of Thirds) */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-5">
          {[...Array(4)].map((_, i) => (
            <div key={`v-${i}`} className="border-r border-primary-foreground/50" style={{ gridColumn: i + 1 }} />
          ))}
          {[...Array(4)].map((_, i) => (
            <div key={`h-${i}`} className="border-b border-primary-foreground/50" style={{ gridRow: i + 1 }} />
          ))}
        </div>
      </div>

      {/* --- CAMADA 3: CONTEÚDO PRINCIPAL --- */}
      {/* MUDANÇAS AQUI: 
          1. py-24 e md:py-32: Muito padding vertical para o conteúdo não bater nos cantos da câmera.
          2. px-8 e md:px-16: Padding lateral para afastar das bordas laterais.
      */}
      <div className="container mx-auto relative z-10 py-24 px-8 md:py-32 md:px-16 max-w-[1400px]">

        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 lg:mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold tracking-widest uppercase text-sm mb-6 border border-primary/10">
            <Camera className="w-4 h-4" />
            Eternize seus momentos
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Registre cada <span className="text-primary">instante!</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ajudamos você a criar lembranças inesquecíveis com qualidade cinematográfica.
          </p>
        </div>

        {/* Grid de Imagens com Moldura Interna */}
        <div className="relative">
          {/* Moldura ao redor do Grid (Fina) */}
          <div className="absolute -inset-4 lg:-inset-8 rounded-xl pointer-events-none" />

          {/* MUDANÇA DO GRID:
             grid-cols-2 (Mobile/Tablet) -> xl:grid-cols-3 (Apenas telas muito grandes)
          */}

          {/* GRID: Mantém 2 colunas até o LG (1024px). Só vira 3 no desktop real */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative aspect-square overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(index)}
                onMouseEnter={() => setFocusedImage(index)}
                onMouseLeave={() => setFocusedImage(null)}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay with Camera Effect */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500">
                  {/* Focus brackets animation */}
                  <div className={`absolute inset-4 transition-all duration-500 ${focusedImage === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                    <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary" />
                  </div>

                  {/* Center focus point */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${focusedImage === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Image info on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary-foreground text-sm font-medium">{image.alt}</p>
                  <p className="text-primary-foreground/60 text-xs mt-1">Clique para ampliar</p>
                </div>
              </div>
            ))}          </div>
        </div>

      </div>

      {/* Lightbox (Mantido igual) */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-sm shadow-2xl"
            />
            <div className="text-center mt-4 text-white/50 text-sm font-mono tracking-widest">
              IMG_{selectedImage + 100}1.RAW
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;