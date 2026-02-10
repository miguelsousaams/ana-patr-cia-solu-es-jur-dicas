import { Button } from "@/components/ui/button";
import anaPatricia from "@/assets/ana-patricia.jpg";

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

        {/* Professional photo with decorative frame */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 rounded-[2rem] bg-secondary/20 -rotate-3" />
            <div className="absolute -inset-4 rounded-[2rem] border-2 border-secondary/30 rotate-2" />
            {/* Photo */}
            <div className="relative w-72 h-80 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={anaPatricia}
                alt="Ana Patrícia de Oliveira — Solicitadora"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Accent dot */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-secondary/30 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
