"use client";
import { cn } from "@/lib/utils";



export const Paragraph = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm lg:text-base font-normal text-zinc-500",
    className)}>
      {children}
    </p>
  );
}
