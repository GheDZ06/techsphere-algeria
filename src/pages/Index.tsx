import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductCatalog } from "@/components/ProductCatalog";
import { BuildConfigurator } from "@/components/BuildConfigurator";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      <main>
        <HeroSection />
        <ProductCatalog />
        <BuildConfigurator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
