import LocationSelector from "./LocationSelector"

const TourismMapSection = () => {
    return (
        <section className="bg-gray-200 px-16 py-8 flex flex-col gap-4">
            <div className="text-green-700 text-4xl font-extrabold font-poppins">Interactive Tourism Map</div>
            <div className="flex flex-row gap-4 items-center justify-center">
                <div >
                    <LocationSelector />
                    <div>this is the weather information.</div>
                </div>
                <div>this is the mapbox</div>
            </div>
        </section>
    )
}

export default TourismMapSection