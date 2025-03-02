'use client';

import { IPokemonDetail } from '@/types/pokemon';
import PokemonAbilities from './PokemonAbilities';
import PokemonInfo from './PokemonInfo';
import PokemonStats from './PokemonStatBar';
import PokemonMoves from './PokemonMoves';
import PokemonEvolution from './PokemonEvolution';
import Card from '../UI/Card';
import NavigationButton from '../UI/NavigationButton';

interface PokemonDetailProps {
  pokemon: IPokemonDetail;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
  return (
    <Card classProp="p-4 border border-red-500 space-y-6">
      <div
        className={`flex w-full items-center ${pokemon?.id > 1 ? 'justify-between' : 'justify-end'}`}
      >
        {pokemon?.id > 1 && (
          <NavigationButton direction="Prev" id={pokemon?.id - 1} />
        )}

        <NavigationButton direction="Next" id={pokemon?.id + 1} />
      </div>

      {/* Info Section */}
      <Card>
        <PokemonInfo
          height={pokemon.height}
          name={pokemon.name}
          types={pokemon.types}
          weight={pokemon.weight}
          id={pokemon.id}
          imageUrl={pokemon.imageUrl ?? ''}
          text={pokemon.flavorText ?? ''}
          captureRate={pokemon.captureRate ?? 0}
        />
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Base Stats */}
        <Card classProp="col-span-3 sm:col-span-2 ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Base Stats
          </h3>
          <PokemonStats stats={pokemon.stats} />
        </Card>

        {/* Abilities */}
        <Card classProp="col-span-3 sm:col-span-2 lg:col-span-1">
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
    </Card>
  );
};

export default PokemonDetail;
