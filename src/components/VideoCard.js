import React from "react";

function VideoCard({ img }) {
  return (
    <img src={img} className="aspect-video w-full h-full object-cover" alt="" />
  );
}

export default VideoCard;
