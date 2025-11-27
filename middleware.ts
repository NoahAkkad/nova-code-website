import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Locale, defaultLocale, locales } from "@/locales";

const PUBLIC_FILE = /\.(.*)$/;

function getLocaleFromPath(pathname: string): Locale | null {
  const firstSegment = pathname.split("/")[1];
  return locales.includes(firstSegment as Locale) ? (firstSegment as Locale) : null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/favicon.ico") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const localeInPath = getLocaleFromPath(pathname);

  if (localeInPath) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
