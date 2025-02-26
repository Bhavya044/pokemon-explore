'use client';

import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import SearchBar from './SearchBar';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async (url: string) => {
    setLoading(true);
    const res = await fetch(url);
    const data: PokemonResponse = await res.json();
    setPokemons(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons('https://pokeapi.co/api/v2/pokemon?offset=0&limit=30');
  }, []);

  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {/* <SearchBar search={search} setSearch={setSearch} /> */}
      {loading ? (
        <p className="text-center">Loading Pokémons...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.url} pokemon={pokemon} />
          ))}
        </div>
      )}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => prevPage && fetchPokemons(prevPage)}
          disabled={!prevPage}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => nextPage && fetchPokemons(nextPage)}
          disabled={!nextPage}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
