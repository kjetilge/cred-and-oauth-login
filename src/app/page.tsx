import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"
import User from './user'
// https://www.youtube.com/watch?v=2kgqPvs0j_I


export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
    <main>
      {/* {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )} */}
      <section>
      <h1>Server Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      </section>

      <section>
      <h1>Client Session</h1>
      <User />
      </section>

    </main>




    </>
  )
}