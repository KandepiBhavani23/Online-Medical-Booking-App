import Image from "next/image";
import { companiesList } from "@/constants/trustedcompanies";

const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-14 antialiased bg-slate-200">
      <div className="container mx-auto">
        <h1 className="text-center pb-10 text-2xl md:text-3xl xl:text-4xl font-bold text-[#251540]">
          EnterpriseTrust Partners
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {companiesList?.map((item) => (
            <SingleImage
              href="#"
              Alt="Brand Image"
              imgSrc={item.url}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustedCompanies;

const SingleImage = ({
  href,
  imgSrc,
  Alt,
}: {
  href: string;
  imgSrc: string;
  Alt: string;
}) => {
  return (
    <div className="mx-4 flex w-[150px] items-center justify-center 2xl:w-[180px]">
      <Image
        src={imgSrc}
        alt={Alt}
        className="w-full"
        width={100}
        height={100}
      />
    </div>
  );
};
