import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./lib/auth/getUser";

const protectedRoutes = ["/dashboard", "/live-bids", "/my-collection", "/my-wallet", "/notifications", "/settings", "/explore", "/create-collection"];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (protectedRoutes.includes(pathname)) {
        const user = await getUser()
        if (!user) {
            return NextResponse.redirect(new URL("/login", request.nextUrl.origin));
        }
    }

    return NextResponse.next();
}