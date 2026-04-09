import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutDialog } from "@/components/CheckoutDialog";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      <CheckoutDialog />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              À propos de <span className="neon-text-cyan">TechSphere DZ</span>
            </h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Votre partenaire de confiance pour les composants PC en Algérie depuis 2020.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="glass rounded-xl p-8 text-center hover-float">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Notre Mission</h3>
              <p className="text-sm text-muted-foreground font-body">
                Rendre les composants PC de dernière génération accessibles à tous les Algériens à des prix compétitifs.
              </p>
            </div>
            <div className="glass rounded-xl p-8 text-center hover-float">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Notre Équipe</h3>
              <p className="text-sm text-muted-foreground font-body">
                Une équipe de passionnés de technologie dédiée à vous offrir le meilleur service.
              </p>
            </div>
            <div className="glass rounded-xl p-8 text-center hover-float">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Nos Valeurs</h3>
              <p className="text-sm text-muted-foreground font-body">
                Qualité, authenticité et satisfaction client sont au cœur de tout ce que nous faisons.
              </p>
            </div>
          </div>

          <div className="glass rounded-xl p-8 max-w-3xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Notre Histoire</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Fondée en 2020 à Alger, TechSphere DZ est née de la passion de gamers et professionnels IT algériens.
              Nous avons commencé comme un petit magasin local et nous sommes devenus l'une des références en matière
              de composants informatiques en Algérie. Nous travaillons directement avec les plus grandes marques pour
              vous garantir des produits authentiques aux meilleurs prix.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
