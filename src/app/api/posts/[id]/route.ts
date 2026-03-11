import { NextResponse } from "next/server";

type PostParams = {
    params: Promise<{ id: string }>
}

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

export async function GET(request: Request, { params }: PostParams) {

    const { id } = await params
    const res = await fetch(`${baseUrl}/${id}`)

    if (!res.ok) {
        return NextResponse.json({ message: "Error fetching data" }, { status: res.status })
    }

    const data = await res.json()

    return NextResponse.json(data)
}

export async function PUT(request: Request, { params }: PostParams) {
    const { id } = await params

    const req = await request.json()
    const res = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req)
    })

    if (!res.ok) {
        return NextResponse.json({ message: "Error editing post" }, { status: res.status })
    }

    const data = await res.json()

    return NextResponse.json(data, { status: 200 })
}

export async function DELETE({ params }: PostParams) {
    const { id } = await params

    const res = await fetch(`${baseUrl}/${id}`, { method: "DELETE" })

    if (!res.ok) {
        return NextResponse.json({ message: "Error deleting post" }, { status: res.status })
    }

    return NextResponse.json({ message: "Post Deleted"}, { status: 204 })

}