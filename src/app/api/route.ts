import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"


export async function GET(request: Request) {
    const session = await getServerSession(options)
    console.log('GET API', session) 
    return NextResponse.json({ authenticated: !!session })
}