import { NextRequest, NextResponse } from "next/server"



export function middleware(request: NextRequest) {
  if (!request.geo?.city || !request.geo?.country) {
    return NextResponse.next()
  }
  const response = NextResponse.next()
  response.cookies.set("geo-data", JSON.stringify({ country: request.geo?.country, city: request.geo?.city }))
  return response
}
 

export const config = {
  matcher: "/",
}






