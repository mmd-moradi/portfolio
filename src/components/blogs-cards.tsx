
"use client";
import { BlogDataType } from "@/types/blogs";
import Image from "next/image";
import React, { useState } from "react";
import { Heading } from "./ui/heading";
import { Paragraph } from "./paragraph";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { TagBadge } from "./tag-badge";
import { Locale } from "@/i18n-config";

export const BlogsCards = ({ blogs, locale }: { blogs: BlogDataType[]; locale: Locale }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="max-w-5xl mx-auto my-10">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
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
            key={`blog-${blog.title}`}
            href={`/${locale}/blogs/${blog.slug}`}
            className="relative my-10 block"
            onMouseEnter={() => setHovered(blog.slug)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence mode="wait">
              {hovered === blog.slug && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1.05,
                    scaleY: 1.2,
                  }}
                  exit={{
                    opacity: 0,

                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  className="absolute z-0 pointer-events-none bg-gray-50 dark:bg-zinc-900 inset-0 h-full w-full rounded-md "
                />
              )}
            </AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20">
              <Image
                src={blog.thumbnail}
                alt="thumbnail"
                height="200"
                width="200"
                objectFit="cover"
                className="rounded-md object-cover h-40 w-60"
              />
              <div className="flex flex-col col-span-3">
                <Heading className="text-lg md:text-lg lg:text-lg font-semibold">
                  {blog.title}
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2">
                  {blog.summary}
                </Paragraph>
                <div className="flex space-x-2 flex-wrap mt-4">
                  {blog.tags?.map((tag, index) => (
                    <TagBadge
                      key={`tag-${blog.slug}-${index}`}
                    >
                      {tag}
                    </TagBadge>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};