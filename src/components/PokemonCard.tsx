import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { IPokemon } from '@/types/pokemon';

export default function PokemonCard({ pokemon }: { pokemon: IPokemon }) {
  const [isLoading, setIsLoading] = useState(true);
  const formattedId = pokemon.id.toString().padStart(3, '0');
  const imageUrl = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${formattedId}.png`;

  return (
    <Link href={`/pokemon/${pokemon.id}`} prefetch>
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-300 hover:border-blue-400 transition-all duration-300 ease-out">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto overflow-hidden ">
          <Image
            src="/blue-splash.png"
            alt="Blue Splash Background"
            layout="fill"
            objectFit="cover"
            className="opacity-80 z-0"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 animate-pulse rounded-full">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-full" />
              </div>
            )}
            <div className="relative w-[85%] h-[85%] sm:w-[90%] sm:h-[90%] rounded-full">
              <Image
                src={imageUrl}
                alt={pokemon.name}
                layout="fill"
                objectFit="contain"
                className={`transition-transform duration-300 ease-in-out group-hover:scale-105 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>

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
