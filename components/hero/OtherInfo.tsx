import { CornCardProps } from "@/utils/type"

const OtherInfo = ({ corn }: { corn: CornCardProps }) => {
    return (
        <div className="text-white">
            <p>{corn.location}</p>
            <p className="text-4xl font-semibold md:my-3 md:text-6xl md:leading-[50px]">{corn.name.substring(0,60)}</p>
            <p className="text-lg">{corn.description.substring(0,60)}...</p>

        </div>
    )
}
export default OtherInfo