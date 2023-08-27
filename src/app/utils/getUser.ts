import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import { get } from "http";

const prisma = new PrismaClient();

const getUser = async () => {
  'use server'
  const session = await getServerSession(options)
  console.log('session', session) 
  if(!session) return session

  const email = session?.user?.email as string

  const foundUser = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  //console.log('foundUser', foundUser)
  return foundUser
}

export default getUser