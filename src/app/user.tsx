'use client'
import { useSession }  from 'next-auth/react'

const  User = () => {
  const { data: session } = useSession() // this works inside of providers
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}

export default User