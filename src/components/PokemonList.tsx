'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { getPokemonList, getPokemonByName } from '@/utils/fetchPokemon';
import PokeballIcon from './icons/PokeballIcon';
import { IPokemon } from '@/types/pokemon';
import { useSearch } from '@/context/SearchContext';
import { ErrorDisplay } from './UI/ErrorDisplay';

interface IPokemonListProps {
  initialPokemons: IPokemon[];
  totalCount: number;
  nextUrl: string;
}

const PokemonList: React.FC<IPokemonListProps> = ({
  initialPokemons, //initial Pokémon list.
  totalCount, //total number of Pokemon available
  nextUrl, //URL for the next set of Pokemon (pagination).
}) => {
  const { search, setSearchLoading } = useSearch();
  //reference to track last Pokemon card to fetch next set of pokemon
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [pokemons, setPokemons] = useState<IPokemon[]>(initialPokemons);
  const [filteredPokemons, setFilteredPokemons] =
    useState<IPokemon[]>(initialPokemons);
  const [next, setNext] = useState<string>(nextUrl);
  const [loading, setLoading] = useState<boolean>(false);

  //fetch Pokemon data based on search input
  useEffect(() => {
    const fetchSearchPokemon = async () => {
      //if search is empty set filtered pokemon as initial pokemon data
      if (search.trim() === '') {
        setFilteredPokemons(pokemons);
        return;
      }
      //else find filtered pokemon by search
      try {
        setSearchLoading(true);

        const pokemon = await getPokemonByName(search.toLowerCase());
        setFilteredPokemons(pokemon ? [pokemon] : []);
      } catch (error) {
        console.error(error);
        setFilteredPokemons([]);
      } finally {
        setSearchLoading(false);
      }
    };

    fetchSearchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  //Load more Pokemon when scrolling to the bottom
  const loadMorePokemons = useCallback(async () => {
    //if there's no next URL or we've reached the end of the list or search is active, return
    if (!next || pokemons.length >= totalCount || search) return;

    setLoading(true);

    try {
      const { pokemons: newPokemons, next: newNext } =
        await getPokemonList(next);
      setPokemons((prev) => [...prev, ...newPokemons]);
      setFilteredPokemons((prev) => [...prev, ...newPokemons]);
      setNext(newNext ?? '');
    } finally {
      setLoading(false);
    }
  }, [next, pokemons.length, totalCount, search]);

  //callback to load more Pokemon when the last card is visible
  const lastPokemonRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && next) {
          loadMorePokemons();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, loadMorePokemons, next],
  );

  return (
    <>
      {/* Display Pokemon count */}
      <div className="flex justify-end mb-4">
        <div className="bg-gray-100 text-gray-800 rounded-full px-4 py-1 shadow-sm flex items-center space-x-2">
          <PokeballIcon className="w-5 h-5" />
          <span className="text-sm font-medium">
            Explored{' '}
            <span className="text-blue-600 font-semibold">
              {filteredPokemons.length}
            </span>{' '}
            out of{' '}
            <span className="text-blue-600 font-semibold">{totalCount}</span>{' '}
            Pokémon
          </span>
        </div>
      </div>

      {/* Pokemon grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 content-center justify-center w-full">
        {filteredPokemons?.map((pokemon, index) => (
          <div
            ref={index === filteredPokemons.length - 1 ? lastPokemonRef : null} // if index is equal to last element
            key={pokemon.id}
            className="transition-transform transform hover:scale-105 hover:shadow-md rounded-lg duration-300 mx-auto"
          >
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="flex justify-center items-center mt-6">
          <div className="animate-spin w-10 h-10 opacity-80">
            <PokeballIcon />
          </div>
          <p className="ml-3 text-gray-600 font-medium">Loading Pokémon...</p>
        </div>
      )}

      {/* Error message if no Pokemon found */}
      {!loading && filteredPokemons.length === 0 && (
        <ErrorDisplay error="No Pokémon found with that name" />
      )}

      {/* Message when all Pokemon are loaded */}
      {!loading &&
        pokemons.length >= totalCount &&
        filteredPokemons.length > 0 && (
          <p className="text-center mt-6 text-gray-700 text-base font-semibold">
            🎉 You&apos;ve caught &apos;em all! 🏆
          </p>
        )}
    </>
  );
};

export default PokemonList;
