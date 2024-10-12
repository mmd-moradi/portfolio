"use client";

import { useRouter } from "next/navigation";
import { Container } from "./container";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Paragraph } from "./paragraph";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { Prose } from "./pros";
import { BlogDataType } from "@/types/blogs";
import React from "react";
import { ArrowLeft } from "lucide-react";


export const BlogPageLayout = ({ 
  meta,
  children,
}:
{
  meta: BlogDataType;
  children: React.ReactNode;
}) => 
  {
    const router = useRouter();

    return (
      <Container>
        <article>
          <header className="flex flex-col">
            <Button onClick={() => router.push("/blogs")} variant={"outline"} className="group rounded-full h-10 w-10 px-0 py-0 shadow-md shadow-zinc-900/5 mb-4">
              <ArrowLeft className="w-4 h-4 text-zinc-500 group-hover:text-zinc-700" />
            </Button>
            <Heading className="py-4">{meta.title}</Heading>
            <div className="flex items-center">
              <Paragraph className="text-zinc-700">
                {formatDate(meta.publishedAt)}
              </Paragraph>
            </div>
            <div className="w-full mt-4 aspect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
              <Image
                src={meta.thumbnail}
                alt="thumbnail"
                height="900"
                width="900"
                className={`object-cover object-left-top w-full max-h-96`}
              />
            </div>
          </header>
          <Prose className="mt-8">{children}</Prose>
        </article>
      </Container>
    )
}













