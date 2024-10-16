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
        "prose prose-sm prose-blue max-w-none prose-p:text-zinc-700 dark:prose-strong:text-emerald-500 dark:prose-li:text-emerald-500 dark:prose-p:text-zinc-200 prose-headings:text-primary"
      )}
    >
      {children}
    </div>
  );
}





