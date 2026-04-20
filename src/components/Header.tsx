import { ShoppingCart, Cpu, Menu, X } from "lucide-react";
import { useCart } from "@/store/cart";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { items, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileNav(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 glass-strong" : "py-4 bg-card/50 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <Cpu className="h-7 w-7 text-primary transition-all duration-300 group-hover:scale-110" />
          <span className="font-heading text-xl font-bold tracking-tight text-foreground">
            TechSphere<span className="text-primary"> DZ</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-lg transition-all hover:bg-muted"
          >
            <ShoppingCart className="h-6 w-6 text-foreground" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full btn-neon text-xs flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </button>
          <button onClick={() => setMobileNav(!mobileNav)} className="md:hidden p-2 rounded-lg hover:bg-muted">
            {mobileNav ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileNav && (
        <div className="md:hidden glass-strong border-t border-border/50 px-4 py-4 space-y-2">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`block py-2 px-3 rounded-lg text-sm font-body transition-colors ${
                location.pathname === l.to ? "text-primary bg-muted font-medium" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
