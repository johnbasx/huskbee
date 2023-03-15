import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { RequestCookie } from "next/dist/server/web/spec-extension/cookies";

export const BASE_URL = "http://localhost:3000";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");
  const login = request.cookies.get("login");

  const { pathname } = request.nextUrl;

  // const redirectPath = CheckParamContent(request, login)

  // return redirectPath!=undefined?NextResponse.redirect(
  //       new URL(BASE_URL +redirectPath.toString())
  //     ):
  if (
    pathname.startsWith("/login") &&
    login?.value == "true" &&
    request.nextUrl.searchParams.get("q")
  ) {
    const param = request.nextUrl.searchParams.get("q");

    return NextResponse.redirect(new URL(BASE_URL + param!.toString()));
  } else if (pathname.startsWith("/login") && login?.value == "true") {
    return NextResponse.redirect(new URL(BASE_URL));
  }

  // pathname
  // const searchParams = request.nextUrl.searchParams;
  // console.log(searchParams);
  if (pathname.startsWith("/book-event")) {
    // console.log("Login", login);
    if (login?.value === "true") {
      // console.log(pathname);
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL("/login?q=" + pathname, request.url)
      );
    }
  }

  // if (authStatus === "true") {
  //   return NextResponse.rewrite(new URL("/about-2", request.url));
  // }

  const response = NextResponse.next();
  return response;
}

const CheckParamContent = async (
  request: NextRequest,
  login?: RequestCookie
) => {
  const { pathname } = request.nextUrl;
  const redirect = request.nextUrl.searchParams.get("q");

  let status =
    pathname.startsWith("/login") && login?.value == "true" && redirect
      ? true
      : false;
  return status ? redirect : undefined;
};
