import { BlogsCards } from "@/components/blogs-cards";
import { Container } from "@/components/container";
import { Highlight } from "@/components/highlight";
import { Paragraph } from "@/components/paragraph";
import { Heading } from "@/components/ui/heading";
import { blogsData } from "@/constants/blogs";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Blogs | MMD",
  description: "Read my latest blogs and articles.",
}


export default async function Blogs() {
  const blogs = blogsData

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="mb-10 mt-2 font-black">
        Writing on Tech, Marketing, and Entrepreneurship
      </Heading>
      <Paragraph>
      Sharing insights on{" "}<Highlight>tech</Highlight>,{" "}<Highlight>marketing</Highlight>{" "}and {" "}<Highlight>entrepreneurship</Highlight>{" "}as a way to give back,
       inspired by all I&apos;ve learned for free from others&apos; blogs. 
       I hope my posts help you grow and innovate.
      </Paragraph>
      <BlogsCards blogs={blogs} />
    </Container>
  )
}
















