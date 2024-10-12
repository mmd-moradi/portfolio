import { Container } from "@/components/container";
import { SingleProject } from "@/components/project";
import { projects } from "@/constants/projects";
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


export default function ProjectPage({params}: {params: {slug: string}}) {

  const slug = params.slug
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    redirect("/projects")
  }
  return (
    <Container>
      <SingleProject project={project} />
    </Container>
  )
}






