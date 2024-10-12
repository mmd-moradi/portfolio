"use client";
import { projects } from "@/constants/projects"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heading } from "./ui/heading"
import { Paragraph } from "./paragraph"


export const ProjectsCards = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        {projects.map((project, index: number) => (
          <motion.div
            key={project.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Link
              href={project.slug ? `/projects/${project.slug}` : project.href}
              key={project.href}
              className="group space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                height="200"
                width="200"
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg "
                  >
                    {project.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {project.description}
                  </Paragraph>
                </div>
                <div className="flex gap-2 md:mb-2 mt-4 flex-wrap">
                  {project.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-zinc-500"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}






