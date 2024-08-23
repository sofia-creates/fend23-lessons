import { NextResponse } from "next/server";

import { lowerCaseCompare, validateBookData } from "@/utils/helpers/apiHelpers";

import books from "@/data/books";

export async function GET(req) {
  const url = new URL(req.url);
  const search = url.searchParams.get("search");

  let filteredBooks = [...books]; //Simulates databse callss

  if (search) {
    filteredBooks = filteredBooks.filter(
      (book) =>
        lowerCaseCompare(book.title, search) ||
        lowerCaseCompare(book.author, search) ||
        book.keywords.some(keyword => {
            return lowerCaseCompare(keyword, search)
        })
    );
  }

  return NextResponse.json({ results: filteredBooks });
}

export async function POST(req) {
    let body;
    try {
        body = await req.json()
    }
    catch(error) {
        return NextResponse.json({
            message: "A valid JSON object has to be sent"
        },{
            status: 400
        })
    }
    const [hasErrors, errors] = validateBookData(body)
    if(hasErrors) {
        return NextResponse.json({
            errors
        }, {
            status: 400
        })
    }

    let filteredBooks = [...books]; //Simulates databse callss
    
    const book = {
        id: filteredBooks.length+1,
        ...body
    }

    books.push(book)
    
    return NextResponse.json(book, {
        status: 201
    })
}
