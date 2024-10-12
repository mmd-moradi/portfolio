import { ContactForm } from "@/components/contact";
import { Container } from "@/components/container";
import { Paragraph } from "@/components/paragraph";
import { Heading } from "@/components/ui/heading";




export default function Contact() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mt-2 mb-2">
        Contact Me
      </Heading>
      <Paragraph>
      Feel free to reach out if you&apos;d like to connect, collaborate, or discuss new projects. I’m always open to exploring innovative ideas or business opportunities. Let&apos;s build something great together!
      </Paragraph>
      <ContactForm />
    </Container>
  )
}
