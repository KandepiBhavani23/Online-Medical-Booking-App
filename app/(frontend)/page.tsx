import HeroSection from "@/components/Frontend/HeroSection/HeroSection";
import ParallexSection from "@/components/Frontend/ParallexSection";
import DoctorsSpecialistsTabs from "@/components/Frontend/DoctorsSpecialists/DoctorsSpecialistsTabs";
import TrustedCompanies from "@/components/Frontend/TrustedCompanies";

const Home = () => {
  return (
    <section>
      <ParallexSection />
      <HeroSection />
      <TrustedCompanies />
      <DoctorsSpecialistsTabs />
    </section>
  );
};

export default Home;
