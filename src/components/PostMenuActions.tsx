import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Ban,
  ChartNoAxesCombined,
  CodeXml,
  Ellipsis,
  Flag,
  Trash2,
  UserRoundPlus,
  UserRoundX,
  VolumeOff,
} from "lucide-react";
import Link from "next/link";

const PostMenuActions = () => {
  const menuActions = [
    { name: "Unfollow", icon: UserRoundX },
    { name: "Add/remove", icon: UserRoundPlus },
    { name: "Mute", icon: VolumeOff },
    { name: "Block", icon: Ban },
    { name: "View post engagement", icon: ChartNoAxesCombined },
    { name: "Embed post", icon: CodeXml },
    { name: "Report post", icon: Flag },
    { name: "Delete", icon: Trash2 },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis
          size={28}
          className="ml-auto text-2xl p-1 rounded-full hover:bg-gray-500/30 "
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-950 text-gray-100  ">
        {menuActions.map((action) => (
          <DropdownMenuItem asChild key={action.name}>
            <Link
              href={"/"}
              className="flex items-center gap-2 hover:bg-gray-900"
            >
              <action.icon className="text-gray-100" size={25} />
              {action.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostMenuActions;
