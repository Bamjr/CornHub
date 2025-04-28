import CornCard from "../card/CornCard"
import { CornCardProps } from "@/utils/type"


const CornLists = ({ corns }: { corns: CornCardProps[] }) => {
    return (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 p-6">
            
            

            {
                corns.map((Corn) => {
                    return <CornCard key={Corn.id} corn={Corn} />
                })
            }
        </section>
    )
}
export default CornLists