import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutDialog } from "@/components/CheckoutDialog";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Message envoyé avec succès !");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      <CheckoutDialog />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              Contactez-<span className="neon-text-cyan">nous</span>
            </h1>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              Une question ? N'hésitez pas à nous contacter.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass rounded-xl p-6 space-y-5">
                <h3 className="font-heading text-xl font-semibold text-foreground">Nos coordonnées</h3>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Téléphone</p>
                    <p className="text-muted-foreground text-sm">+213 555 12 34 56</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">contact@techsphere.dz</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Adresse</p>
                    <p className="text-muted-foreground text-sm">Alger Centre, Algérie</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Horaires</p>
                    <p className="text-muted-foreground text-sm">Sam–Jeu: 9h–18h | Ven: Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-heading text-xl font-semibold text-foreground">Envoyez un message</h3>
              <div>
                <label className="text-sm font-medium text-foreground">Nom *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Votre nom"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="votre@email.com"
                  maxLength={255}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Sujet</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Sujet du message"
                  maxLength={200}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Message *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Votre message..."
                  maxLength={1000}
                />
              </div>
              <button type="submit" className="w-full btn-neon py-3 rounded-lg font-heading text-sm tracking-wider uppercase">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
