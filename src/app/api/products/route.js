import { NextResponse } from "next/server";

//Simulated database

const products = [{
    name: "Tomato",
    description: "Red, round, soft and hard",
    price: 10,
    category: "vegetables",
    id: 1
},{
    name: "Cuecumber",
    description: "Green, oval? ovalish?",
    price: 8,
    category: "vegetables",
    id: 2
},{
    name: "Tomato paste",
    description: "Liquid previous round red thing",
    price: 4,
    category: "vegetables",
    id: 3
},
{
    name: "Milk",
    description: "Liquid sorta like Oat-milk",
    price: 7,
    category: "dairy",
    id: 4
}]

function lowerCaseCompare(a = "",b = "") {
    return a.toLowerCase().includes(b.toLowerCase())
}

export async function GET(req) {
    const url = new URL(req.url);

    const search = url.searchParams.get("search");
    const category = url.searchParams.get("category");
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
    //TODO: Add max price comparission


    return NextResponse.json({results: _products})
}