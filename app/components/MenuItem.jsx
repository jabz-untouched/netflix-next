// MenuItem.tsx

import React, { Suspense } from "react";
import Link from "next/link";

function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Suspense fallback={<div>Loading...</div>}>
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Suspense>
    </Link>
  );
}

export default MenuItem;
