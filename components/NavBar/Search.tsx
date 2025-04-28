'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "../ui/input"
import { Search } from 'lucide-react' // Search icon
import { useEffect, useState, useRef } from "react"
import { useDebouncedCallback } from 'use-debounce'

const SearchBar = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');

  // Reference to the input element for triggering focus
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounced search handler
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/?${params.toString()}`);
  }, 200);

  // Reset the search input when the query param changes
  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams.get('search')]);

  console.log(searchParams.get('search'));

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Search icon, now triggers input focus */}
      <Search
        className="text-gray-500 cursor-pointer"
        onClick={() => inputRef.current?.focus()} // Focus the input field when clicked
      />

      <Input
        ref={inputRef} // Link the input field with the reference
        type="text"
        placeholder="Search for corn pic, video, and live stream..."
        className="w-full sm:w-96 max-w-lg p-3"
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value); // Trigger the debounced search
        }}
        value={search}
      />
    </div>
  )
}

export default SearchBar;
