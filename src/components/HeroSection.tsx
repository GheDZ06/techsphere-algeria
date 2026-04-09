import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 circuit-pattern" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4 neon-text-cyan"
          style={{ animationDelay: "0.1s", animation: "fade-in-up 0.8s ease-out forwards" }}
        >
          Assemblez l'Impossible
        </h1>
        <p
          className="font-body text-lg md:text-xl text-muted-foreground mb-8 opacity-0"
          style={{ animationDelay: "0.3s", animation: "fade-in-up 0.8s ease-out 0.3s forwards" }}
        >
          Next-Gen Parts. Algerian Prices.
        </p>
        <a
          href="#products"
          className="inline-block btn-neon px-8 py-3 rounded-lg text-primary-foreground font-heading text-sm tracking-widest uppercase opacity-0"
          style={{ animation: "fade-in-up 0.8s ease-out 0.5s forwards" }}
        >
          Explorer les Produits
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="h-6 w-6 text-primary opacity-60" />
      </div>
    </section>
  );
}
