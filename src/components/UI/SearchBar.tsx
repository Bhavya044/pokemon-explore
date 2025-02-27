'use client';

import { useSearch } from '@/context/SearchContext';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getPokemonByName } from '@/utils/fetchPokemon';
import PokeballIcon from '../icons/PokeballIcon';
import SearchIcon from '../icons/SearchIcon';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const { setSearchLoading, setSearch, searchLoading, setSearchError, search } =
    useSearch();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setSearchLoading(true);
    setSearchError(null); // Reset error on new search

    const handler = setTimeout(async () => {
      if (!inputValue.trim()) {
        setSearch('');
        setSearchLoading(false);
        setSearchError(null);
        return;
      }

      setSearch(inputValue);
      const pokemon = await getPokemonByName(inputValue.toLowerCase());

      if (pokemon) {
        setSearchLoading(false);
        setSearchError(null); // Reset error if found

        if (pathname.startsWith('/pokemon/')) {
          router.push(`/pokemon/${pokemon.id}`);
        }
      } else {
        setSearchLoading(false);
        setSearchError(`No Pokémon found named ${inputValue} !`);
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, pathname]);

  useEffect(() => {
    if (search === '') {
      setInputValue('');
    }
  }, [search]);

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
        ) : inputValue ? (
          <p
            className="text-lg font-semibold cursor-pointer"
            onClick={() => {
              setInputValue('');
              setSearch('');
            }}
          >
            x
          </p>
        ) : (
          <SearchIcon className="w-6 h-6 text-gray-500" />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
