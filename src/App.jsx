import React, { useEffect, useState } from "react";
import { storage } from "./appwrite/config";
import WallpaperCard from "./components/WallpaperCard";

function App() {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    fetchWallpapers();
  }, []);

  async function fetchWallpapers() {
    const response = await storage.listFiles(import.meta.env.VITE_BUCKET_ID);
    const files = response.files.map((file) => ({
      ...file,
      url: storage.getFileView(import.meta.env.VITE_BUCKET_ID, file.$id),
    }));

    setWallpapers(files);
  }

  return (
    <div className="h-screen bg-gruvbox-bg text-gruvbox-fg p-8">
      <h1 className="font-black text-5xl">Backdrop</h1>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {wallpapers.map((wallpaper) => (
          <WallpaperCard key={wallpaper.$id} image={wallpaper} />
        ))}
      </div>
    </div>
  );
}

export default App;
