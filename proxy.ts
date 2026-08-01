import { NextRequest, NextResponse } from "next/server";

export const proxy = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const accessToken = request.cookies.get("accessToken")?.value;

  if (pathname.startsWith("/properties/") && !accessToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirectTo", pathname + request.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/properties/:path*"],
};
