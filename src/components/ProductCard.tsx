import type { Product } from "@/data/products";
import { formatDZD } from "@/data/products";
import { useCart } from "@/store/cart";
import { ShoppingCart } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCart((s) => s.addItem);

  return (
    <div className="group glass rounded-xl overflow-hidden hover-float">
      <div className="relative aspect-square overflow-hidden bg-background/50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 space-y-2">
        <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">
          {product.brand} • {product.category}
        </span>
        <h3 className="font-heading text-lg font-semibold text-foreground leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground font-body">{product.description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="font-heading text-xl font-bold text-primary neon-text-cyan">
            {formatDZD(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="btn-neon px-4 py-2 rounded-lg text-primary-foreground text-sm font-semibold flex items-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
