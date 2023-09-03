import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const theme = request.cookies.get("theme")?.value ?? "dark";

  const response = NextResponse.next();

  response.cookies.set("theme", theme, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: new Date(2147483647 * 1000),
  });

  return response;
}
