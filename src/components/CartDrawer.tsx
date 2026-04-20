import { useCart } from "@/store/cart";
import { formatDZD } from "@/data/products";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCheckout } from "@/components/CheckoutDialog";

export function CartDrawer() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, subtotal, tax, total } = useCart();
  const openCheckout = useCheckout((s) => s.setOpen);

  if (!isOpen) return null;

  const handleOrder = () => {
    setCartOpen(false);
    openCheckout(true);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/10 backdrop-blur-sm" onClick={() => setCartOpen(false)} />

      <div
        className="absolute right-0 top-0 bottom-0 w-full max-w-md glass-strong flex flex-col"
        style={{ animation: "slide-in-right 0.3s ease-out" }}
      >
        <div className="flex items-center justify-between p-5 border-b border-border/50">
          <h2 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Cart
          </h2>
          <button onClick={() => setCartOpen(false)} className="p-1 hover:bg-muted rounded">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-12">Your cart is empty</p>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-3 glass rounded-lg p-3">
                <img src={product.image} alt={product.name} className="w-16 h-16 rounded-md object-cover" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-sm font-semibold text-foreground truncate">{product.name}</h4>
                  <p className="text-xs text-muted-foreground">{product.brand}</p>
                  <p className="text-sm font-bold text-primary mt-1">{formatDZD(product.price)}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={() => removeItem(product.id)}>
                    <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                  </button>
                  <div className="flex items-center gap-1">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1 rounded bg-muted hover:bg-border">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1 rounded bg-muted hover:bg-border">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-border/50 space-y-3">
            <div className="flex justify-between text-sm font-body text-muted-foreground">
              <span>Subtotal</span><span>{formatDZD(subtotal())}</span>
            </div>
            <div className="flex justify-between text-sm font-body text-muted-foreground">
              <span>VAT (19%)</span><span>{formatDZD(tax())}</span>
            </div>
            <div className="flex justify-between text-lg font-heading font-bold text-foreground pt-2 border-t border-border/50">
              <span>Total</span><span className="neon-text-cyan">{formatDZD(total())}</span>
            </div>
            <button onClick={handleOrder} className="w-full btn-neon py-3 rounded-lg font-heading text-sm tracking-wider uppercase mt-2">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
