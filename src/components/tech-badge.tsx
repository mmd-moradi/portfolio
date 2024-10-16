
"use client";

import { ReactNode } from "react";

export const TechBadge = ({children}: {children: ReactNode}) => {
  return (
    <span
      className="text-xs md:text-xs lg:text-xs bg-gray-50 dark:bg-zinc-800 px-2 py-1 rounded-md text-zinc-500 dark:text-primary"
    >
      {children}
    </span>
  )
}







