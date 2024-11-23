import React from "react";

function App() {
  return (
    <div className="h-screen bg-gruvbox-bg text-gruvbox-fg p-8">
      <h1 className="font-black text-5xl">Backdrop</h1>
      <div className="mt-10 grid grid-cols-3">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F11732.jpg&f=1&nofb=1&ipt=716c38a50cc82ef4e968fb82bcdef405ccef89316ad6f8673b4287b588da7f52&ipo=images"
          alt="Wallpaper"
          className="max-w-[500px] rounded-xl"
        />
      </div>
    </div>
  );
}

export default App;
