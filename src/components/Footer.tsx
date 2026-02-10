import { Scale, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border/40">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Scale className="h-5 w-5" />
            <span>Ana Patrícia de Oliveira</span>
          </div>
          <p className="text-sm text-muted-foreground">Solicitadora</p>
        </div>

        {/* Contact placeholders */}
        <div className="space-y-3">
          <h4 className="font-semibold text-primary text-sm">Contacto</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>[telefone]</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>[email]</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>[localização]</span>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <h4 className="font-semibold text-primary text-sm">Aviso Legal</h4>
          <p className="text-xs text-muted-foreground">
            Informação geral — não dispensa consulta profissional.
          </p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ana Patrícia de Oliveira — Solicitadora
      </div>
    </div>
  </footer>
);

export default Footer;
