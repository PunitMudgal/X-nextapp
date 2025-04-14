import React from "react";
import Image from "./Image";
import PostInteractions from "./PostInteractions";
// Riley Reign. Claudia Garcia. Krystal Swift. Nikole Nash
import { formatTimeTo12Hour } from "@/constants/TimeAgo";
import Avatar from "./AvatarComponent";
import PostMenuActions from "./PostMenuActions";
import HoverProfile from "./HoverProfile";

const Post = ({
  type,
}: // post,
{
  type?: "status" | "comment";
  // post: PostWithDetails;
}) => {
  return (
    <>
      <div className="flex items-start px-4 gap-3 justify-between w-full py-3 border-b border-gray-700">
        <Avatar size={40} />
        <div className="flex flex-col gap-1 w-full justify-start">
          <div className="relative mt-1 flex gap-2 text-sm items-center ">
            <HoverProfile />
            <p className="user-username">@punitmudgal_</p>
            <span className=" text-gray-400  ">
              {" "}
              &bull;
              {formatTimeTo12Hour(new Date())}
              {/* &bull; {extractDate(createdAt)} */}
            </span>
            <PostMenuActions />
          </div>
          <p className="mb-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            sint natus autem vitae earum nam quidem eos illum alias laborum quo
            corrupti accusantium atque in ex et, debitis deserunt, nostrum
            cumque qui. Cumque, non.
          </p>
          <Image
            src="https://ik.imagekit.io/Xforever/posts/original-99aac8f7eb47697d687e1e892877e830.webp?updatedAt=1744368129435"
            alt=""
            w={600}
            h={600}
            className="rounded-lg"
          />
          {type}
          {/* post buttons */}
          <PostInteractions />
        </div>
      </div>
    </>
  );
};

export default Post;
