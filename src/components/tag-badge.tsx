import { ReactNode } from "react";




export const TagBadge = ({ children }: {children: ReactNode}) => {
  return (
    <span
      className="text-xs font-medium px-1.5 py-1 text-zinc-500 border border-neutral-200 bg-white dark:border-zinc-700 dark:text-primary-foreground rounded-md shadow-sm dark:shadow-white/5"
    >
      {children}
    </span>
  )
}




