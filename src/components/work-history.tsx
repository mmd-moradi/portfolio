"use client";

import { Paragraph } from "./paragraph";
import { Heading } from "./ui/heading";
import { CheckCircle2 } from "lucide-react";
import { TimeLineType } from "@/types/timelines";


type Props = {
  timelineData: TimeLineType[]
}

export const WorkHistory = ({timelineData}: Props) => {
  return (
    <div>
      {timelineData.map((timeline, index) => (
        <div key={`timeline-${index}`} className="w-full flex md:flex-row md:justify-between flex-col space-y-10 md:space-y-0 space-x-10 md:space-x-20 my-20 relative">
          <Paragraph className="text-sm md:text-base lg:text-base font-normal min-w-fit mt-2">
            {timeline.date}
          </Paragraph>
          <div>
            <Heading as="h5" className="text-lg md:text-xl lg:text-xl bg-none text-sky-500 dark:text-emerald-500">
              {timeline.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {timeline.role}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:tex-sm mb-4">
              {timeline.description}
            </Paragraph>
            <div className="flex items-center gap-2 flex-wrap mb-4">
              {timeline.stacks.map((stack, index) => (
                <span
                  key={`${index}${stack}`}
                  className="text-xs md:text-xs lg:text-xs text-zinc-500 border border-zinc-200 dark:text-primary dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-white/5 px-2 py-1 rounded-full shadow-sm"
                >
                  {stack}
                </span>
              ))}
            </div>
            {timeline.responsibilities.map((responsibility, index) => (
              <StepItem key={`responsibility-${index}`}>{responsibility}</StepItem>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}



const StepItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex items-start space-x-2 my-2">
      <CheckCircle2 className="h-4 w-4 mt-1 text-sky-500 dark:text-emerald-500" />
      <Paragraph className="text-sm md:text-sm lg:text-sm w-fit">
        {children}
      </Paragraph>
    </div>
  );
};


