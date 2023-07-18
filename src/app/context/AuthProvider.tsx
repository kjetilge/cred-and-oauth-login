'use client'
// recomended way to use providers that are client side only

import { SessionProvider } from 'next-auth/react'
import { type } from 'os'

// export default function AuthProvider({ children }: {
//     children: React.ReactNode
// }) {
//     return (
//         <SessionProvider>
//             {children}
//         </SessionProvider>
//     )
// }

type Props = {
    children?: React.ReactNode
}

export default function AuthProvider({ children }: Props) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
} 