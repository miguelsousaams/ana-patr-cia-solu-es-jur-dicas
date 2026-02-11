import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || name.length > 100) {
      toast.error("Por favor, insira um nome válido (máx. 100 caracteres).");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      toast.error("Por favor, insira um email válido.");
      return;
    }
    if (!message || message.length > 1000) {
      toast.error("Por favor, insira uma mensagem (máx. 1000 caracteres).");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xykdkdyk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: form.phone.trim() || "Não fornecido",
          message: message,
        }),
      });

      if (response.ok) {
        toast.success("Email enviado com sucesso! Em breve entraremos em contacto.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Erro ao enviar email. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Form error:", error);
      toast.error("Erro ao enviar email. Por favor, tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-primary-foreground/90 text-sm">Nome *</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="O seu nome"
            maxLength={100}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-primary-foreground/90 text-sm">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@exemplo.pt"
            maxLength={255}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-primary-foreground/90 text-sm">Telefone</Label>
        <Input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+351 000 000 000"
          maxLength={20}
          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-primary-foreground/90 text-sm">Mensagem *</Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Descreva brevemente o seu caso..."
          maxLength={1000}
          rows={4}
          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={sending}
        size="lg"
        className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
      >
        <Send className="h-4 w-4 mr-2" />
        Enviar mensagem
      </Button>
    </form>
  );
};

export default ContactForm;
