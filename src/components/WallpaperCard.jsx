import React from "react";

function WallpaperCard({ image }) {
  return (
    <img
      src={image.url}
      alt={image.name}
      className="max-w-[500px] object-cover rounded-xl hover:scale-105 transition-all cursor-pointer"
    />
  );
}

export default WallpaperCard;
