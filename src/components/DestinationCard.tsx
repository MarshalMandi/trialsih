import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

const DestinationCard = ({ destinationName, destinationType, destinationDesc }: {
    destinationName: string, destinationType: string, destinationDesc: string
}) => {
    return (
        <div className="w-full bg-gray-200 border-1 border-gray-600 rounded-xl">
            <div className="border-0 rounded-xl overflow-hidden">
                <Image src={"/scenery.webp"} alt="scenery" width={100} height={100} className="w-full h-[220px]" />
            </div>
            <div className="w-full flex flex-col gap-2 p-4">
                <div className="text-2xl font-semibold">{destinationName}</div>
                <div className="text-gray-600">{destinationType}</div>
                <div>{destinationDesc}</div>
            </div>
            <div className="w-full flex flex-row justify-between px-4 pb-4">
                <Button variant={"outline"} className="dark">
                    <Link href={"/destination"}>
                        View Details
                    </Link>
                </Button>
                <Button variant={"outline"} className="dark">+</Button>
            </div>
        </div>
    )
}

export default DestinationCard