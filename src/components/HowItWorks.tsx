import { MessageCircle, Search, ClipboardCheck } from "lucide-react";
import bgHowItWorks from "@/assets/bg-how-it-works.jpg";

const steps = [
  { icon: MessageCircle, title: "Contacta-me", desc: "Envie a sua questão por telefone, email ou formulário." },
  { icon: Search, title: "Análise do caso e documentação", desc: "Analiso a situação e recolho a documentação necessária." },
  { icon: ClipboardCheck, title: "Tratamento e acompanhamento", desc: "Trato de todo o processo até à conclusão." },
];

const HowItWorks = () => (
  <section className="py-16 md:py-24 relative overflow-hidden">
    <img
      src={bgHowItWorks}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover opacity-[0.08] pointer-events-none"
    />
    <div className="container relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
        Como funciona?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-secondary/30" />

        {steps.map((s, i) => (
          <div key={s.title} className="flex flex-col items-center text-center relative">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4 relative z-10">
              <s.icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="text-xs font-bold text-secondary mb-2">Passo {i + 1}</span>
            <h3 className="font-semibold text-primary mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground max-w-xs">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
