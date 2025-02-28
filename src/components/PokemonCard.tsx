import Link from 'next/link';
import { useState } from 'react';
import { IPokemon } from '@/types/pokemon';
import SplashBg from './UI/SplashBg';

interface PokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [isLoading, setIsLoading] = useState(true);

  //format Pokemon ID with leading zeros (e.g., 001, 025, 150)
  const formattedId = pokemon.id.toString().padStart(3, '0');

  //construct the Pokemon image URL
  const imageUrl = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${formattedId}.png`;

  return (
    <Link scroll={false} href={`/pokemon/${pokemon.id}`} prefetch>
      <div className="bg-white transition hover:-translate-y-0.5 hover:scale-110 ease-in-out p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-300 hover:border-blue-500  duration-300 ">
        {/* Background with Pokemon image */}
        <SplashBg
          imageUrl={imageUrl}
          isLoading={isLoading}
          pokemonName={pokemon.name}
          setIsLoading={setIsLoading}
        />

        {/* Pokemon Name */}
        <h3 className="text-lg font-semibold  capitalize mt-4 text-gray-800 tracking-wide  text-center break-words max-w-full">
          {pokemon.name}
        </h3>

        {/* Pokemon ID */}
        <p className="text-center  text-gray-500 mt-1 font-medium bg-gray-100 shadow-sm border border-gray-200 rounded-full px-2 text-xs sm:text-sm md:text-base sm:px-3 md:px-4 py-1 w-fit mx-auto ">
          #{formattedId}
        </p>
      </div>
    </Link>
  );
};

export default PokemonCard;
