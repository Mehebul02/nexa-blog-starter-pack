import { NextResponse } from "next/server"
import { blogs } from "../route"

export const GET = async (request: Response, { params }: { params: { id: string } }) => {
    const { id } = await params
    const blog = blogs.find((blog) => blog.id === id)

    return NextResponse.json(blog)
} 