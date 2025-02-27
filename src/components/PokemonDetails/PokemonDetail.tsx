import PokemonStats from './PokemonStatBar';
import PokemonAbilities from './PokemonAbilities';
import PokemonMoves from './PokemonMoves';
import { PokemonEvolution } from './PokemonEvolution';
import PokemonInfo from './PokemonInfo';
import Card from '../UI/Card';

const PokemonDetail = ({ pokemon }: { pokemon: any }) => {
  console.log('pokemon', pokemon);
  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br space-y-6 from-blue-50 to-indigo-100 shadow-xl rounded-3xl border border-gray-300">
      <div>
        <div className="flex flex-col items-center p-6 bg-white justify-center w-full rounded-2xl shadow-lg">
          <PokemonInfo
            height={pokemon.height}
            name={pokemon.name}
            types={pokemon.types}
            weight={pokemon.weight}
            id={pokemon.id}
            imageUrl={pokemon.imageUrl}
            text={pokemon.flavorText}
            captureRate={pokemon.captureRate}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Base Stats Section (Span 2 columns) */}
        <div className="col-span-2 bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Base Stats
          </h3>
          <PokemonStats stats={pokemon.stats} />
        </div>

        {/* Abilities Section */}
        <Card classProp="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Abilities
          </h3>
          <PokemonAbilities abilities={pokemon.abilities} />
        </Card>
      </div>

      <Card classProp="col-span-1 sm:col-span-2 lg:col-span-1">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Moves</h3>
        <PokemonMoves moves={pokemon?.moves} />
      </Card>

      <Card>
        {/* Evolution Chain Section */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Evolution Chain
        </h3>
        <PokemonEvolution evolutionChain={pokemon.evolutionChain} />
      </Card>
    </div>
  );
};

export default PokemonDetail;
