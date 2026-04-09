import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";

export function ProductCatalog() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([5000, 500000]);

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        if (selectedCategories.length && !selectedCategories.includes(p.category)) return false;
        if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
        if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
        return true;
      }),
    [selectedCategories, selectedBrands, priceRange]
  );

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Nos <span className="text-primary neon-text-cyan">Produits</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Les meilleurs composants aux prix algériens
          </p>
        </div>

        <div className="flex gap-8">
          <FilterSidebar
            selectedCategories={selectedCategories}
            selectedBrands={selectedBrands}
            priceRange={priceRange}
            onCategoryChange={setSelectedCategories}
            onBrandChange={setSelectedBrands}
            onPriceChange={setPriceRange}
          />

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-body">Aucun produit trouvé</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
