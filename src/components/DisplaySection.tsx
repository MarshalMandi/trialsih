import Link from "next/link"
import { Button } from "./ui/button"

const DisplaySection = () => {
    return (
        <div className="flex flex-col gap-6 justify-center items-center w-full h-[600px] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/displaybg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="text-white font-bold text-5xl">
                Discover Jharkhand's Natural Heritage
            </div>
            <div className="text-white">
                Experience the authentic beauty of tribal culture, pristine forests, and sacred landscapes through our AI-powered platform
            </div>
            <div className="text-white flex flex-row gap-4">
                <Button variant={"secondary"}>
                    <Link href={"/destination"}>
                        Explore Destinations
                    </Link>
                </Button>
                <Button variant={"outline"}>
                    <Link href={"/journey"}>
                        Plan Your Journey
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default DisplaySection