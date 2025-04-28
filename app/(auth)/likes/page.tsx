import { fetchFavorits } from "@/actions/actions"
import CornLists from "@/components/home/CornLists"
import EmptyList from "@/components/home/EmptyList"

const Likepage = async() => {
  const favorites = await fetchFavorits()
  if(favorites.length === 0){
    return <EmptyList heading="you didn't like any of corn datas :(" message="promise me you will not leave this page blank again..." btnText="i promise."/>
  }
  return <CornLists corns={favorites}/>
}
export default Likepage