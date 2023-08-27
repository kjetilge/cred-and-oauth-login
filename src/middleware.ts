// Without a defined `authorize` function, the CredentialsProvider will not work.
// Without a defined `matcher` function, this one line applies the middleware to all routes:
// export { default } from "next-auth/middleware"
// Applies

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export { default } from "next-auth/middleware"


export const config = { matcher: ["/dashboard"] } //"/extra", 

// export function middleware(request: NextRequest) {  
//   console.log('middleware') 
//   const url = request.nextUrl.clone()   
//   if (url.pathname === '/') {
//     url.pathname = '/hello-nextjs'
//     return NextResponse.redirect(url)   
//   } 
// }