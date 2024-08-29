import { NextResponse } from "next/server";

import authors from "@/data/authors";

export async function GET(req, options) {
    //! get authors from simulated database
    let filteredAuthors = [...authors] // Simulate database request

    //? optional filter authors

    //! return filtered authors
    return NextResponse.json({
        results: filteredAuthors
    }, {
        status: 200
    })
}

export async function POST(req, options) {
    //! parse incoming data
    let body;
    try {
        body = await req.json() // Parse incoming data to json
    }catch (error) {
        //! Return early with error
        return NextResponse.json({
            message: "A valid author object has to be sent"
        },{
            status: 400
        })
    }

    //? optional validate incoming data

    //! simulate database psuh
    let dbAuthors  = [...authors]

    const newAuthor = {
        id: dbAuthors.length + 1,
        ...body
    } 
    dbAuthors.push(newAuthor) // simulate save and create in database

    //!return newly created data
    return NextResponse.json(newAuthor)

    
}