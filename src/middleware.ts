import { NextRequest, NextResponse } from "next/server"
import { addGeoDataToCookies, setContentLanguage } from "./utils/middlewarefunctions"



export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  addGeoDataToCookies(request, response)

  return setContentLanguage(request)  
}
 

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|stacks|images|favicon.ico).*)"],
}






// if (!request.geo?.city || !request.geo?.country) {
//   return NextResponse.next()
// }
// const response = NextResponse.next()
// response.cookies.set("geo-data", JSON.stringify({ country: request.geo?.country, city: request.geo?.city }))
// return response