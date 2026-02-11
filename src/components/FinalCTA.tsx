import ContactForm from "@/components/ContactForm";

const FinalCTA = () => (
  <section id="contacto" className="py-16 md:py-24 bg-primary text-primary-foreground">
    <div className="container max-w-2xl space-y-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">
        Antes de assinar, esclareça.
      </h2>
      <p className="text-primary-foreground/80 text-lg">
        Um pequeno detalhe hoje pode evitar um grande problema amanhã.
      </p>
      <ContactForm />
    </div>
  </section>
);

export default FinalCTA;
