import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import AvatarComponent from "./AvatarComponent";
import { Button } from "./ui/button";

const HoverProfile = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <p className="user-fullname">Punit Sharma</p>
      </HoverCardTrigger>
      <HoverCardContent className="bg-gray-950  border-gray-700 shadow-2xl p-3">
        <div className="flex flex-col gap-3">
          <div className="flex place-items-end gap-2 justify-between">
            <div className="flex flex-col items-center gap-2">
              <AvatarComponent size={60} />
              <div className="flex flex-col">
                <p className="user-fullname">Punit Sharma</p>
                <p className="user-username">@punitmudgal_</p>
              </div>
            </div>
            <Button variant="outline">Follow</Button>
          </div>
          <div className="flex flex-col gap-2 text-gray-200">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quos enim ratione tempora quia.
            </p>
            <div className="flex gap-4">
              <p className="text-gray-400">
                <span className="font-semibold text-gray-200 mr-0.5">158</span>
                Following
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-gray-200 mr-0.5">889k</span>
                Followers
              </p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverProfile;
