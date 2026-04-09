import { Cpu, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">
                TechSphere<span className="text-primary"> DZ</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-body">
              Composants PC de dernière génération aux meilleurs prix en Algérie.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <Link to="/" className="block hover:text-primary transition-colors">Accueil</Link>
              <Link to="/products" className="block hover:text-primary transition-colors">Produits</Link>
              <Link to="/about" className="block hover:text-primary transition-colors">À propos</Link>
              <Link to="/contact" className="block hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              Catégories
            </h4>
            <div className="space-y-1 text-sm text-muted-foreground font-body">
              <p>Cartes Graphiques (GPU)</p>
              <p>Processeurs (CPU)</p>
              <p>Mémoire (RAM)</p>
              <p>Stockage (SSD/HDD)</p>
              <p>Boîtiers (Case)</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+213 555 12 34 56</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Alger Centre</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground font-body">
          © 2026 TechSphere DZ. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
