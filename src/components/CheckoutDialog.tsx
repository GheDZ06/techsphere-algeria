import { useCart } from "@/store/cart";
import { formatDZD } from "@/data/products";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { create } from "zustand";

export const useCheckout = create<{ isOpen: boolean; toggle: () => void; setOpen: (v: boolean) => void }>((set) => ({
  isOpen: false,
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  setOpen: (v) => set({ isOpen: v }),
}));

export function CheckoutDialog() {
  const { isOpen, setOpen } = useCheckout();
  const { items, total, subtotal, tax } = useCart();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    wilaya: "",
    address: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim() || !form.wilaya.trim() || !form.address.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^(0)(5|6|7)\d{8}$/.test(form.phone.replace(/\s/g, ""))) {
      toast.error("Invalid phone number (e.g. 05XX XX XX XX).");
      return;
    }
    toast.success("Order placed successfully! We'll contact you soon.");
    setOpen(false);
    setForm({ fullName: "", phone: "", wilaya: "", address: "", notes: "" });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-lg mx-4 glass-strong rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-xl font-bold text-foreground">Place your order</h2>
          <button onClick={() => setOpen(false)} className="p-1 hover:bg-muted rounded">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Order Summary */}
        <div className="glass rounded-xl p-4 mb-6 space-y-2">
          <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider">Summary</h4>
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex justify-between text-sm font-body">
              <span className="text-muted-foreground">{product.name} x{quantity}</span>
              <span className="text-foreground">{formatDZD(product.price * quantity)}</span>
            </div>
          ))}
          <div className="border-t border-border/50 pt-2 mt-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subtotal</span><span>{formatDZD(subtotal())}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>VAT (19%)</span><span>{formatDZD(tax())}</span>
            </div>
            <div className="flex justify-between text-lg font-heading font-bold text-foreground mt-1">
              <span>Total</span><span className="neon-text-cyan">{formatDZD(total())}</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Full name *</label>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your full name"
              maxLength={100}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Phone *</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="05XX XX XX XX"
              maxLength={14}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Wilaya *</label>
            <input
              type="text"
              value={form.wilaya}
              onChange={(e) => setForm({ ...form, wilaya: e.target.value })}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="E.g. Algiers, Oran, Constantine..."
              maxLength={50}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Delivery address *</label>
            <textarea
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              rows={2}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Full address"
              maxLength={300}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Notes (optional)</label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={2}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Special instructions..."
              maxLength={500}
            />
          </div>
          <button type="submit" className="w-full btn-neon py-3 rounded-lg font-heading text-sm tracking-wider uppercase">
            Confirm order
          </button>
        </form>
      </div>
    </div>
  );
}
