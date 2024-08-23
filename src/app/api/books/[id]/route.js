import { NextResponse } from "next/server";
import books from "@/data/books";
import { getIdFromUrl, object404Respsonse, validateBookData } from "@/utils/helpers/apiHelpers";

export async function GET(req){
    const id = getIdFromUrl(req.url)

    if(!id) {
        return object404Respsonse(NextResponse, "Book")
    }
    const book = books.find(b => b.id == id)
    if(!book) {
        return object404Respsonse(NextResponse, "Book")
    }
    
    return NextResponse.json(book)
}

export async function PUT(req) {
    const id = getIdFromUrl(req.url);
    if(!id) return object404Respsonse(NextResponse, "Book");
    
    const book = books.find(b => b.id == id);
    if(!book) return object404Respsonse(NextResponse, "Book")
        
    let body;

    try {
        body = await req.json()
    }
    catch(error) {
        return NextResponse.json({
            message: "A valid JSON object has to be sent"
        }, {
            status: 400
        })
    }

    const [hasErrors, errors] = validateBookData(body, book)
    if(hasErrors) {
        return NextResponse.json({
            errors
        }, {
            status: 400
        })
    }

    const updatedBook = {
        ...book,
        ...body
    }

    return NextResponse.json(updatedBook)
}

export async function DELETE(req) {
    //TODO: delete book if found
}