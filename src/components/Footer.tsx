import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-exclusiva.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Exclusiva Foto e Vídeo"
              className="h-14 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Especializada em registrar a emoção das formaturas e transformar
              esses momentos em álbuns feitos com carinho, qualidade e atenção
              aos detalhes.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Início", href: "#inicio" },
                { name: "Sobre Nós", href: "#sobre" },
                { name: "Serviços", href: "#servicos" },
                { name: "Diferenciais", href: "#diferenciais" },
                { name: "Portfólio", href: "#portfolio" },
                { name: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <span className="block text-sm text-primary-foreground/50">WhatsApp</span>
                (44) 99861-1548
              </li>
              <li>
                <span className="block text-sm text-primary-foreground/50">E-mail</span>
                exclusivafotoevideo@hotmail.com
              </li>
              <li>
                <span className="block text-sm text-primary-foreground/50">Endereço</span>
                Rua Paulo Antonio de Oliveira, 155<br />
                Centro – Santa Fé – PR<br />
                CEP 86770-000
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 text-center md:text-left md:flex md:justify-between md:items-center">
          <div className="text-sm text-primary-foreground/50">
            <p>
              <strong>Exclusiva Foto e Video Eireli</strong>
            </p>
            <p>CNPJ: 20.740.461.0001/08</p>
          </div>
          <p className="text-sm text-primary-foreground/50 mt-4 md:mt-0">
            © {currentYear} Exclusiva Foto e Vídeo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
