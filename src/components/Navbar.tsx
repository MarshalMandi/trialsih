"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"
import { LogoutButton } from "./LogoutButton"

const Navbar = () => {
    const supabase = createClient()

    const [user, setUser] = useState<any>(null)
    const [isMounted, setIsMounted] = useState(false) // Track client mount

    useEffect(() => {
        setIsMounted(true) // now we are on the client

        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null)
        })

        // Listen for login/logout changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
    }, [supabase])

    // Don't render until client-side to prevent hydration mismatch
    if (!isMounted) return null
    console.log("the value of user is", user)
    return (
        <>
            <nav className="navbar">
                <div className="flex flex-row justify-center items-center gap-3">
                    <Link href="/">
                        <div className="flex items-center gap-2.5 cursor-pointer">
                            <Image src="/logo.png" alt="logo" width={46} height={44} />
                        </div>
                    </Link>
                    <span className="text-green-700 text-3xl font-extrabold font-poppins max-sm:text-xl">
                        Explore Jharkhand
                    </span>
                </div>
                <div className="flex items-center flex-row gap-4 max-sm:hidden">
                    {user ? (
                        <div className="flex flex-row gap-4 items-center">
                            <div className="text-green-700">Home</div>
                            <div className="text-green-700">Marketplace</div>
                            <div className="text-green-700">Guides</div>
                            <div className="text-green-700">Analytics</div>
                            <div className="text-green-700">Feedback</div>
                            <LogoutButton />
                        </div>
                    ) : (
                        <div className="flex flex-row gap-4 items-center">
                            <Button variant="default">
                                <Link href="/auth/login">Log In</Link>
                            </Button>
                            <Button variant="secondary">
                                <Link href="/auth/sign-up">Sign Up</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </nav>
            {user ? <div className="w-full flex items-center justify-center">Hello {user.email}</div> : <div className="w-full flex items-center justify-center">the user does not exist</div>}
        </>
    )
}

export default Navbar
