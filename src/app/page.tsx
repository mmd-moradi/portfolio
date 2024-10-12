import { Container } from "@/components/container";
import { Highlight } from "@/components/highlight";
import { Paragraph } from "@/components/paragraph";
import { ProjectsCards } from "@/components/projects-cards";
import { TechStacks } from "@/components/tech-stacks";
import { Heading } from "@/components/ui/heading";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black mt-2">Hello there! I&apos;m Mohammad</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer with an{" "}<Highlight>entrepreneurial mindset</Highlight>, passionate about helping businesses build and improve their 
        software solutions. With<br/><Highlight>3 years of experience</Highlight>, I focus on creating scalable, optimized, and visually appealing web 
        applications.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
      I specialize in{" "}<Highlight>TypeScript</Highlight>,{" "}<Highlight>Next.js</Highlight>,{" "}<Highlight>React</Highlight>,{" "}<Highlight>Node.js</Highlight>{" "}and working with both{" "}<Highlight>SQL and NoSQL databases</Highlight>{" "}to build products and 
      web apps that make a meaningful impact. I enjoy collaborating with businesses to bring their ideas to life, whether it&apos;s 
      developing new software from the ground up or enhancing existing systems with new features.
      </Paragraph>
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        What I&apos;ve been working on
      </Heading>
      <ProjectsCards />
      <TechStacks />
    </Container>
  );
}
