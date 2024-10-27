import { NextRequest, NextResponse } from "next/server"
import { visitorGeoHandler, setContentLanguage } from "./utils/middlewarefunctions"



export async function middleware(request: NextRequest) {
  let response = setContentLanguage(request)
  if (response) {
    response = await visitorGeoHandler(request, response)
    return response
  }
  const initialResponse = NextResponse.next()
  const geoResponse = await visitorGeoHandler(request, initialResponse)
  return geoResponse
}
 

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|stacks|images|favicon.ico).*)"],
}

