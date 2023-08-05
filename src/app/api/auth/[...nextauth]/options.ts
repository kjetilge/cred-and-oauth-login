import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import type { OIDCConfig } from "@auth/core/providers"
// import type { Profile } from 'next-auth'
import GithubProvider from "next-auth/providers/github"

const FEIDE_API_BASE_URL = 'https://auth.dataporten.no';


export const options: NextAuthOptions = {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
        {
          id: "feide",
          name: "Feide",
          type: "oauth",
          issuer: "https://auth.dataporten.no",
          clientId: process.env.FEIDE_ID,
          clientSecret: process.env.FEIDE_SECRET,
        } satisfies OIDCConfig
      ]
}

