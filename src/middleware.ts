import {NextRequest, NextResponse} from "next/server";

export default function Middleware(request: NextRequest) {
    const pathname = request.nextUrl;

    if (pathname === "/")
        return NextResponse.redirect(new URL("/it"));

    return NextResponse.next();
}

export const config = {
    matcher: "/";
}