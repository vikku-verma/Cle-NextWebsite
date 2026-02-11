import { HeroSection } from "../../components/home/HeroSection";
import { AboutSection } from "../../components/home/AboutSection";
import { ProductsSection } from "../../components/home/ProductsSection";
import { NewsAndCTASection } from "../../components/home/NewsAndCTASection";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <NewsAndCTASection />
    </div>
  );
}
