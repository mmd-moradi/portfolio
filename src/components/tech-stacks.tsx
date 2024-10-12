"use client";
import { techStacksData } from "@/constants/tech-stacks"
import { Heading } from "./ui/heading"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const TechStacks = () => {
  return (
    <div>
      <Heading as="h2" className="text-lg md:text-lg lg:text-lg mt-20 mb-4 font-black">
        Tech Stacks
      </Heading>
      <div className="flex items-center gap-4 flex-wrap">
        {techStacksData.map((stack) => (
          <TooltipProvider key={stack.title}>
            <Tooltip>
              <TooltipTrigger>
              <Image 
                src={stack.src}
                alt={stack.title}
                width={48}
                height={48}
                className={cn("object-contain", stack.className)}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{stack.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}





