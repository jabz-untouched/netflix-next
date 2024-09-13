// NavBar.tsx

import React, { Suspense } from "react";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="w-screen h-11 bg-amber-100 py-6 my-2 flex items-center space-x-7 mx-auto text-slate-950">
      <div className="flex lg:text-lg mx-auto space-x-7 font-extrabold">
        <Suspense fallback={<div>Loading...</div>}>
          <NavBarItem title="Trending" param="fetchTrending" />
          <NavBarItem title="Top Rated" param="fetchTopRated" />
        </Suspense>
      </div>
    </div>
  );
}
