import { Container } from "@/components/container";
import { Paragraph } from "@/components/paragraph";
import { Heading } from "@/components/ui/heading";
import { WorkHistory } from "@/components/work-history";


export default function Resume() {

  return (
    <Container>
      <span className="text-4xl">
        💼
      </span>
      <Heading className="font-black mt-2">
        My Journey & Experience
      </Heading>
      <Paragraph className="mt-4 max-w-xl">
        A snapshot of my professional experience and skills, highlighting the 
        roles I&apos;ve taken and the projects I&apos;ve contributed to.
      </Paragraph>
      <WorkHistory />
    </Container>
  )

}









