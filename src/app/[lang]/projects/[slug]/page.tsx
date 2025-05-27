import { Container } from "@/components/container";
import { SingleProject } from "@/components/project";
import { projects } from "@/constants/projects";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from "next";
import { redirect } from "next/navigation";


export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
  const slug = params.slug
  const project = projects.find((project) => project.slug === slug)

  if (project) {
    return {
      title: `${project.title} | MMD`,
      description: project.description,
    }
  } else {
    return {
      title: "Projects | MMD",
      description: "Check out my latest projects and creations in action.",
    }
  }


}


export default async function ProjectPage({params}: {params: {slug: string, lang: Locale}}) {

  const dictionary = await getDictionary(params.lang)
  const slug = params.slug
  const project = dictionary.home.projects.find((project) => project.slug === slug)

  if (!project) {
    redirect("/projects")
  }
  return (
    <Container>
      <SingleProject project={project} lang={params.lang} />
    </Container>
  )
}






