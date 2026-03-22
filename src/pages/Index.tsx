import { Layout } from "@/components/layout/Layout";
import { HeroSection, FeaturesSection, QuickToolsSection, CTASection } from "@/components/home/HomeSections";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <QuickToolsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;