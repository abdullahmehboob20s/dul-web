import React from "react";

function VideoCard({ img }) {
  return (
    <div className="aspect-video">
      <img src={img} className="w-full h-full object-cover" alt="" />
    </div>
  );
}

export default VideoCard;
