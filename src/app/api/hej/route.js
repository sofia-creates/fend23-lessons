import { NextResponse } from "next/server";

export async function GET(req) {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    //TODO write in age, address in response
    return NextResponse.json({
        message: `Hej mitt namn är ${name}`
    })
}