
import { cookies } from 'next/headers'
import { prisma } from "@/lib/prisma"
import { getSession } from 'next-auth/react'
// Server action defined inside a Server Component
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from 'next/navigation'

export default async function enterSkolekode() {
  const session = await getServerSession(options)

  const updateSkolekode = async (e: FormData) => {
    'use server'

    // 1. Lagre bruker epost rett i database med skolekode
    // 2. redirect to: Sjekk at du har f[tt epost.]
    // 3. evt. lage velkomstside med registrering av skolekode. Bruk newUser: '/auth/new-user'
    //  se nederst om calbacks her: https://next-auth.js.org/providers/email

    // Se også wrap middleware: https://next-auth.js.org/configuration/nextjs#wrap-middleware

    // const skolekode = e.get('skolekode')?.toString()
    // const res = await prisma.user.update({
    //   where: {
    //     email: session?.user?.email as string
    //   },
    //   data: {
    //     skolekode: skolekode
    //   }
    // })
    redirect('/filmkatalog')
  }
 
  return (
    <>
    <h1>Oppgi skolekode</h1>
    <form action={updateSkolekode}>
      <input
        name="skolekode"
        placeholder="din skolekode"
        className="border border+gray+300 p-2 m-4 rounded-md"
      />
      <button type="submit">OK</button>
    </form>
    </>
  )
}