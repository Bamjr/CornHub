import { fetchCorn, fetchCornHero } from "@/actions/actions"
import CornLists from "./CornLists"
import { CornCardProps } from "@/utils/type"
import Hero from "../hero/Hero"
import CategoriesList from "./CategoriesList"
import EmptyList from "./EmptyList"

const CornContainer = async({search,category}:{search?:string,category?:string}) => {

    const corns:CornCardProps[] = await fetchCorn({search,category})
    const cornsHero:CornCardProps[] = await fetchCornHero()
    //console.log(corns)
    // if(corns.length === 0){
    //   return <EmptyList/>
    // }
  return (
    <div>
      
      <Hero corns={cornsHero}/>
      <CategoriesList search={search} category={category}/>
      {
        corns.length === 0
        ? <EmptyList btnText="Clear filters"/>
        : <CornLists corns ={corns} />
      }
      
      
    </div>
  )
}
export default CornContainer