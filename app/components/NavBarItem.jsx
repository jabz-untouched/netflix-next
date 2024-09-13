"use client";
// NavBarItems.tsx

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Link
          className={`hover:text-amber-800 ${
            genre === param ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg" : ""
          }`}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </Suspense>
    </div>
  );
}
