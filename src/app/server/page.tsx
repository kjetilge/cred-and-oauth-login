import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "../components/UserCard"
import { redirect } from "next/navigation"

export default async function ServerPage() {
    const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
        // callbackUrl is a parameter that can be used to
        // redirect the user to a specific page after authentication
    }

    return (
        <section className="flex flex-col gap-6">
            <UserCard user={session?.user} pagetype={"Server"} />
            <h1>Session</h1>
            <pre>{JSON.stringify(session)}</pre>
        </section>
    )

}