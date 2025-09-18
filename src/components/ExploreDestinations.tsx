import { destinations } from "@/constants/Destinations"
import DestinationCard from "./DestinationCard"

const ExploreDestinations = () => {
    return (
        <div className="w-full px-16 py-8 flex flex-col gap-4">
            <div className="text-4xl font-poppins font-extrabold text-green-700">Explore Destinations</div>
            <div className="grid grid-cols-3 gap-8">
                {destinations.map((d, index) => (
                    <DestinationCard key={index} {...d} />
                ))}
            </div>
        </div>
    )
}

export default ExploreDestinations