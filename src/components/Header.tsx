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

  const showSolidHeader = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolidHeader
          ? "bg-background shadow-md py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img
            src={logo}
            alt="Exclusiva Foto e Vídeo"
            className={`h-12 md:h-16 w-auto transition-all duration-300 ${showSolidHeader ? "" : "brightness-0 invert"
              }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${showSolidHeader ? "text-foreground" : "text-white"
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <Button
            variant={showSolidHeader ? "default" : "outline"}
            size="lg"
            asChild
            className={
              !showSolidHeader
                ? "border-white text-white hover:bg-white hover:text-black"
                : ""
            }
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
          className={`lg:hidden p-2 transition-colors ${showSolidHeader ? "text-foreground" : "text-white"
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-95 invisible"
          }`}
      >
        {/* AQUI ESTAVA A MUDANÇA: Removi h-screen */}
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4 bg-background">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground text-lg font-medium hover:text-primary transition-colors border-b border-border/50 pb-3"
            >
              {link.name}
            </a>
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