import Image from "next/image";
import React from "react";
import comment from "../../public/svg/comment.svg";
import repost from "../../public/svg/repost.svg";
import like from "../../public/svg/like.svg";
import views from "../../public/svg/views.svg";
import share from "../../public/svg/share.svg";
import bookmark from "../../public/svg/bookmark.svg";

//todo this hover thing is not working

const PostInteractions = () => {
  const postBtn = [
    { count: 2, icon: comment, action: null, color: "sky-500" },
    { count: 2, icon: repost, action: null, color: "green-500" },
    {
      count: 1,
      icon: like,
      action: null,
      color: "red-400",
    },
    {
      count: Math.floor(Math.random() * 50) + 1,
      icon: views,
      action: null,
      color: "cyan-500",
    },
  ];

  return (
    <div className="flex items-center justify-between text-xs w-full pt-2 ">
      {postBtn.map((btn, index) => (
        <span
          key={index}
          // onClick={btn.action}
          className={`flex items-center gap-1 cursor-pointer hover:bg-${btn.color}/30 rounded-full p-1 `}
        >
          <Image
            src={btn.icon}
            alt="btn.icon"
            width={20}
            height={20}
            className="invert"
          />
          <span className={`text-xs text-gray-400 hover:text-${btn.color}`}>
            {btn.count}
          </span>
        </span>
      ))}

      <div className="flex items-center gap-2 cursor-pointer ">
        <Image
          src={bookmark}
          alt="btn.icon"
          width={27}
          height={27}
          className="invert hover:bg-sky-400/30 rounded-full p-1"
        />
        <Image
          src={share}
          alt="btn.icon"
          width={27}
          height={27}
          className="invert hover:bg-sky-400/30 rounded-full p-1"
        />
      </div>
    </div>
  );
};

export default PostInteractions;
