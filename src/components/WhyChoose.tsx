import { CheckCircle2 } from "lucide-react";
import bgWhyChoose from "@/assets/bg-why-choose.jpg";

const bullets = [
  "Evita erros e atrasos",
  "Documentação correta à primeira",
  "Linguagem clara e acessível",
  "Confidencialidade e responsabilidade",
];

const WhyChoose = () => (
  <section id="porquê" className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
    <img
      src={bgWhyChoose}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none"
    />
    <div className="container grid md:grid-cols-2 gap-12 items-start relative z-10">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Porquê trabalhar comigo?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Acredito que a prevenção é a melhor forma de proteção. O meu trabalho é garantir
          que cada documento, contrato ou registo está correto desde o início, poupando-lhe
          tempo, dinheiro e preocupações futuras. Clareza na comunicação, rigor no processo.
        </p>
      </div>

      <ul className="space-y-4">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
            <span className="text-foreground font-medium">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyChoose;
