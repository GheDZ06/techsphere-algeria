import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BuildConfigurator } from "@/components/BuildConfigurator";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutDialog } from "@/components/CheckoutDialog";
import { Cpu, ShieldCheck, Truck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: ShieldCheck, title: "Garantie 2 ans", desc: "Tous nos produits sont garantis 2 ans minimum." },
  { icon: Truck, title: "Livraison Rapide", desc: "Livraison partout en Algérie sous 48h." },
  { icon: Headphones, title: "Support 24/7", desc: "Notre équipe est disponible pour vous aider." },
  { icon: Cpu, title: "Composants Authentiques", desc: "100% de produits originaux certifiés." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      <CheckoutDialog />
      <main>
        <HeroSection />

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Pourquoi <span className="neon-text-cyan">TechSphere DZ</span> ?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="glass rounded-xl p-6 text-center hover-float">
                  <f.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BuildConfigurator />

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prêt à construire votre <span className="neon-text-cyan">PC</span> ?
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
              Parcourez notre catalogue complet et trouvez les composants parfaits pour votre build.
            </p>
            <Link
              to="/products"
              className="inline-block btn-neon px-8 py-3 rounded-lg font-heading text-sm tracking-widest uppercase"
            >
              Voir tous les produits
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
