import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona a consulta?",
    a: "Pode contactar-me por telefone, email ou formulário. Após uma análise inicial do seu caso, agendamos uma reunião presencial ou à distância para esclarecer todas as questões.",
  },
  {
    q: "O que devo levar/ter comigo?",
    a: "Depende do serviço. Normalmente, o Cartão de Cidadão, documentos relevantes ao caso (contratos, escrituras, certidões) e informação sobre a situação em causa.",
  },
  {
    q: "Quanto tempo pode demorar?",
    a: "Varia conforme a complexidade do processo. Atos simples podem ser tratados em poucos dias; processos mais complexos podem levar algumas semanas.",
  },
  {
    q: "Trata de processos à distância?",
    a: "Sim. Muitos serviços podem ser tratados de forma remota, com comunicação por email, telefone ou videochamada.",
  },
];

const FAQ = () => (
  <section className="py-16 md:py-24 bg-primary/5">
    <div className="container max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
        Perguntas Frequentes
      </h2>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4 bg-background">
            <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
