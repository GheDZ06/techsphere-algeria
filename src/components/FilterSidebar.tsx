import { categories, brands } from "@/data/products";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

type FilterProps = {
  selectedCategories: string[];
  selectedBrands: string[];
  priceRange: [number, number];
  onCategoryChange: (cats: string[]) => void;
  onBrandChange: (brands: string[]) => void;
  onPriceChange: (range: [number, number]) => void;
};

export function FilterSidebar(props: FilterProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleFilter = (arr: string[], val: string) =>
    arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];

  const content = (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
          Catégorie
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={props.selectedCategories.includes(cat)}
                onChange={() => props.onCategoryChange(toggleFilter(props.selectedCategories, cat))}
                className="rounded border-border bg-muted accent-primary h-4 w-4"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
          Marque
        </h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={props.selectedBrands.includes(brand)}
                onChange={() => props.onBrandChange(toggleFilter(props.selectedBrands, brand))}
                className="rounded border-border bg-muted accent-primary h-4 w-4"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
          Prix (DZD)
        </h4>
        <input
          type="range"
          min={5000}
          max={500000}
          step={5000}
          value={props.priceRange[1]}
          onChange={(e) => props.onPriceChange([props.priceRange[0], Number(e.target.value)])}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1 font-body">
          <span>{props.priceRange[0].toLocaleString("fr-DZ")} دج</span>
          <span>{props.priceRange[1].toLocaleString("fr-DZ")} دج</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-4 right-4 z-40 btn-neon p-3 rounded-full text-primary-foreground"
      >
        <SlidersHorizontal className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 glass-strong p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-lg font-bold text-foreground">Filtres</h3>
              <button onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            {content}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-56 shrink-0 glass rounded-xl p-5 h-fit sticky top-24">
        <h3 className="font-heading text-sm font-bold text-foreground mb-5 uppercase tracking-wider flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          Filtres
        </h3>
        {content}
      </aside>
    </>
  );
}
