import { About } from "@/components/about"
import { Container } from "@/components/container"
import { Heading } from "@/components/ui/heading"
import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { Metadata } from "next"



export const metadata: Metadata = {
  title: "About | MMD",
  description: "Learn more about me and my journey."
}

export default async function AboutPage({ params }: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(params.lang)
  return (
    <Container>
      <span className="text-4xl">{dictionary.about.emoji}</span>
      <Heading className="font-black mt-2 mb-4">{dictionary.about.heading}</Heading>
      <About paragraphs={dictionary.about.paragraphs} />
    </Container>
  )
}








