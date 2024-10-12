import { Container } from "@/components/container";
import { ProjectsCards } from "@/components/projects-cards";
import { Heading } from "@/components/ui/heading";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Projects | MMD",
  description: "Check out my latest projects and creations in action.",
}

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">🚀</span>
      <Heading className="mb-10 mt-2 font-black">
        My Creations in Action
      </Heading>
      <ProjectsCards />
    </Container>
  )
}









