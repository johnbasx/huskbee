import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const FRONT_BASE_URL = "http://localhost:3000";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");
  const login = request.cookies.get("login");
  const org_login = request.cookies.get("Org_login");
  const admin_login = request.cookies.get("admin_login");

  const { pathname } = request.nextUrl;

  // const redirectPath = CheckParamContent(request, login)

  // return redirectPath!=undefined?NextResponse.redirect(
  //       new URL(FRONT_BASE_URL +redirectPath.toString())
  //     ):
  if (
    pathname.startsWith("/login") &&
    login?.value == "true" &&
    request.nextUrl.searchParams.get("q")
  ) {
    const param = request.nextUrl.searchParams.get("q");

    return NextResponse.redirect(new URL(FRONT_BASE_URL + param!.toString()));
  } else if (pathname.startsWith("/login") && login?.value == "true") {
    return NextResponse.redirect(new URL(FRONT_BASE_URL));
  }

  if (pathname.startsWith("/book-event")) {
    if (login?.value === "true") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL("/login?q=" + pathname, request.url)
      );
    }
  }

  // ORGANISER AUTHENTICATE PAGE
  if (pathname.startsWith("/organiser")) {
    if (
      org_login?.value === "true" ||
      pathname.startsWith("/organiser/login") ||
      pathname.startsWith("/organiser/registration")
    ) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(FRONT_BASE_URL));
    }
  }

  if (pathname.startsWith("/admin")) {
    if (admin_login?.value === "true" || pathname.startsWith("/admin/login")) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(FRONT_BASE_URL));
    }
  }

  const response = NextResponse.next();
  return response;
}

// const CheckParamContent = async (
//   request: NextRequest,
//   login?: RequestCookie
// ) => {
//   const { pathname } = request.nextUrl;
//   const redirect = request.nextUrl.searchParams.get("q");

//   let status =
//     pathname.startsWith("/login") && login?.value == "true" && redirect
//       ? true
//       : false;
//   return status ? redirect : undefined;
// };
