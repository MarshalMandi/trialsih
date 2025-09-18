import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="flex flex-row justify-center items-center gap-3">
                <Link href="/">
                    <div className="flex items-center gap-2.5 cursor-pointer">
                        <Image src={"/logo.avif"} alt="logo" width={46} height={44} />
                    </div>
                </Link>
                <span className="text-green-700 text-3xl font-extrabold font-poppins max-sm:text-xl">Explore Jharkhand</span>
            </div>
            <div className="flex items-center flex-row gap-4 max-sm:hidden">
                <div className="text-green-700">Home</div>
                <div className="text-green-700">Marketplace</div>
                <div className="text-green-700">Guides</div>
                <div className="text-green-700">Analytics</div>
                <div className="text-green-700">Feedback</div>
                <div><Button >Log In</Button></div>
                <div><Button >Sign Up</Button></div>
            </div>
        </nav>
    )
}

export default Navbar