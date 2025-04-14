import Image from "@/components/Image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Feed from "@/components/Feed";
import AvatarComponent from "@/components/AvatarComponent";

const UserPage = () => {
  return (
    <div className="">
      {/* PROFILE TITLE */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Punit sharma</h1>
      </div>
      {/* INFO */}
      <div className="border-b border-gray-700">
        {/* COVER & AVATAR CONTAINER */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="w-full aspect-[3/1] relative">
            {/* <Image
              path={"general/noCover.png"}
              alt=""
              w={600}
              h={200}
              tr={true}
            /> */}
            <div className="w-full h-full bg-gray-800" />
          </div>
          {/* AVATAR */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-gray-800  absolute left-4 -translate-y-1/2">
            <AvatarComponent className="w-full h-full" />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/explore.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/message.svg" alt="more" w={20} h={20} />
          </div>
        </div>
        {/* USER DETAILS */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME & HANDLE */}
          <div className="">
            <h1 className="text-2xl font-bold">Punit sharma</h1>
            <span className="text-textGray text-sm">@punitmudgal_</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          {/* JOB & LOCATION & DATE */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                path="icons/userLocation.svg"
                alt="location"
                w={20}
                h={20}
              />
              <span>India</span>
            </div>

            <div className="flex items-center gap-2">
              <Image path="icons/date.svg" alt="date" w={20} h={20} />
              <span>Joined 24-04-2025</span>
            </div>
          </div>
          {/* FOLLOWINGS & FOLLOWERS */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* FEED */}
      <Feed />
    </div>
  );
};

export default UserPage;
