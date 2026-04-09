import { Cpu, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 glass py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
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

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              Catégories
            </h4>
            <div className="space-y-1 text-sm text-muted-foreground font-body">
              <p>Cartes Graphiques (GPU)</p>
              <p>Processeurs (CPU)</p>
              <p>Mémoire (RAM)</p>
              <p>Stockage (SSD/HDD)</p>
              <p>Alimentations (PSU)</p>
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
