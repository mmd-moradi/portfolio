import { BlogsCards } from "@/components/blogs-cards";
import { Container } from "@/components/container";
import { Paragraph } from "@/components/paragraph";
import { renderWithHighlights } from "@/components/renderwithHilight";
import { Heading } from "@/components/ui/heading";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Blogs | MMD",
  description: "Read my latest blogs and articles.",
}


export default async function Blogs({ params }: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(params.lang)
  return (
    <Container>
      <span className="text-4xl">{dictionary.blogs.emoji}</span>
      <Heading className="mb-10 mt-2 font-black">
        {dictionary.blogs.heading}
      </Heading>
      <Paragraph>
        {renderWithHighlights(dictionary.blogs.description)}
      </Paragraph>
      <BlogsCards locale={params.lang} blogs={dictionary.blogs.blogsCards} />
    </Container>
  )
}
















