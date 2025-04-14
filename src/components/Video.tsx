import React from "react";
import { Video } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoTypes = {
  path: string;
  className?: string;
};

const VideoComponent = ({ path, className }: VideoTypes) => {
  return (
    <Video
      urlEndpoint={urlEndpoint}
      src={path}
      controls
      className={className}
      transformation={[
        { width: "1920", height: "1080", quality: 90 },
        { raw: "l-text,i-LamaDev,fs-100,co-white,l-end" },
      ]}
    />
  );
};

export default VideoComponent;
