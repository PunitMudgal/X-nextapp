"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";

type ImageType = {
  size?: number;
  className?: string;
};

const AvatarComponent = ({ size, className }: ImageType) => {
  const { user } = useUser();
  if (!user) return null;

  return (
    <Avatar
      style={{ height: `${size}px`, width: `${size}px` }}
      className={className}
    >
      <AvatarImage
        className="h-full w-full object-cover"
        src={user.imageUrl || ""}
        alt="avatar"
      />
      <AvatarFallback>
        <CircleUserRound className="h-full w-full" />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
