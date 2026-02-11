import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Como posso ajudar", href: "#porquê" },
    { label: "Contacto", href: "#contacto" },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Scale className="h-6 w-6" />
          <span className="hidden sm:inline">Ana Patrícia de Oliveira | Solicitadora</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          onClick={() => scrollTo("#contacto")}
          className="hidden md:inline-flex"
        >
          Marcar consulta
        </Button>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <div className="flex flex-col gap-6 mt-8">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  {l.label}
                </button>
              ))}
              <Button onClick={() => scrollTo("#contacto")} className="mt-4">
                Marcar consulta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
