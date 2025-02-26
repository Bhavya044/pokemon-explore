import { useSearch } from '@/context/SearchContext';
import { useEffect, useState } from 'react';
import PokeballIcon from '../icons/PokeballIcon';
import SearchIcon from '../icons/SearchIcon';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const { setSearchLoading, setSearch, searchLoading } = useSearch();

  useEffect(() => {
    setSearchLoading(true);
    const handler = setTimeout(() => {
      setSearch(inputValue);
      setSearchLoading(false);
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, setSearch, setSearchLoading]);

  return (
    <div className="relative w-full sm:w-72">
      <input
        type="text"
        placeholder="Search Pokémon by name..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="rounded-lg px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none w-full"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        {inputValue && searchLoading ? (
          <div className="animate-spin w-6 h-6 opacity-100">
            <PokeballIcon />
          </div>
        ) : (
          <SearchIcon className="w-6 h-6 text-gray-500" />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
