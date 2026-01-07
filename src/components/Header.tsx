import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-exclusiva.webp"; // Verifique se este arquivo existe mesmo!

const navLinks = [
  { name: "Início", id: "inicio" },
  { name: "Sobre", id: "sobre" },
  { name: "Diferenciais", id: "diferenciais" },
  { name: "Serviços", id: "servicos" },
  { name: "Contato", id: "contato" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // 1. Detecta scroll para alterar o fundo (Transparente -> Sólido)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. IntersectionObserver: Descobre qual seção está na tela
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.4 } // 40% da seção visível ativa o link
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 3. Função de Scroll Suave (Substitui o href padrão)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 30; // Altura aproximada do header para compensar

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
      setActiveSection(id);
    } else {
      console.warn(`Seção com id "${id}" não encontrada.`);
    }
  };

  // Define se o header deve ter aparência sólida (scroll ou menu aberto)
  const showSolidHeader = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showSolidHeader
        ? "bg-background shadow-md py-3" // Fundo sólido (ex: branco)
        : "bg-black/10 backdrop-blur-sm py-5" // Fundo transparente
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => scrollToSection("inicio")}
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="Exclusiva Foto e Vídeo"
            className={`h-12 md:h-16 w-auto transition-all duration-300 ${showSolidHeader ? "" : "brightness-0 invert"
              // Se transparente: inverte cor (fica branco). Se sólido: cor normal.
              }`}
          />
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-all relative group ${showSolidHeader ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                } ${activeSection === link.id ? "font-bold" : ""}`}
            >
              {link.name}
              {/* Linha animada abaixo do link ativo */}
              <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${activeSection === link.id
                ? "w-full bg-primary"
                : "w-0 bg-primary group-hover:w-full"
                }`}></span>
            </button>
          ))}
        </nav>

        {/* CTA BUTTON (Desktop) */}
        <div className="hidden lg:block">
          <Button
            variant={showSolidHeader ? "default" : "outline"}
            size="lg"
            asChild
            className={`transition-all duration-300 ${!showSolidHeader
              ? "border-white text-white hover:bg-white hover:text-black"
              : ""
              }`}
          >
            <a
              href="https://wa.me/5544998611548"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`lg:hidden p-2 transition-colors ${showSolidHeader ? "text-foreground" : "text-white"
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen
          ? "opacity-100 scale-y-100 visible"
          : "opacity-0 scale-y-95 invisible"
          }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4 bg-background">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-left text-lg font-medium transition-colors border-b border-border/50 pb-3 ${activeSection === link.id ? "text-primary" : "text-foreground"
                }`}
            >
              {link.name}
            </button>
          ))}
          <Button size="lg" className="mt-2 w-full" asChild>
            <a
              href="https://wa.me/5544998611548"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;