'use client'; // Add this at the top of your file to mark it for client-side rendering

import { useState, useEffect } from 'react';
import { getPokemonDetail } from '@/utils/fetchPokemon';
import { useParams } from 'next/navigation';

interface IPokemonDetail {
  id: number;
  name: string;
  types: string[];
  stats: { name: string; value: number }[];
  abilities: string[];
  imageUrl: string;
}

const PokemonDetailPage = () => {
  const [pokemon, setPokemon] = useState<IPokemonDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return; // Don't do anything until ID is available

    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const data = await getPokemonDetail(Number(id)); // Fetch the Pokémon details based on the ID
        setPokemon({
          id: data.id,
          name: data.name,
          types: data.types.map(
            (type: { type: { name: string } }) => type.type.name,
          ),
          stats: data.stats.map(
            (stat: { stat: { name: string }; base_stat: number }) => ({
              name: stat.stat.name,
              value: stat.base_stat,
            }),
          ),
          abilities: data.abilities.map(
            (ability: { ability: { name: string } }) => ability.ability.name,
          ),
          imageUrl: data.sprites.front_default,
        });
      } catch (error) {
        setError('Failed to load Pokémon details' + error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]); // Re-run the effect whenever the ID changes

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-6">
        <div className="animate-spin w-10 h-10 opacity-80">
          {/* Add your loader here */}
        </div>
        <p className="ml-3 text-gray-600 font-medium">Loading Pokémon...</p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-6 text-red-500 text-base font-semibold">
        {error}
      </p>
    );
  }

  if (!pokemon) {
    return (
      <p className="text-center mt-6 text-gray-500 text-base font-semibold">
        No Pokémon found.
      </p>
    );
  }

  const { name, id: pokemonId, types, stats, abilities, imageUrl } = pokemon;

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row items-center space-x-6">
        {/* Pokémon Image */}
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-56 h-56 object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Pokémon Info */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 capitalize">
            {name}
          </h1>
          <div className="text-xl text-gray-600">
            <span className="font-semibold">#</span>
            <span>{pokemonId}</span>
          </div>

          {/* Pokémon Types */}
          <div className="flex space-x-3">
            {types.map((type) => (
              <span
                key={type}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Pokémon Stats */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Stats</h2>
        <div className="space-y-2 mt-3">
          {stats.map((stat) => (
            <div key={stat.name}>
              <span>{stat.name}: </span>
              <span>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pokémon Abilities */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Abilities</h2>
        <div className="space-y-2 mt-3">
          {abilities.map((ability) => (
            <div key={ability}>{ability}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
