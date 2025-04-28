'use client'
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "../ui/input"
import { Search } from 'lucide-react'
import { useEffect, useState } from "react"
import { useDebouncedCallback } from 'use-debounce'

const SearchBar = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter()
  const [search, setSearch] = useState(searchParams.get('search')?.toString() || '')

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)
    if(value){
      params.set('search',value)
    }else{
      params.delete('search')
    }
    replace(`/?${params.toString()}`)

  }, 200)

  useEffect(()=>{
    if(!searchParams.get('search')){
      setSearch('');
    }

  },[searchParams.get('search')])

  console.log(searchParams.get('search'))
  return (
    <div className="flex items-center justify-center gap-2 ">
      <Search />
      <Input
        type="text"
        placeholder="Search for corn pic, video and live stream..."
        className="w-full sm:w-96 max-w-lg p-3"
        onChange={(e) => {
          setSearch(e.target.value)
          handleSearch(e.target.value)
        }}
        value={search}

      />
    </div>
  )
}
export default SearchBar