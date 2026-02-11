import { Button } from "@/components/ui/button";
import anaPatricia from "@/assets/ana-patricia.webp";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-[calc(100vh-150px)] relative overflow-hidden flex flex-col justify-center">
      {/* Desktop background photo */}
      <div className="absolute inset-y-0 right-0 w-2/5 pointer-events-none hidden md:flex mx-14">
        <div className="relative w-full h-full">
          <img
            src={anaPatricia}
            alt="Ana Patrícia de Oliveira — Solicitadora"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/30" />
        </div>
      </div>

      <div className="container relative z-10">
        {/* Mobile photo */}
        <div className="flex justify-center mb-8 md:hidden">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-secondary/15" />
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-secondary/20 relative">
              <img
                src={anaPatricia}
                alt="Ana Patrícia de Oliveira — Solicitadora"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary">
              Segurança jurídica para as decisões importantes da sua vida e do seu negócio.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
              Acompanhamento jurídico claro, rigoroso e sem complicações — para particulares e empresas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" onClick={() => scrollTo("#contacto")}>
                Falar com a solicitadora
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("#servicos")}>
                Ver serviços
              </Button>
            </div>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
};

export default Hero;
