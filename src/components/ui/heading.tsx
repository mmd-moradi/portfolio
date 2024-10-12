import { cn } from "@/lib/utils";


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
      className={cn("bg-gradient-to-r from-primary to-text-zinc-500 text-transparent bg-clip-text text-base md:text-xl lg:text-4xl font-semibold",
        className
      )}
    >
      {children}
    </Tag>
  )
}










