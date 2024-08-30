import { NextResponse } from "next/server";

import authors from "@/data/authors";
import { object404Respsonse } from "@/utils/helpers/apiHelpers";

export async function GET(req, options) {
    //! get id from request
    const id = options.params.id
    
    //! get authors from simulated database
    let filteredAuthors = [...authors] // Simulate database request

    //! find author in db or return
    const author = filteredAuthors.find(author => author.id == id)

    if(!author) {
        return object404Respsonse(NextResponse, "Author")
    }

    //! return author
    return NextResponse.json(author, {
        status: 200
    })
}


export async function PUT(req, options) {
    //! get id from request
    const id = options.params.id

    let dbAuthors  = [...authors]


    const authorIndex = dbAuthors.findIndex(author => author.id == id)

    if(authorIndex === -1) {
        return object404Respsonse(NextResponse, "Author")
    }
    
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

    //! simulate database update

    const upadatedAuthor = {
        ...dbAuthors[authorIndex],
        ...body
    } 

    dbAuthors.splice(authorIndex, 1, upadatedAuthor) //Simulate update in db

    //!return newly created data
    return NextResponse.json(upadatedAuthor)

    
}

export async function DELETE(req, options) {
    //! get id from request
    const id = options.params.id
    
    //! get authors from simulated database
    let dbAuthors = [...authors] // Simulate database request

    //! find author in db or return
    const authorIndex = dbAuthors.findIndex(author => author.id == id)

    if(authorIndex === -1) {
        return object404Respsonse(NextResponse, "Author")
    }

    dbAuthors.splice(authorIndex, 1) // Simulate database removal

    //! return nothing as author has been deleted
    return new Response(null, {
        status: 204
    })
}