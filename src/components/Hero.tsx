import { Button } from "@/components/ui/button";
import anaPatricia from "@/assets/ana-patricia.png";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="h-[calc(100vh-150px)] relative overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none md:flex hidden mx-14">
        <div className="relative w-full h-full">
          <img
            src={anaPatricia}
            alt="Ana Patrícia de Oliveira — Solicitadora"
            className="w-full h-full object-cover object-top"
          />
          {/* Fade effect on the left */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/30" />
        </div>
      </div>
      <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
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

        {/* Empty space for layout */}
        <div />
      </div>
    </section>
  );
};

export default Hero;
