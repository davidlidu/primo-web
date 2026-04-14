import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const lang = request.nextUrl.pathname.startsWith("/es") ? "es" : "en";
  response.headers.set("x-lang", lang);
  return response;
}
