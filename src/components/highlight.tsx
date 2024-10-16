"use client";
import { cn } from "@/lib/utils";



export const Highlight = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("bg-neutral-100 dark:bg-neutral-700 rounded-[2px] px-1 py-0.5",
      className
    )}>
      {children}
    </span>
  );
}




