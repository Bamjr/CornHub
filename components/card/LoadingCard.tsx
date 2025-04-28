import { Skeleton } from "../ui/skeleton"

const LoadingCard = () => {
    return (
        <>
            <SkeletonCardHero />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 p-6">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </>
    )
}


export const SkeletonCard = () => {
    return <div>
        <Skeleton className="h-[300px] rounded-md overflow-hidden mb-2" />
        <Skeleton className="h-4 w-3/4 rounded-md overflow-hidden mb-2" />
        <Skeleton className="h-4 w-1/2 rounded-md overflow-hidden mb-2" />

    </div>
}

export const SkeletonCardHero = () => {
    return <div>
        <Skeleton className="w-full h-[600px] rounded-md overflow-hidden mb-10 p-20" />
        <Skeleton className="h-20 w-full rounded-md overflow-hidden mb-2" />

    </div>
}

export default LoadingCard