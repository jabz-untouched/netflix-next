// Searchpage.tsx

import React, { Suspense } from "react";
import Results from "@/app/components/Results";

export default function Searchpage({ params }) {
  const searchTerm = params.searchTerm;
  const res = fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );

  // Wrap the fetch call with Suspense
  const data = res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 ? (
        <h1 className="text-center pt-6">No results found</h1>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Results results={results} />
        </Suspense>
      )}
    </div>
  );
}
