import Link from "next/link";
import SectionHeading from "../../ui/SectionHeading";
import ToggleButton from "../../ui/ToggleButton";
import { FaRegMap } from "react-icons/fa";

import DoctorListCarousel from "@/components/ui/DoctorListCarousel";

type Doctor = {
  id: number;
  doctorName?: string;
};

const doctor: Doctor[] = [
  {
    id: 101,
    doctorName: "Bhavani",
  },
  {
    id: 102,
    doctorName: "Chinni",
  },
  {
    id: 103,
    doctorName: "Chinni",
  },
  {
    id: 104,
    doctorName: "Chinni",
  },
  {
    id: 105,
    doctorName: "Chinni",
  },
];

const DoctorsList = ({
  title = "TeleHealth Visit",
  isInPerson,
}: {
  title?: string;
  isInPerson?: boolean;
}) => {
  return (
    <div
      className={`pb-12 pt-20 ${
        !isInPerson ? "bg-[#FDFAF6]" : "bg-[#F6F1F1]"
      }`}>
      <div className="container">
        <SectionHeading title={title} />
        <div className="py-5 flex items-center justify-between">
          {!isInPerson ? (
            <ToggleButton label="Within 2 hours" />
          ) : (
            <Link href="#" className="flex items-center gap-2 text-[#5921CF]">
              <FaRegMap className="h-6 w-6" />
              <span className="text-base font-semibold">Map View</span>
            </Link>
          )}
          <Link href="#" className="text-[#5921CF] font-bold text-base">
            See All
          </Link>
        </div>
        <DoctorListCarousel doctor={doctor} isInPerson={isInPerson} />
      </div>
    </div>
  );
};
export default DoctorsList;
