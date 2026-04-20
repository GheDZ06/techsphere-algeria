import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BuildConfigurator } from "@/components/BuildConfigurator";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutDialog } from "@/components/CheckoutDialog";
import { Cpu, ShieldCheck, Truck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: ShieldCheck, title: "2-Year Warranty", desc: "All our products come with a minimum 2-year warranty." },
  { icon: Truck, title: "Fast Delivery", desc: "Delivery anywhere in Algeria within 48h." },
  { icon: Headphones, title: "24/7 Support", desc: "Our team is always available to help you." },
  { icon: Cpu, title: "Authentic Components", desc: "100% certified original products." },
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
              Why <span className="neon-text-cyan">TechSphere DZ</span>?
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
              Ready to build your <span className="neon-text-cyan">PC</span>?
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
              Browse our full catalog and find the perfect components for your build.
            </p>
            <Link
              to="/products"
              className="inline-block btn-neon px-8 py-3 rounded-lg font-heading text-sm tracking-widest uppercase"
            >
              View all products
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
