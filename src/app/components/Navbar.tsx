import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-blue-800 p-4">
            <ul className="flex justify-evenly text-2xl font-bold">
                <li><Link href="/">Forsiden</Link></li>
                <li><Link href="/filmkatalog">Filmkatalog</Link></li>
                <li><Link href="/bestill">Bestill Fagfilm</Link></li>
                <li><Link href="/personvern">Personvern</Link></li>
                <li><Link href="/api/auth/signin">Logg inn</Link></li>
                <li><Link href="/api/auth/signout">Logg ut</Link></li>
                <li><Link href="/konto">Konto</Link></li>
            </ul>
        </nav>
    )
}
