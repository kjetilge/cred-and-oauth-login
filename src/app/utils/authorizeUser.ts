import { redirect } from "next/navigation"
import getUser from "./getUser"
import { signIn } from "next-auth/react"


export default async function authorizeUser() {
  'use server'
  const foundUser = await getUser()
  // console.log("signIn()", signIn())
  if (!foundUser) redirect('/api/auth/signin')
  // if (foundUser?.emailVerified && !foundUser.skolekode) {
  //   redirect('/registrer')
  // } else {
  //   redirect('/signin')
  // }
}