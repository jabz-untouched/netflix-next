import { Inter } from "next/font/google";
import "./globals.css";
// RootLayout.tsx

import React, { Suspense } from "react";
import Header from "./components/Header";
import Providers from "./Providers";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix",
  description: "Watch all movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <NavBar />
          <SearchBox />
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
