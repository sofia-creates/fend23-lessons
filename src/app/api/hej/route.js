import { generateProducts } from "@/data/productGenerator";
import { NextResponse } from "next/server";

export async function GET(req) {
    const url = new URL(req.url);
   
    const name = url.searchParams.get("name");
    const age = url.searchParams.get("age");
    const address = url.searchParams.get("address");
   
    return NextResponse.json({
        message: `Hej mitt namn är ${name} jag är ${age} år gamal. Jag bor i ${address}.`
    })
}

export async function POST(req) {
    const url = new URL(req.url);
   
    const name = url.searchParams.get("name");
    const age = url.searchParams.get("age");
    const address = url.searchParams.get("address");

    console.log(generateProducts(10));    
   
    return NextResponse.json({
        message: `Hej mitt namn är ${name} jag är ${age} år gamal. Jag bor i ${address}.`
    })
}