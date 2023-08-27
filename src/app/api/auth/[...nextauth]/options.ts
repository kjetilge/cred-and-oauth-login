import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation"
import { redirect } from "next/navigation"
import { sign } from 'crypto';

// create user type


const FEIDE_API_BASE_URL = 'https://auth.dataporten.no';

const prisma = new PrismaClient();

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET as string,
    session: {
      // strategy: 'jwt', // default is database when using adapter
      maxAge: 30 * 24 * 60 * 60 // 30 days
    },
    providers: [
      {
        id: "feide",
        name: "Feide",
        type: "oauth",
        wellKnown: `${FEIDE_API_BASE_URL}/.well-known/openid-configuration`,
        authorization: { params: { scope: "openid email profile" } },

        token: `${FEIDE_API_BASE_URL}/oauth/token`,
        userinfo: `${FEIDE_API_BASE_URL}/v2/user/me`,
        clientId: process.env.FEIDE_ID,
        clientSecret: process.env.FEIDE_SECRET,
        profile(profile) {
          console.log('********************************** profile', profile)
          return {
            id: profile.sub,
            email: profile.sub,
            name: profile.name,
            // iss: profile.iss,
            // jti: profile.jti,
            // aud: profile.aud,
            // iat: profile.iat,
            // exp: profile.exp,
            // auth_time: profile.auth_time
          }
        },
      },
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: Number(process.env.EMAIL_SERVER_PORT),
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
      })
      ],
      callbacks: {
        // async signIn({ user, profile, email, account, credentials }) {

        //   const isVerificationRequest = email?.verificationRequest ? true : false
        //   console.log('---------------------- signIn ----------------------')
        //   console.log('isVerificationRequest', isVerificationRequest)
        //   console.log('email', email)
        //   console.log('user', user)
        //   console.log('----------------------')
        //   if (!user?.email && !profile?.sub) {
        //     throw new Error('Email or sub not provided')
        //   }
        //   let canLogIn = false

        //   if (email) {
        //     console.log('email.verificationRequest', email.verificationRequest)
        //     canLogIn = true;   //if the email exists in the User collection, email then a magic login link
        //   }
          
        //   // kontroller om epostbrukeren finnes i databasen
        //   if (user?.email) {
        //     console.log('user.email', user.email)
        //     const userExists = await prisma.user.findUnique({
        //       where: {
        //         email: user.email as string
        //       }
        //     })
        //     canLogIn = userExists ? true : false
        //   }

        //   return canLogIn;  //if the email does not exist in the User collection, do not email a magic login link

        // },
        async session({ session, token, user }) {
          console.log('session info', session, token, user)
          // When using database sessions, the User (user) object is passed as an argument.
          // Send properties to the client, like an access_token and user id from a provider.
          // session.accessToken = token.accessToken
          // session.user.id = token.id
          
          return session
        }
      },
      events: {
        createUser: async (message) => {
          console.log("createUser", message)
        },
        updateUser: async (message) => {
          console.log("updateUser", message)
        },
        signIn: async (message) => {
          console.log("signIn", message)
        },
      }
}

