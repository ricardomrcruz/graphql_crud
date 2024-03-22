import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_PRIVATE_KEY = new TextEncoder().encode(
  process.env.JWT_PRIVATE_KEY || ""
);

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  //   console.log(request.cookies.get("token")?.value);
  const token = request.cookies.get("token")?.value;

  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_PRIVATE_KEY);
      if (payload.userId) return NextResponse.next();
    } catch (e) {}
  }
  //   console.log({ payload });

  return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*", "/profile"],
};
