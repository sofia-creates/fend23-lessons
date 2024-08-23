import { NextResponse } from "next/server";

import { lowerCaseCompare } from "@/utils/helpers/apiHelpers";

// Type def for book
/*
{
  id: number,
  title: string,
  author: string,
    year: number,
    genre: string,
}*/

export async function GET(req) {
  //TODO get a list of books
  //TODO add filter for title, author
}

export async function POST(req) {
    //TODO add a new book
    //TODO validate fields
}