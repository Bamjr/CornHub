import Image from "next/image"
import { CornCardProps } from "@/utils/type"
import CornRating from "./CornRating"
import FavoriteToggleButton from "./FavoriteToggleButton"
import Link from "next/link"

const CornCard = ({ corn }: { corn: CornCardProps }) => {
    const { name, image, id, description, location, lat, lng, category, price } = corn
    return (
        <article className="group relative p-4 rounded-md">
            <Link href={`/landmark/${id}`}>
                <div className="group-hover:scale-105 transition-transform duration-300">

                    {/* IMAGE */}
                    <div className="relative h-[300px] rounded-md overflow-hidden">
                        <Image
                            src={image}
                            alt={name}
                            sizes="(max-width:768px) 100vw, 50vw"
                            fill
                            className="object-cover rounded-md border-4 border-amber-400"
                        />
                    </div>

                    {/* TOP TEXT SECTION */}
                    <div className="flex items-center justify-between mt-2">
                        <h3 className="text-sm font-semibold italic">{name}</h3>
                        <CornRating />
                    </div>

                    {/* DESCRIPTION (hidden until hover) */}
                    <p
                        className="text-sm text-center opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[100px] overflow-hidden transition-all duration-500 ease-in-out"
                    >
                        {description.substring(0, 60) + '...'}
                    </p>

                    {/* BOTTOM PRICE + LOCATION */}
                    <div className="flex items-center justify-between mt-2 transition-all duration-500">
                        <span className="text-sm font-semibold">🌽{price.toLocaleString()} </span>
                        <p className="italic text-sm">{location}</p>
                    </div>

                </div>

            </Link>
            {/* FAVORITE */}
            <div className="absolute top-5 right-5 p-2">
                <FavoriteToggleButton landmarkId={id} />
            </div>
        </article>

    )
}
export default CornCard