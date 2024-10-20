import { NextRequest, NextResponse } from "next/server"
import { setContentLanguage } from "./utils/middlewarefunctions"



export function middleware(request: NextRequest) {
  const response = setContentLanguage(request)
  if (response) {
    response.cookies.set("geo-data", JSON.stringify({ country: request.geo?.country, city: request.geo?.city }))
    return response
  }
  const initialResponse = NextResponse.next()
  initialResponse.cookies.set("geo-data", JSON.stringify({ country: request.geo?.country, city: request.geo?.city }))
  return initialResponse
}
 

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|stacks|images|favicon.ico).*)"],
}

