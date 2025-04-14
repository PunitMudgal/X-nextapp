import Image from "./Image";
import Link from "next/link";
import { leftBarMenuList } from "@/constants";
import AvatarComponent from "./AvatarComponent";

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* LOGO MENU BUTTON */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818] ">
          <Image
            path="icons/xlogo.png"
            alt="logo"
            w={24}
            h={24}
            className="invert"
          />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col gap-2">
          {leftBarMenuList.map((item, i) => (
            <div key={item.id || i}>
              {/* {i === 2 && user && (
            <div>
              <Notification />
            </div>
          )} */}
              <Link
                href={item.link}
                className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
              >
                <Image
                  path={`icons/${item.icon}`}
                  alt={item.name}
                  w={24}
                  h={24}
                />
                <span className="hidden xxl:inline">{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
        {/* BUTTON */}
        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image path="icons/post.svg" alt="new post" w={24} h={24} />
        </Link>
        <Link
          href="/compose/post"
          className="hidden xxl:block bg-white text-black rounded-full font-semibold py-2 px-20"
        >
          Post
        </Link>
      </div>
      {/* {user && ( */}
      <>
        {/* <Socket /> */}
        {/* USER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <AvatarComponent size={40} />
            </div>
            <div className="hidden xxl:flex flex-col">
              <p className="user-fullname">Punit Sharma</p>
              <p className="user-username">@punitmudgal_</p>
            </div>
          </div>
          <div className="hidden xxl:block cursor-pointer font-bold">...</div>
          {/* ADD LOGOUT */}
          {/* <Logout/> */}
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default LeftBar;
