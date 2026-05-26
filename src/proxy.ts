import { NextRequest, NextResponse } from "next/server";

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Eastern Doctor Admin"'
    }
  });
}

export function proxy(req: NextRequest) {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    if (process.env.NODE_ENV !== "production") return NextResponse.next();
    return new NextResponse("Admin credentials are not configured.", { status: 503 });
  }

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return unauthorized();

  const decoded = atob(auth.slice("Basic ".length));
  const separator = decoded.indexOf(":");
  const providedUser = separator >= 0 ? decoded.slice(0, separator) : "";
  const providedPassword = separator >= 0 ? decoded.slice(separator + 1) : "";

  if (providedUser === username && providedPassword === password) return NextResponse.next();

  return unauthorized();
}

export const config = {
  matcher: ["/admin/:path*"]
};
