const API_KEY =process.env.API_KEY;

// Home.tsx

import React, { Suspense } from "react";
import Results from "./components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  // Wrap the fetch call with Suspense
  const data = res.json();
  const results = data.results;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>Loading...</div>}>
        <Results results={results} />
      </Suspense>
    </main>
  );
}
