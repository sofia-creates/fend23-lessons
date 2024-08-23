import { NextResponse } from "next/server";

import { lowerCaseCompare, validateProductData } from "@/utils/helpers/apiHelpers";

import products from "@/data/webShopProducts";

export async function GET(req) {
    const url = new URL(req.url);

    const search = url.searchParams.get("search");
    const category = url.searchParams.get("category");
    const maxPrice = url.searchParams.get("max-price")

    let _products = [...products] // Simulates a database call

    if(category) {
        _products = _products.filter(product => product.category === category)
    }
    if(search && search.length >= 3) {
        _products = _products.filter(product => 
            lowerCaseCompare(product.name, search) ||
            lowerCaseCompare(product.description, search)
        )
    }
    if(maxPrice) {
        const maxPriceNum = Number(maxPrice);
        if(!maxPriceNum){
            return NextResponse.json({
                message: "Error: max-price must be a number"
            }, {
                status: 400
            })
        }
        _products = _products.filter(product => product.price <= maxPriceNum)
    }



    return NextResponse.json({results: _products})
}

export async function POST(req) {
    const body = await req.json();
    // Validate fields
    const [hasErrors, errors] = validateProductData(body)
    if(hasErrors) {
        return NextResponse.json({
            errors
        }, {
            status: 400
        })
    }
    const id = products.length + 1
    const product = {
        ...body,
        id
    }
    products.push(product) // Simulates a database save

    return NextResponse.json({
        product,
    }, {
        status: 201
    })
}