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
              About <span className="neon-text-cyan">TechSphere DZ</span>
            </h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Your trusted partner for PC components in Algeria since 2020.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="glass rounded-xl p-8 text-center hover-float">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-sm text-muted-foreground font-body">
                Make next-gen PC components accessible to every Algerian at competitive prices.
              </p>
            </div>
            <div className="glass rounded-xl p-8 text-center hover-float">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Our Team</h3>
              <p className="text-sm text-muted-foreground font-body">
                A team of tech enthusiasts dedicated to giving you the best service.
              </p>
            </div>
            <div className="glass rounded-xl p-8 text-center hover-float">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Our Values</h3>
              <p className="text-sm text-muted-foreground font-body">
                Quality, authenticity, and customer satisfaction are at the heart of everything we do.
              </p>
            </div>
          </div>

          <div className="glass rounded-xl p-8 max-w-3xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Story</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Founded in 2020 in Algiers, TechSphere DZ was born from the passion of Algerian gamers and IT
              professionals. We started as a small local shop and have grown into one of the leading references
              for PC components in Algeria. We work directly with the biggest brands to guarantee you authentic
              products at the best prices.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
