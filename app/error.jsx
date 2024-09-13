"use client"
// Error.tsx

import React, { Suspense } from 'react';

export default function Error({ error, reset }) {
  // Log the error (you can customize this further if needed)
  console.error('An error occurred:', error);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <button
          className="hover:text-amber-500"
          onClick={reset} // Invoke the reset function
        >
          Try Again
        </button>
      </Suspense>
    </div>
  );
}

