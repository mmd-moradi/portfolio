import { ContactForm } from "@/components/contact";
import { Container } from "@/components/container";
import { Paragraph } from "@/components/paragraph";
import { Heading } from "@/components/ui/heading";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";




export default async function Contact({ params }: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(params.lang)
  return (
    <Container>
      <span className="text-4xl">{dictionary.contact.emoji}</span>
      <Heading className="font-black mt-2 mb-2">
        {dictionary.contact.heading}
      </Heading>
      <Paragraph>
        {dictionary.contact.description}
      </Paragraph>
      <ContactForm fields={dictionary.contact.fields} whatsAppTitle={dictionary.contact.whatsAppTitle} submitButtonTitle={dictionary.contact.submitButton} />
    </Container>
  )
}
