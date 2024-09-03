import Image from "next/image";
import React from "react";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  const movie = await res.json();
  return (
    <div className="w-full">
      <div className=" max-w-6xl mx-auto p-4 md:pt-8 flex flex-col md:flex-row content-center md:space-x-6 ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          style={{maxWidth: '100%', height: '100%'}}
          alt={movie.title} // Add an alt attribute for accessibility
          className="rounded-lg "
        />
        <div className="px-10">
            <h2 className="font-bold text-lg"> {movie.title || movie.name } </h2>
            <p className=" font-normal"> {movie.overview} </p>
            <p className=" mb-3 ">
                
                <span className="font-semibold mr-1">Date Released: </span>
                 {movie.release_date|| movie.first_air_date } </p>
            <p className=" mb-3 ">
            <span className="font-semibold mr-1">Rating: </span>    
                {movie.vote_count} </p>



        </div>
      </div>
    </div>
  );
}
