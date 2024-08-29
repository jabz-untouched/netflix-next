import Image from "next/image";
import React from "react";
import Link from "next/link";


export default function Card(result) {
  return (
    <div>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg{
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className='sm:rounded-t-lg'
        ></Image>
      </Link>
    </div>
  );
}
