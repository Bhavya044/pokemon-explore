'use client';

import { useRouter } from 'next/navigation';
import { PokemonEvolution } from './PokemonEvolution';
import ForwardArrowIcon from '../icons/ForwardArrow';
import { useSearch } from '@/context/SearchContext';
import { IPokemonDetail } from '@/types/pokemon';
import { PokemonInfo } from './PokemonInfo';
import { PokemonAbilities } from './PokemonAbilities';
import { PokemonMoves } from './PokemonMoves';
import { PokemonStats } from './PokemonStatBar';
import { Card } from '../UI/Card';
import { ErrorDisplay } from '../UI/ErrorDisplay';

interface PokemonDetailProps {
  pokemon: IPokemonDetail;
}

export const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
  const router = useRouter();
  const { searchError } = useSearch();

  //navigate to previous or next Pokémon by ID
  const handleNavigation = (newId: number) => {
    router.push(`/pokemon/${newId}`);
  };

  //if no pokemon is found then show error message
  return searchError ? (
    <ErrorDisplay error={searchError} />
  ) : (
    <div className="relative max-w-6xl mx-auto p-8 bg-white backdrop-blur-lg space-y-6 shadow-xl rounded-3xl border border-gray-300">
      {/* Navigation Buttons */}
      <div className="flex w-full justify-between items-center">
        {/* Previous Button */}
        {pokemon.id > 1 && (
          <button
            onClick={() => handleNavigation(pokemon.id - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full shadow-lg text-sm transition-all flex items-center gap-2"
          >
            <ForwardArrowIcon
              fill="white"
              height={10}
              className="transform rotate-180"
              width={10}
            />
            Prev #{pokemon.id - 1}
          </button>
        )}

        {/* Next Button */}
        <button
          onClick={() => handleNavigation(pokemon.id + 1)}
          className="bg-black hover:bg-blue-600  text-white px-3 py-1 rounded-full shadow-lg text-sm transition-all flex items-center gap-2"
        >
          Next #{pokemon.id + 1}
          <ForwardArrowIcon fill="white" height={10} width={10} />
        </button>
      </div>

      {/* Info Section */}
      <div className="flex flex-col items-center p-6 bg-white justify-center w-full rounded-2xl shadow-lg">
        <PokemonInfo
          height={pokemon.height}
          name={pokemon.name}
          types={pokemon.types}
          weight={pokemon.weight}
          id={pokemon.id}
          imageUrl={pokemon?.imageUrl ?? ''}
          text={pokemon?.flavorText ?? ''}
          captureRate={pokemon.captureRate ?? 0}
        />
      </div>

      {/* Stats and Abilities Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Base Stats */}
        <div className="col-span-2 bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Base Stats
          </h3>
          <PokemonStats stats={pokemon.stats} />
        </div>

        {/* Abilities */}
        <Card classProp="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Abilities
          </h3>
          <PokemonAbilities abilities={pokemon.abilities} />
        </Card>
      </div>

      {/* Moves Section */}
      <Card>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Moves</h3>
        <PokemonMoves moves={pokemon.moves} />
      </Card>

      {/* Evolution Chain Section */}
      <Card>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Evolution Chain
        </h3>
        <PokemonEvolution evolutionChain={pokemon.evolutionChain} />
      </Card>
    </div>
  );
};
