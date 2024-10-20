import { Container } from "@/components/container";
import { ProjectsCards } from "@/components/projects-cards";
import { Heading } from "@/components/ui/heading";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Projects | MMD",
  description: "Check out my latest projects and creations in action.",
}

export default async function Projects({ params }: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(params.lang)
  return (
    <Container>
      <span className="text-4xl">{dictionary.projects.emoji}</span>
      <Heading className="mb-10 mt-2 font-black">
        {dictionary.projects.heading}
      </Heading>
      <ProjectsCards locale={params.lang} projects={dictionary.home.projects} />
    </Container>
  )
}









