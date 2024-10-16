"use client";
import { cn } from "@/lib/utils";



export const Paragraph = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm lg:text-base font-normal text-zinc-500 dark:text-zinc-200",
    className)}>
      {children}
    </p>
  );
}
