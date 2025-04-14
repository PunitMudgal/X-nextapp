"use client";

import Share from "@/components/Share";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const PostModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-10 backdrop-blur-xs flex justify-center">
      <div className="bg-black h-fit rounded-lg mt-10 p-3">
        <X onClick={closeModal} className="cursor-pointer" />
        <Share />
      </div>
    </div>
  );
};

export default PostModal;
