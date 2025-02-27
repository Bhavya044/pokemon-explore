'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { getPokemonList, getPokemonByName } from '@/utils/fetchPokemon';
import PokeballIcon from './icons/PokeballIcon';
import { IPokemon } from '@/types/pokemon';
import { useSearch } from '@/context/SearchContext';
import ErrorDisplay from './UI/ErrorDisplay';

interface IPokemonListProps {
  initialPokemons: IPokemon[];
  totalCount: number;
  nextUrl: string | null;
}

const PokemonList: React.FC<IPokemonListProps> = ({
  initialPokemons,
  totalCount,
  nextUrl,
}) => {
  const { search, setSearchLoading, setSearch } = useSearch();
  const [pokemons, setPokemons] = useState<IPokemon[]>(initialPokemons);
  const [filteredPokemons, setFilteredPokemons] =
    useState<IPokemon[]>(initialPokemons);
  const [next, setNext] = useState<string | null>(nextUrl);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const fetchSearchPokemon = async () => {
      if (search.trim() === '') {
        setFilteredPokemons(pokemons);
        return;
      }
      try {
        setSearchLoading(true);
        const pokemon = await getPokemonByName(search.toLowerCase());

        setFilteredPokemons(pokemon ? [pokemon] : []);
        setSearchLoading(false);
      } catch (error) {
        console.error(error);
        setFilteredPokemons([]);
      } finally {
        setSearchLoading(false);
      }
    };
    fetchSearchPokemon();
  }, [search, pokemons, setSearchLoading]);

  const loadMorePokemons = useCallback(async () => {
    if (!next || pokemons.length >= totalCount || search) return;
    setLoading(true);
    const { pokemons: newPokemons, next: newNext } = await getPokemonList(next);
    setPokemons((prev) => [...prev, ...newPokemons]);
    setFilteredPokemons((prev) => [...prev, ...newPokemons]);
    setNext(newNext);
    setLoading(false);
  }, [next, pokemons.length, totalCount, search]);

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
            Pokemon
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 content-center justify-center w-full">
        {filteredPokemons.map((pokemon, index) => (
          <div
            ref={index === filteredPokemons.length - 1 ? lastPokemonRef : null}
            key={pokemon.id}
            className="transition-transform transform hover:scale-105  hover:shadow-md rounded-lg duration-300 mx-auto"
          >
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center mt-6">
          <div className="animate-spin w-10 h-10 opacity-80">
            <PokeballIcon />
          </div>
          <p className="ml-3 text-gray-600 font-medium">Loading Pokémon...</p>
        </div>
      )}
      {!loading && filteredPokemons.length === 0 && (
        <ErrorDisplay error={'No Pokemon found with that name'} />
      )}

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
