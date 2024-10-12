import { About } from "@/components/about"
import { Container } from "@/components/container"
import { Heading } from "@/components/ui/heading"
import { Metadata } from "next"



export const metadata: Metadata = {
  title: "About | MMD",
  description: "Learn more about me and my journey."
}

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">🌟</span>
      <Heading className="font-black mt-2 mb-4">About Me</Heading>
      <About />
    </Container>
  )
}








