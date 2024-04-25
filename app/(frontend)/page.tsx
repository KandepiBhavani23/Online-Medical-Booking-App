import HeroSection from "@/components/Frontend/HeroSection/HeroSection";
import { MegaMenu } from "@/components/Frontend/MegaMenu";
import TrustedCompanies from "@/components/Frontend/TrustedCompanies";

const Home = () => {
  return (
    <section>
      <MegaMenu />
      <HeroSection />
      <TrustedCompanies />
    </section>
  );
};

export default Home;
