import React from "react";

function WallpaperCard({ imageUrl, imageName }) {
  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt={imageName}
        className="max-w-[500px] object-cover rounded-xl hover:scale-105 transition-all cursor-pointer"
      />
    </div>
  );
}

export default WallpaperCard;
