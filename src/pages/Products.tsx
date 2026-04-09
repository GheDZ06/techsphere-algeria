import { Header } from "@/components/Header";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutDialog } from "@/components/CheckoutDialog";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      <CheckoutDialog />
      <main className="pt-24">
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
