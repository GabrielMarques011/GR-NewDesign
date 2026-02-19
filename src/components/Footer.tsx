import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary py-12 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              <span className="text-secondary">GR</span> Design
            </h3>

            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                Rua Mirante da Barra, 82 – Parque Mirante da Mata, Cotia – SP
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-secondary" />
                (11) 91933-5496
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-secondary" />
                contato@grdesign.com.br
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.556937111063!2d-46.950019999999995!3d-23.6202178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfa8284232177d%3A0xb279ec58369706de!2sR.%20Mirante%20da%20Barra%2C%2082%20-%20Parque%20Mirante%20da%20Mata%2C%20Cotia%20-%20SP%2C%2006720-169!5e0!3m2!1spt-BR!2sbr!4v1771511425947!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização GR Design"
            />
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} GR Design — Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
