import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./lib/auth/getUser";

const protectedRoutes = ["/dashboard", "/live-bids", "/my-collection", "/my-wallet", "/notifications", "/settings", "/explore/items", "/explore/nfts", "/store", "/my-store", "/my-tokens", "/my-transactions", "/collections", "/items", "/leaderboard", "/coupon-match", "/initiate-coupon-swap", "/item", "/coupon", "/collection"];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const param1 = pathname.split("/")[1];

    if (protectedRoutes.includes(`/${param1}`)) {
        const user = await getUser()
        if (!user) {
            return NextResponse.redirect(new URL(`/login?callbackUrl=${encodeURIComponent(pathname)}`, request.nextUrl.origin));
        }
    }

    return NextResponse.next();
}