import Link from 'next/link';
import { useState } from 'react';
import { IPokemon } from '@/types/pokemon';
import SplashBg from './UI/SplashBg';

export default function PokemonCard({ pokemon }: { pokemon: IPokemon }) {
  const [isLoading, setIsLoading] = useState(true);
  const formattedId = pokemon.id.toString().padStart(3, '0');
  const imageUrl = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${formattedId}.png`;

  return (
    <Link scroll={false} href={`/pokemon/${pokemon.id}`} prefetch>
      <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-300 hover:border-blue-400 transition-all duration-300 ease-out">
        <SplashBg
          imageUrl={imageUrl}
          isLoading={isLoading}
          pokemonName={pokemon?.name}
          setIsLoading={setIsLoading}
        />

        <h3 className="text-lg font-semibold text-center capitalize mt-4 text-gray-800 tracking-wide break-words max-w-full">
          {pokemon.name}
        </h3>
        <p className="text-center text-xs sm:text-sm md:text-base text-gray-500 mt-1 font-medium bg-gray-100 rounded-full px-2 sm:px-3 md:px-4 py-1 w-fit mx-auto shadow-sm border border-gray-200">
          #{formattedId}
        </p>
      </div>
    </Link>
  );
}
