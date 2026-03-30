import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/auth";

const PUBLIC_FILE_EXTENSIONS = [".png", ".svg", ".jpg", ".jpeg", ".ico", ".json"];

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public files and the login page
  const isPublicFile = PUBLIC_FILE_EXTENSIONS.some((ext) => pathname.endsWith(ext));
  if (isPublicFile || pathname === "/login" || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const session = request.cookies.get("session")?.value;
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const user = await decrypt(session);
  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)",
  ],
};
