import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-exclusiva.png";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Contato", href: "#contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-foreground/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img
            src={logo}
            alt="Exclusiva Foto e Vídeo"
            className={`h-12 md:h-14 w-auto transition-all duration-300 ${
              isScrolled ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`link-underline text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button 
            variant={isScrolled ? "hero" : "outline"} 
            size="lg" 
            asChild
            className={!isScrolled ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground" : ""}
          >
            <a
              href="https://wa.me/5544998611548"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-card transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container-custom py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-primary font-medium py-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="hero" size="lg" className="mt-4" asChild>
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
