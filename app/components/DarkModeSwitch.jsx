"use client";

// DarkModeSwitch.tsx

import React, { Suspense } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // No need for useState here; useEffect can handle the mounting logic
  React.useEffect(() => {
    // Set the component as mounted
    setMounted(true);
  }, []);

  // State to track whether the component is mounted
  const [mounted, setMounted] = React.useState(false);

  return (
    <div>
      {mounted && (
        <Suspense fallback={<div>Loading...</div>}>
          {currentTheme === "dark" ? (
            <MdLightMode
              onClick={() => setTheme("light")}
              className="text-xl cursor-pointer hover:text-amber-500"
            />
          ) : (
            <MdDarkMode
              onClick={() => setTheme("dark")}
              className="text-xl cursor-pointer hover:text-amber-500"
            />
          )}
        </Suspense>
      )}
    </div>
  );
}
