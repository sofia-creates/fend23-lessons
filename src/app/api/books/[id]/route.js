import { NextResponse } from "next/server";
import books from "@/data/books";
import { object404Respsonse, validateBookData } from "@/utils/helpers/apiHelpers";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, options){
    const id = options.params.id

    try {
        const book = await prisma.book.findUniqueOrThrow({
            where: {
                id: Number(id)
            }
        })
        return NextResponse.json(book)
    }catch(error) {
        console.log(error)
        return object404Respsonse(NextResponse, "Book")
    }
}

export async function PUT(req) {
    const id = options.params.id;
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

export async function DELETE(req, options) {
    const id = options.params.id
    
    const bookIndex = books.findIndex(b => b.id == id)
    if(bookIndex === -1) {
        return object404Respsonse(NextResponse, "Book")
    }
    
    books.splice(bookIndex,1) // Database call simulation

    return new Response(null, {
        status: 204
    })
}