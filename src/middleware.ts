// Without a defined `authorize` function, the CredentialsProvider will not work.
// Without a defined `matcher` function, this one line applies the middleware to all routes:
// export { default } from "next-auth/middleware"
// Applies


export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] } //"/extra", 