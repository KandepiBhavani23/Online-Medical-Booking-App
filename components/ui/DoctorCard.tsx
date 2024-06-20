import Image from "next/image";
import Link from "next/link";
import { GiStethoscope } from "react-icons/gi";
import { IoIosVideocam } from "react-icons/io";

const times = [
  "8:30 am",
  "9:00 am",
  "9:30 am",
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "11:30 am",
  "12:00 pm",
];

const DoctorCard = ({ isInPerson = false }: { isInPerson?: boolean }) => {
  return (
    <div className="border border-gray-200 grid grid-cols-1 rounded-lg p-6 min-h-full shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Link href="/doctors/slug">
        <h2 className="text-xl font-semibold text-gray-800">
          Dr. Matthew Pabis, MD
        </h2>
        {isInPerson && (
          <p className="text-xs text-gray-600 mt-1">
            57 St. Marks Place, New York, NY 10003
          </p>
        )}
        <div className="flex items-center my-4 gap-1">
          <div className="relative">
            <Image
              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              alt="Dr. Matthew Pabis"
              width={100}
              height={100}
              className="w-20 h-20 rounded-full border-2 border-indigo-600 shadow-md mr-4"
            />
            {!isInPerson && (
              <span className="absolute w-8 h-8 p-2 flex items-center bottom-0 right-2 justify-center bg-[#d6c8f3] rounded-full text-[#3b1780]">
                <IoIosVideocam className="w-7 h-7" />
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-amber-400 text-base">★ ★ ★ ★ ★</span>
              <span className="text-slate-800 font-semibold text-xs">5.0</span>
              <span className="text-gray-500 text-xs">(3)</span>
            </div>
            <div className="flex gap-1 items-center">
              <GiStethoscope />
              <p className="font-medium text-indigo-600 mt-1 text-xs">
                Family medicine
              </p>
            </div>
            <p className="text-green-800 font-bold text-xs mt-2 bg-green-200 py-1 px-2 inline-block text-center">
              Available today
            </p>
          </div>
        </div>
        <p className=" text-gray-500 font-semibold mb-4 text-xs">
          &quot;Great customer service! Love the doctors and the entire staff
          &quot;
        </p>
      </Link>
      <div className="border-t border-gray-200">
        <div className="flex mt-4 mb-2 justify-between items-center">
          <span className="text-xs font-bold">Mon, Jun 10</span>
          <div className="flex items-center">
            <span className="text-[#404040] text-sm line-through font-medium">
              $131
            </span>
            <span className="text-[#5921cf] font-bold text-base ml-2">
              $121
            </span>
            <span className="text-[#404040] ml-2 text-xs font-medium">
              with DocEase
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 text-center items-center gap-3">
          {times.map((time, index) => (
            <Link
              key={index}
              href="#"
              className="bg-[#5921cf] focus:bg-[#8359db]font-semibold hover:text-[#edd1ba] focus:text-[#edd1ba] hover:bg-[#8359db] text-white py-2 px-3 flex items-center justify-center duration-200 h-[34px] min-w-[88px] text-[13px] ease-in-out">
              {time}
            </Link>
          ))}
          <Link
            href="/doctors/slug"
            className="bg-[#f7f4fd] font-semibold text-[#8359db] py-2 px-3 flex items-center justify-center duration-200 h-[34px] min-w-[88px] text-[13px] ease-in-out">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DoctorCard;
