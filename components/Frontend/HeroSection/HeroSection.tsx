import Image from "next/image";
import heroImage from "../../../public/assets/heroSection.png";
import sethoscope from "../../../public/assets/heroicons/stethoscope.png";
import medicalTools from "../../../public/assets/heroicons/medical-tools.png";
import medicine from "../../../public/assets/heroicons/medicine.png";
import ActiveMembers from "./ActiveMembers";
import TransitionText from "./TransitionText";

const HeroSection = () => {
  return (
    <section className="bg-blue-950 dark:bg-gray-900 ">
      <div className="container mx-auto grid px-5 py-8 lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto space-y-8 place-self-center lg:col-span-7">
          <h1 className="max-w-3xl text-white flex flex-wrap items-center space-y-5 font-serif text-3xl font-extrabold tracking-normal leading-none md:text-4xl xl:text-5xl dark:text-white">
            Secure your
            <span className="text-blue-600 px-3">
              <TransitionText />
            </span>
            and other sessions now! Book to reserve your spot
          </h1>
          <p className="max-w-2xl text-[#F3C0C0] lg:mb-8 md:text-lg font-normal lg:text-xl dark:text-gray-400">
            Discover the convenience of expert Medical Guidance from the comfort
            of your surroundings. Our Team of dedicated and experienced Doctors
            is here to help you.
          </p>
          <div className="flex items-center gap-4">
            <button className="rounded-xl bg-gradient-to-br from-[#868cff] to-[#4318ff] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4318ff]/50">
              Contact Us
            </button>
            <button className="rounded-xl bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4481EB]/50">
              Get Consultation
            </button>
            <button className="rounded-xl bg-gradient-to-br from-[#F857A6] to-[#FF5858] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#F857A6]/50">
              Need Doctor Urgently
            </button>
          </div>
          <div className="flex gap-6">
            <ActiveMembers number={600} title="Active Specialists" />
            <ActiveMembers number={1800} title="Active Patients" />
          </div>
        </div>

        <div className="hidden w-full lg:mt-0 rounded-full lg:col-span-5 shadow-md shadow-emerald-500 lg:flex p-6 xl:p-3 ">
          <Image
            src={medicalTools}
            alt="medical-tools"
            className="lg:w-12 lg:h-12 xl:w-16 xl:h-16 lg:translate-y-32 lg:-translate-x-12 xl:-translate-x-8"
          />
          <Image
            src={medicine}
            alt="medicine"
            className="lg:w-12 lg:h-12 xl:w-16 xl:h-16 lg:translate-x-28 lg:translate-y-[370px] xl:translate-y-[400px]"
          />
          <Image
            src={heroImage}
            alt="hero-image"
            className="lg:-translate-x-28 xl:-translate-x-32 w-full h-auto"
            width={1000}
            height={400}
          />
          <Image
            src={sethoscope}
            alt="stethoscope"
            className="lg:w-12 lg:h-12 xl:w-16 xl:h-16 lg:-translate-x-44 lg:-translate-y-9"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
