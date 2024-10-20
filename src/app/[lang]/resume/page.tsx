import { Container } from "@/components/container";
import { Paragraph } from "@/components/paragraph";
import { Heading } from "@/components/ui/heading";
import { WorkHistory } from "@/components/work-history";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";


export default async function Resume({ params }: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(params.lang)
  return (
    <Container>
      <span className="text-4xl">
        {dictionary.resume.emoji}
      </span>
      <Heading className="font-black mt-2">
      {dictionary.resume.heading}
      </Heading>
      <Paragraph className="mt-4 max-w-xl">
        {dictionary.resume.description}
      </Paragraph>
      <WorkHistory timelineData={dictionary.resume.timelines} />
    </Container>
  )

}









