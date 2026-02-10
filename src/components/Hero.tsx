import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary">
            Segurança jurídica para as decisões importantes da sua vida e do seu negócio.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Acompanhamento jurídico claro, rigoroso e sem complicações — para particulares e empresas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollTo("#contacto")}>
              Falar com a solicitadora
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#servicos")}>
              Ver serviços
            </Button>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="flex justify-center">
          <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl bg-secondary/20 border-2 border-secondary/30 flex items-center justify-center">
            <User className="h-24 w-24 text-secondary/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
