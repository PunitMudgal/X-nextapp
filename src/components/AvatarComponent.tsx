import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUserRound } from "lucide-react";

type ImageType = {
  size?: number;
  className?: string;
};

const AvatarComponent = ({ size, className }: ImageType) => {
  return (
    <Avatar
      style={{ height: `${size}px`, width: `${size}px` }}
      className={className}
    >
      <AvatarImage
        className="h-full w-full object-cover"
        src="https://github.com/shadcn.png"
        alt="avatar"
      />
      <AvatarFallback>
        <CircleUserRound size={size} />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
