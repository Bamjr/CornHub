import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '../ui/input';
import { Search } from 'lucide-react'; // Search icon
import { useEffect, useState, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const SearchBar = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/?${params.toString()}`);
  }, 200);

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams.get('search')]);

  return (
    <div className="flex items-center justify-center gap-2">
      <Search
        className="text-gray-500 cursor-pointer"
        onClick={() => inputRef.current?.focus()}
      />
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search for corn pic, video, and live stream..."
        className="w-full sm:w-96 max-w-lg p-3"
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
        value={search}
      />
    </div>
  );
};

// Wrap the SearchBar component in a Suspense boundary
const SuspendedSearchBar = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SearchBar />
  </Suspense>
);

export default SuspendedSearchBar;

