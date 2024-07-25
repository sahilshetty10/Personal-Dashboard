import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(req: NextRequest) {
  // Check if the 'auth' cookie is present
  const authCookie = cookies().get("userId")?.value;

  if (!authCookie) {
    // If the cookie is not present, redirect to the /login page
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If the cookie is present, proceed with the request
  return NextResponse.next();
}

// Specify the paths for which the middleware should run
export const config = {
  matcher: ["/", "/index"], // Add the paths you want to protect
};
