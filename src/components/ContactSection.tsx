import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import galleryImage from "@/assets/4.jpg";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
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

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={galleryImage}
          alt=""
          className="w-full h-full object-cover object-[20%] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-accent/60" />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">
              Contato
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Vamos eternizar sua{" "}
              <span className="text-primary">formatura?</span>
            </h2>
            <p className="text-secondary-foreground text-lg mb-10 max-w-2xl mx-auto">
              Entre em contato conosco e solicite um orçamento. Estamos prontos para
              transformar seu grande dia em lembranças eternas.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button variant="whatsapp" size="xl" asChild className="group">
              <a
                href="https://wa.me/5544998611548"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="!w-6 !h-6" />

                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact Info Cards */}
          <div className={`grid md:grid-cols-2 gap-6 mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Mail className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                E-mail
              </h3>
              <a
                href="mailto:exclusivafotoevideo@hotmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                exclusivafotoevideo@hotmail.com
              </a>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Endereço
              </h3>
              <p className="text-muted-foreground">
                Rua Paulo Antonio Vieira, 155<br />
                Centro – Santa Fé – PR<br />
                CEP 86770-000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
