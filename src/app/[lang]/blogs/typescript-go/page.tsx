import { notFound } from "next/navigation"
import { i18n } from "@/i18n-config"

import EnContent from "./en.mdx"
import PTContent from "./pt.mdx"
export default function BlogPost({ params }: { params: { lang: string } }) {
	if (!i18n.locales.some(locale => locale === params.lang)) {
    notFound()
  }

  switch (params.lang) {
    case "en":
      return <EnContent />
    case "pt":
      return <PTContent />
    default:
      return <EnContent />
  }
}