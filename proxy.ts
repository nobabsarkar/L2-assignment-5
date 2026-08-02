import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtUtils } from "./utils/jwt";
import { getNewAccessToken } from "./service/refreshToken";
import { JwtPayload } from "jsonwebtoken";

const AUTH_ROUTES = ["/login", "/register"];

const PUBLIC_ROUTES = ["/", "/properties"];

export const proxy = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  const cookieStore = await cookies();

  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  let decodedAccessToken = accessToken
    ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
    : null;

  const decodedRefreshToken = refreshToken
    ? jwtUtils.verifyToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string,
      )
    : null;

  if (!decodedAccessToken && decodedRefreshToken) {
    const result = await getNewAccessToken();

    if (result.success) {
      const newAccessToken = result?.data?.accessToken;

      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 days
        sameSite: "lax",
      });

      accessToken = newAccessToken;

      decodedAccessToken = jwtUtils.verifyToken(
        accessToken!,
        process.env.JWT_ACCESS_SECRET as string,
      );
    }
  }

  let userRole = null;

  if (!decodedAccessToken?.success) {
    // token has expired or invalid, clear the cookies
    cookieStore.delete("accessToken");
  }

  if (decodedAccessToken?.success && decodedAccessToken?.data) {
    userRole = (decodedAccessToken?.data as JwtPayload).role;
  }

  // redirect details page
  if (pathname.startsWith("/properties/") && !accessToken) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("redirectTo", pathname + request.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  // Authenticated pages protection : Authorization is not handled yet
  // redirect dashboard my post page stop-1
  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("redirectTo", pathname + request.nextUrl.search);

    return NextResponse.redirect(loginUrl);
  }
  // Authorization: Role based access controll
  if (pathname.startsWith("/admin-dashboard") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  } else if (
    pathname.startsWith("/landlord-dashboard") &&
    userRole !== "LANDLORD"
  ) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  } else if (
    pathname.startsWith("/tenant-dashboard") &&
    userRole !== "TENANT"
  ) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/properties/:path*",
    "/admin-dashboard/:path*",
    "/tenant-dashboard/:path*",
    "/landlord-dashboard/:path*",
  ],
};

// export const config = {
//   matcher: ["/properties/:path*"],
// };
