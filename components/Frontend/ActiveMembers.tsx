import Image from "next/image";

interface UserProfile {
  id: number;
  url: string;
}

const userProfile: UserProfile[] = [
  {
    id: 1,
    url: "/assets/stacked_Images/profile-picture-2.jpg",
  },
  {
    id: 2,
    url: "/assets/stacked_Images/profile-picture-3.jpg",
  },
  {
    id: 3,
    url: "/assets/stacked_Images/profile-picture-4.jpg",
  },
  {
    id: 4,
    url: "/assets/stacked_Images/profile-picture-5.jpg",
  },
];

const ActiveMembers = ({
  number,
  title,
}: {
  number: number;
  title: string;
}) => {
  return (
    <div className="space-y-2">
      <span className="text-lg text-white font-bold tracking-wide">
        {title}
      </span>
      <div className="flex -space-x-4 rtl:space-x-reverse">
        {userProfile?.map((user) => (
          <Image
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src={user.url}
            key={user.id}
            alt=""
            height={90}
            width={90}
          />
        ))}
        <a
          className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
          href="#">
          +{number}
        </a>
      </div>
    </div>
  );
};
export default ActiveMembers;
