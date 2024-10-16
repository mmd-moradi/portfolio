"use client";
import { ProjectType } from "@/types/projects"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image";
import { Paragraph } from "./paragraph";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { TechBadge } from "./tech-badge";



export const SingleProject = ({project}:{project: ProjectType}) => {
  const [activeImage, setActiveImage] = useState(project.thumbnail)
  return (
    <div className="py-8">
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
        key={project.slug}
        className="relative"
      >
        <Image
          src={activeImage}
          alt="thumbnail"
          height="900"
          width="7000"
          className="rounded-md object-contain"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>
      <div className="flex flex-row justify-center my-8 flex-wrap">
        {project.images.map((image, idx) => (
          <button
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
          >
            <Image
              src={image}
              alt="project thumbnail"
              height="1000"
              width="1000"
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-4 border rounded-lg border-neutral-100"
            />
          </button>
        ))}
      </div>
      <div className="flex items-start flex-col mt-20 lg:items-start">
        <h1 className="text-primary font-black text-4xl mb-2 pb-1"> {project.title}</h1>
        <div className="flex gap-2 md:mb-1 mt-2 md:mt-0 flex-wrap">
          {project.stack?.map((stack: string) => (
            <TechBadge
              key={stack}
            >
              {stack}
            </TechBadge>
          ))}
        </div>
      </div>
      <div>
        <Paragraph className="max-w-xl mt-4">{project.description}</Paragraph>
      </div>
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600">
        {project?.content}
      </div>

      <Link
        href={project.href}
        target="__blank"
        className="inline-flex mt-4 items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-primary bg-primary text-primary-foreground shadow-lg shadow-black/20 dark:shadow-white/5 sm:backdrop-blur-sm text-sm font-medium px-4 py-2"
      >
        Live Preview
        <ArrowRightIcon className="ml-2 w-4 h-4 text-primary-foreground" />
      </Link>
    </div>
  )
}








