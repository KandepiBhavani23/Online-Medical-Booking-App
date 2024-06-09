import { MoveRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface CardContent {
  id: number;
  cardTitle: string;
  cardDescription?: string;
  image: string | StaticImageData;
}

interface ServicesListProps {
  content: CardContent[];
  className: string;
}

const ServicesList: React.FC<ServicesListProps> = ({ content, className }) => {
  return (
    <div className="grid xl:grid-cols-4 w-full sm:grid-cols-2 md:grid-cols-3 gap-4  grid-col-1">
      {content?.map(({ id, cardTitle, cardDescription, image }) => (
        <div
          key={id}
          style={{
            backgroundColor: className,
          }}
          className={`flex relative right-0 h-48 w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
          <div className="py-5 px-2 relative w-[55%]">
            <h6 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
              {cardTitle}
            </h6>
            <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
              {cardDescription}
            </p>
            <button className="inline-flex absolute bottom-2 items-center p-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <MoveRight />
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 flex items-end justify-end w-[45%]">
            <Image
              alt="image"
              src={image}
              width={500}
              height={500}
              className="w-full h-full object-cover aspect-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ServicesList;
