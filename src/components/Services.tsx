import { FileText, Home, Briefcase, Car } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Contratos e Atos Jurídicos",
    items: "Compra e venda, arrendamento, procurações, autenticações",
    benefit: "Evite erros e ganhe tranquilidade.",
  },
  {
    icon: Home,
    title: "Imobiliário e Registo Predial",
    items: "Legalização, registos, retificações, apoio em heranças",
    benefit: "Proteja o seu património com segurança.",
  },
  {
    icon: Briefcase,
    title: "Empresas e Empreendedores",
    items: "Constituição, alterações societárias, RCBE, marcas, certidões",
    benefit: "Foque-se no negócio. Nós tratamos do resto.",
  },
  {
    icon: Car,
    title: "Registos Automóvel e Comercial",
    items: "Registos, alterações, regularizações",
    benefit: "Tudo tratado de forma rápida e correta.",
  },
];

const Services = () => (
  <section id="servicos" className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
        Serviços de Solicitadoria
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Soluções jurídicas para particulares e empresas em Portugal.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="border-secondary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center mb-3">
                <s.icon className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="text-lg text-primary">{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription className="text-sm">{s.items}</CardDescription>
              <p className="text-sm font-medium text-secondary">{s.benefit}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
