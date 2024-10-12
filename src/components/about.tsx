"use client";

import Image from "next/image";
import { Paragraph } from "./paragraph";
import { motion } from "framer-motion";

export const About = () => {
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
        <Paragraph className="mt-4">
          My name is Mohammad Moradi, a full-stack developer from 🇮🇷 Iran, now based in 🇧🇷 Brazil. With over 3 years of experience,
           I build scalable, efficient software solutions and enjoy collaborating with diverse teams to create impactful 
           web applications.
        </Paragraph>
        <Paragraph className="mt-4">
          I&apos;m passionate about entrepreneurship and software development, and I love working with like-minded people to innovate 
          and solve problems. I thrive on turning ideas into reality, from designing interfaces to building optimized 
          backend systems.
        </Paragraph>
        <Paragraph className="mt-4">
          My goal is to become a top-tier developer while helping businesses turn their software ideas into 
          reality. 📈 I also strive to give back to my family ❤️, supporting them as I grow both personally and professionally.
        </Paragraph>
        <Paragraph className="mt-4">
        Thank you for being here! 🙏 I appreciate your interest in my journey, and I can&apos;t wait to embark on this adventure
         with you. Let&apos;s explore the possibilities together!
        </Paragraph>
      </div>
    </div>
  )
}




