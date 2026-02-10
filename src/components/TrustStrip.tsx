import { ShieldCheck, Users, CheckCircle } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Rigor e transparência" },
  { icon: Users, label: "Acompanhamento próximo" },
  { icon: CheckCircle, label: "Processos sem complicações" },
];

const TrustStrip = () => (
  <section className="border-y border-border/40 bg-primary/5 py-8">
    <div className="container flex flex-wrap justify-center gap-8 md:gap-16">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <item.icon className="h-6 w-6 text-primary" />
          <span className="text-sm font-medium text-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustStrip;
