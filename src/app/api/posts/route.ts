import { NextResponse } from "next/server";

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

export async function GET(request: Request) {

    const res = await fetch(baseUrl)

    if (!res.ok) {
        return NextResponse.json({ message: "Error fetching data" }, { status: res.status })
    }
    
    const data = await res.json()

    return NextResponse.json(data)
}

export async function POST(request: Request) {
    const req = await request.json()

    const res = await fetch(baseUrl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(req)
    })

    if (!res.ok) {
        return NextResponse.json({ message: "Error creating post" }, { status: res.status })
    }

    const data = await res.json()

    return NextResponse.json(data, {status: 201})
}