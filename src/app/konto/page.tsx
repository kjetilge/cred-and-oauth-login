// create a simple html page in nextjs
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma"
import getUser from "../utils/getUser"
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import { signOut } from "next-auth/react"

const adapter = PrismaAdapter(prisma)

export default async function Home() {
  const user = await getUser()
  const session = await getServerSession(options)
  
  // delete account
  async function deleteAccount() {
    'use server'
    const foundUser = await getUser()
    console.log(foundUser)
    try {
      const res = await prisma.user.delete({
        where: {
          email: foundUser?.email as string
        }
      })
    } catch (error) {
      console.log(error)
    }
    // signOut() // {redirect: false}
  }

  if(!user) {
    return (<p>Logg inn for å se denne siden. User:{JSON.stringify(user)}</p>)
  } else {
    return (
      <div>
        <h1>Konto</h1>
        <p>Her kan du slette din konto. Hvis du sletter den vil du ikke lenger kunne se fagfilm.</p>
        <p>Vi vil ikke lagre noen informasjon om deg etter at du har slettet kontoen din.</p>
        <p>Vi vil heller ikke lagre informasjon om deg hvis du ikke logger inn på kontoen din i løpet av 6 måneder.</p>
        <p>Du kan enket melde deg på igjen med en gyldig skolekode</p>
        <br />
  
        <form action={deleteAccount}>
        <p>Slett din bruker: {user?.email} ?</p>
        <button type="submit">Ja, slett nå</button>
      </form>
      </div>
    )
  }
}