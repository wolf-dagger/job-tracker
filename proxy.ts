import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

// if user is not looged in this file redirects to /sign-in

export default async function proxy(request: NextRequest) {
  const session = await getSession();

  const isSignInPage = request.nextUrl.pathname.startsWith("/sign-in");
  const isSingUpPage = request.nextUrl.pathname.startsWith("/sign-up");

  if ((isSignInPage || isSingUpPage) && session?.user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
