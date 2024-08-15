import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { clientConfig, serverConfig } from "./config";
import { authMiddleware } from "next-firebase-auth-edge";

export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    cookieSerializeOptions: serverConfig.cookieSerializeOptions,
    serviceAccount: serverConfig.serviceAccount,
  });
}

// Specify the paths for which the middleware should run
export const config = {
  matcher: ["/", "/index",
    "/((?!_next|api|.*\\.).*)",
    "/api/login",
    "/api/logout",
  ], // Add the paths you want to protect
};
