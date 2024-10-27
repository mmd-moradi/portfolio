import { NextRequest, NextResponse } from "next/server"
import { handleVisitorGeo, setContentLanguage } from "./utils/middlewarefunctions"



export async function middleware(request: NextRequest) {
  let response = setContentLanguage(request)
  if (response) {
    response = await handleVisitorGeo(request, response)
    return response
  }
  const initialResponse = NextResponse.next()
  const geoResponse = await handleVisitorGeo(request, initialResponse)
  return geoResponse
}
 

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|stacks|images|favicon.ico).*)"],
}

