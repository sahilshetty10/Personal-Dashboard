import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // get userId from localStorage
  

  // If the cookie is present, proceed with the request
  return NextResponse.next();
}

// Specify the paths for which the middleware should run
export const config = {
  matcher: ["/", "/index"], // Add the paths you want to protect
};
return authMiddleware(request, {
  loginPath: "/api/login",
  logoutPath: "/api/logout",
  apiKey: clientConfig.apiKey,
  cookieName: serverConfig.cookieName,
  cookieSignatureKeys: serverConfig.cookieSignatureKeys,
  cookieSerializeOptions: serverConfig.cookieSerializeOptions,
  serviceAccount: serverConfig.serviceAccount,
});