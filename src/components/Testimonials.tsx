import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria S.",
    role: "Particular",
    text: "A Ana Patrícia tratou de todo o processo de compra da minha casa com uma eficiência incrível. Explicou tudo de forma clara e esteve sempre disponível.",
    stars: 5,
  },
  {
    name: "João R.",
    role: "Empresário",
    text: "Constituí a minha empresa com o apoio dela. Processo rápido, sem complicações, e com toda a documentação tratada corretamente à primeira.",
    stars: 5,
  },
  {
    name: "Carlos M.",
    role: "Particular",
    text: "Recomendo sem hesitar. Profissionalismo, simpatia e rigor. Resolveu o meu caso de herança que já se arrastava há meses.",
    stars: 5,
  },
];

const Testimonials = () => (
  <section className="py-16 md:py-24 bg-primary/5">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
        O que dizem os clientes
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        A confiança dos nossos clientes é o nosso melhor testemunho.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.name} className="border-secondary/20 shadow-sm hover:shadow-md transition-shadow relative">
            <CardContent className="pt-8 pb-6 px-6 space-y-4">
              <Quote className="h-8 w-8 text-secondary/30 absolute top-4 right-4" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="pt-2 border-t border-border/40">
                <p className="font-semibold text-primary text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
