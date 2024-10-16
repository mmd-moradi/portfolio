import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const CalSans = localFont({
  src: [{ path: "../../../fonts/CalSans-SemiBold.woff2" }],
  display: "swap",
});

export const Heading = ({
  children,
  className,
  as: Tag="h1",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) => {
  return (
    <Tag
      className={cn(CalSans.className, "bg-gradient-to-r from-primary to-text-zinc-700 to-zinc-300 text-transparent bg-clip-text text-lg md:text-xl lg:text-4xl font-semibold",
        className
      )}
    >
      {children}
    </Tag>
  )
}










