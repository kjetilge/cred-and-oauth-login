import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import type { OIDCConfig } from "@auth/core/providers"
// import type { Profile } from 'next-auth'

const FEIDE_API_BASE_URL = 'https://auth.dataporten.no';


export const options: NextAuthOptions = {
    providers: [
        {
          id: "feide",
          name: "Feide",
          type: "oidc",
          issuer: "https://auth.dataporten.no",
          clientId: process.env.FEIDE_ID,
          clientSecret: process.env.FEIDE_SECRET,
        }
      ]
}

