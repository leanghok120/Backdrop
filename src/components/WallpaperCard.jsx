import React from "react";
import { storage } from "../appwrite/config";

function WallpaperCard({ image }) {
  async function downloadWallpaper() {
    // Get download link
    const result = storage.getFileDownload(
      import.meta.env.VITE_BUCKET_ID,
      image.$id,
    );

    // Create a temporary link for the download
    const anchor = document.createElement("a");
    anchor.href = result;
    anchor.download = image.name;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  return (
    <img
      src={image.url}
      alt={image.name}
      className="max-w-[500px] object-cover rounded-xl hover:scale-105 transition-all cursor-pointer"
      onClick={downloadWallpaper}
    />
  );
}

export default WallpaperCard;
