import Image from "next/image";

interface Companies {
  id: number;
  url: string;
}

const companiesList: Companies[] = [
  {
    id: 1,
    url: "/assets/trustedPartners/trustedPartner-1.png",
  },
  {
    id: 2,
    url: "/assets/trustedPartners/trustedPartner-2.png",
  },

  {
    id: 3,
    url: "/assets/trustedPartners/trustedPartner-3.png",
  },
  {
    id: 4,
    url: "/assets/trustedPartners/trustedPartner-4.png",
  },

  {
    id: 5,
    url: "/assets/trustedPartners/trustedPartner-5.png",
  },
];

const TrustedCompanies = () => {
  return (
    <section className="bg-slate-200 py-14 dark:bg-dark">
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
