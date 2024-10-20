import { Container } from "@/components/container";
import { Paragraph } from "@/components/paragraph";
import { ProjectsCards } from "@/components/projects-cards";
import { renderWithHighlights } from "@/components/renderwithHilight";
import { TechStacks } from "@/components/tech-stacks";
import { Heading } from "@/components/ui/heading";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { TechStacksType } from "@/types/tech-stacks";

export default async function Home({params}: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <Container>
      <span className="text-4xl">{dictionary.home.greeting}</span>
      <Heading className="font-black mt-2">{dictionary.home.introductionHeading}</Heading>
      <Paragraph className="max-w-xl mt-4">
        {renderWithHighlights(dictionary.home.introductionParagraph)}
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        {renderWithHighlights(dictionary.home.specializationParagraph)}
      </Paragraph>
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        {dictionary.home.projectsHeading}
      </Heading>
      <ProjectsCards locale={params.lang} projects={dictionary.home.projects} />
      <TechStacks techStacks={dictionary.home.techStacks as TechStacksType} />
    </Container>
  );
}
