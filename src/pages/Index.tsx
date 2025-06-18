import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import FeaturedServices from "@/components/FeaturedServices";
import TrustIndicators from "@/components/TrustIndicators";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServiceCategories />
      <FeaturedServices />
      <TrustIndicators />
    </div>
  );
};

export default Index;
