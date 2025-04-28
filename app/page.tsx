import LoadingCard from "@/components/card/LoadingCard"
import CornContainer from "@/components/home/CornContainer"
import { Suspense } from "react"

const page = async({ searchParams }: { searchParams: { search?: string,category?:string } }) => {
  const {search,category} = await searchParams;
  return (
    <>
      <Suspense fallback={<LoadingCard />}>
        <CornContainer search={search} category={category}/>

      </Suspense>

    </>
  )


}
export default page