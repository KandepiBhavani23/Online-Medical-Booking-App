import HeroSection from "@/components/Frontend/HeroSection/HeroSection";
import ParallexSection from "@/components/Frontend/ParallexSection";
import TabbedSection from "@/components/Frontend/TabbedSection";
import TrustedCompanies from "@/components/Frontend/TrustedCompanies";

const Home = () => {
  return (
    <section>
      <ParallexSection />
      <HeroSection />
      <TrustedCompanies />
      <TabbedSection />
    </section>
  );
};

export default Home;
