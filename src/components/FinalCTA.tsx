import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section id="contacto" className="py-16 md:py-24 bg-primary text-primary-foreground">
    <div className="container text-center max-w-2xl space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold">
        Antes de assinar, esclareça.
      </h2>
      <p className="text-primary-foreground/80 text-lg">
        Um pequeno detalhe hoje pode evitar um grande problema amanhã.
      </p>
      <Button
        size="lg"
        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
        onClick={() => window.open("https://wa.me/351963149900", "_blank")}
      >
        Agendar contacto
      </Button>
    </div>
  </section>
);

export default FinalCTA;
