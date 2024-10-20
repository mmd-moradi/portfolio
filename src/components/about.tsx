"use client";

import Image from "next/image";
import { Paragraph } from "./paragraph";
import { motion } from "framer-motion";

export type Props = {
  paragraphs: {id: string; content: string}[];
}

export const About = ({ paragraphs }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative"
      >
        <Image 
        src={"/images/about-thumb.jpg"}
        alt="about"
        height="900"
        width="900"
        className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>
      <div>
        {paragraphs.map((paragraph) => (
          <Paragraph key={paragraph.id} className="mt-4">
            {paragraph.content}
          </Paragraph>
        ))}
      </div>
    </div>
  )
}




