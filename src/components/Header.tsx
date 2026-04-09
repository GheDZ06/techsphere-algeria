import { ShoppingCart, Cpu } from "lucide-react";
import { useCart } from "@/store/cart";
import { useEffect, useState } from "react";

export function Header() {
  const { items, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 glass-strong" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 group">
          <Cpu className="h-7 w-7 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(187,100%,50%)]" />
          <span className="font-heading text-xl font-bold tracking-tight text-foreground">
            TechSphere<span className="text-primary"> DZ</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
          <a href="#products" className="hover:text-primary transition-colors">Produits</a>
          <a href="#configurator" className="hover:text-primary transition-colors">Configurateur</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <button
          onClick={toggleCart}
          className="relative p-2 rounded-lg transition-all hover:bg-muted"
        >
          <ShoppingCart className="h-6 w-6 text-foreground" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full btn-neon text-xs flex items-center justify-center text-primary-foreground font-bold">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
