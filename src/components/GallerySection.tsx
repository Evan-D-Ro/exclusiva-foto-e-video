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
    <section ref={sectionRef} id="portfolio" className="section-padding bg-foreground relative overflow-hidden">
      {/* Camera Viewfinder Background - AJUSTADO PARA MOBILE E TABLET */}
      <div className="absolute inset-0 pointer-events-none select-none">

        {/* Corner Brackets - Agora mudam apenas no LG (Desktop Real) */}
        <div className="absolute top-4 left-4 lg:top-8 lg:left-8 w-12 h-12 lg:w-16 lg:h-16 border-l-2 border-t-2 border-primary/30" />
        <div className="absolute top-4 right-4 lg:top-8 lg:right-8 w-12 h-12 lg:w-16 lg:h-16 border-r-2 border-t-2 border-primary/30" />
        <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 w-12 h-12 lg:w-16 lg:h-16 border-l-2 border-b-2 border-primary/30" />
        <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 w-12 h-12 lg:w-16 lg:h-16 border-r-2 border-b-2 border-primary/30" />

        {/* Center Focus Point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-20">
          <div className="absolute inset-0 border border-primary-foreground/30 rounded-full animate-pulse" />
          <div className="absolute inset-4 border border-primary-foreground/20 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-px h-full bg-primary-foreground/20" />
            <div className="absolute w-full h-px bg-primary-foreground/20" />
          </div>
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-10">
          {[...Array(4)].map((_, i) => (
            <div key={`v-${i}`} className="border-r border-primary-foreground/30" style={{ gridColumn: i + 1 }} />
          ))}
        </div>

        {/* Camera Info Overlay - Oculto em tablets verticais (hidden lg:block) */}
        <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 text-primary-foreground/40 font-mono text-xs space-y-1 hidden lg:block">
          <div className="flex items-center gap-2">
            <Aperture className="w-3 h-3" />
            <span>f/2.8</span>
          </div>
          <div className="flex items-center gap-2">
            <Focus className="w-3 h-3" />
            <span>1/250s</span>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 text-primary-foreground/40 font-mono text-xs hidden lg:block">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span>REC</span>
          </div>
        </div>
      </div>

      {/* Container: Mantém padding mobile até chegar em telas LG */}
      <div className="container-custom relative z-10 px-6 py-4 lg:px-0 lg:py-0">

        {/* Header - Margens menores até LG */}
        <div className={`text-center max-w-3xl mx-auto mb-10 lg:mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold tracking-widest uppercase text-sm mb-6">
            <Camera className="w-4 h-4" />
            Eternize seus momentos
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Registre cada <span className="text-primary">instante!</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Ajudamos você a criar lembranças inesquecíveis.
          </p>
        </div>

        {/* Gallery Grid with Camera Frame Effect */}
        <div className="relative m-4">
          {/* Main Camera Frame - Inset ajustado para só expandir no LG */}
          <div className="absolute -inset-2 lg:-inset-8 border-2 border-primary-foreground/10 rounded-lg pointer-events-none">
            {/* Frame corners */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-l-4 border-t-4 border-primary rounded-tl" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-r-4 border-t-4 border-primary rounded-tr" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-4 border-b-4 border-primary rounded-bl" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-4 border-b-4 border-primary rounded-br" />
          </div>

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
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox (Sem alterações) */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-md flex items-center justify-center p-4 animate-shutter-open"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/50" />
            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-primary/50" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-primary/50" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/50" />
          </div>

          <button
            className="absolute top-6 right-6 text-primary-foreground p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full max-h-[85vh] object-contain rounded-lg animate-scale-in"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground to-transparent">
              <p className="text-primary-foreground text-lg font-medium">{galleryImages[selectedImage].alt}</p>
              <p className="text-primary-foreground/60 text-sm mt-1">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;