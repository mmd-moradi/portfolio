"use client";
import { cn } from "@/lib/utils";



export const Highlight = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("bg-neutral-100 px-1 py-0.5",
      className
    )}>
      {children}
    </span>
  );
}




