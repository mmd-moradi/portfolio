import { i18n } from "@/i18n-config"
import { NextRequest, NextResponse } from "next/server"
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import { createVisitor, getLatestVisitor } from "@/backend/actions/latest-visit";



const getLocale = (request: NextRequest): string | undefined => {

  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  
  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales
  
  const languages = new Negotiator({headers: negotiatorHeaders}).languages(locales)

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}


export const setContentLanguage = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  if (
    [
      "mmd-pic-avatar.jpeg"
    ].includes(pathname)
  ) return

  const pathnameIsMissingLocale = i18n.locales.every((locale) => (
    !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  ))

  if (pathnameIsMissingLocale) {
    const local = getLocale(request)
    return NextResponse.redirect(
      new URL(
        `/${local}${pathname.startsWith("/") ? "": "/"}${pathname}`,
        request.url
      )
    )
  }
}



export const visitorGeoHandler = async(request: NextRequest, response: NextResponse) => {
  if (request.geo?.country === undefined || request.geo?.city === undefined) return response

  const latestVisitor = await getLatestVisitor()
  if (request.geo?.country === latestVisitor.country && request.geo?.city === latestVisitor.city) return response

  await createVisitor({ country: request.geo?.country, city: request.geo?.city })
  
  return response
}