"use client";
import { cn } from "@/lib/utils";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        "prose prose-sm prose-blue max-w-none prose-p:text-zinc-700 prose-headings:text-primary"
      )}
    >
      {children}
    </div>
  );
}





