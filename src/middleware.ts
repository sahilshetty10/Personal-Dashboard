import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {}

// Specify the paths for which the middleware should run
export const config = {
  matcher: [],
};
