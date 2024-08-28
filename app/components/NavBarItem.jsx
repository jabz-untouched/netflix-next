"use client";

import React from "react";
import Link from "next/link";

import { createUntrackedSearchParams, useSearchParams } from "next/navigation";

export default function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link 
      className= {`hover:text-amber-800" ${genre === param ? ' underline underline-offset-8 decoration-4 decoration-amber-500 ronded-lg' : ''}`} href={`/?genre=${param}`}> {title} 
        
        </Link>
    </div>
  );
}
