'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { Alert } from "@/components/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../components/UserCard'
import { useState } from "react"


export default function ClientPage() {
  const [skolekode, setSkolekode] = useState('')
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/skolekode', {
        method: 'POST',
        body: JSON.stringify({ skolekode }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      if (response.ok) {
        console.log('Success')
       
      } else { // catches server errors
        setError((await response.json()).error)
      }
    } catch (error: any) { // On catches network errors 
      console.log("FEIL", error)
      setError(error?.message) // setError is a React hook and is initialized above.
    }
    // If error is set, the Alert component is rendered.
  }

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client')
    }
  })

  return (
    <section className="flex flex-col gap-6">
      <h1>Registrer skolekode</h1>
      <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="skolekode">Skolekode</Label>
          <Input
            required
            value={skolekode}
            onChange={(e) => setSkolekode(e.target.value)}
            id="skolekode" type="text" />
        </div>
        {error && <Alert>{error}</Alert>}
        <div className="w-full">
          <Button className='w-full' size="lg">Register</Button>
        </div>

      </form>
    </section>
  )
}