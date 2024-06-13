import HeroSection from "@/components/Frontend/HeroSection/HeroSection";
import ParallexSection from "@/components/Frontend/ParallexSection";
import DoctorsSpecialistsTabs from "@/components/Frontend/DoctorsSpecialists/DoctorsSpecialistsTabs";
import TrustedCompanies from "@/components/Frontend/TrustedCompanies";
import DoctorsList from "@/components/Frontend/Doctors/DoctorsList";

const Home = () => {
  return (
    <section>
      <ParallexSection />
      <HeroSection />
      <TrustedCompanies />
      <DoctorsSpecialistsTabs />
      <DoctorsList />
      <DoctorsList title="In-Person Doctor Visit" isInPerson={true} />
    </section>
  );
};

export default Home;
