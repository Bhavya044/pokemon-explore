'use client';

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
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-3xl shadow-lg border border-gray-300 hover:border-blue-400 transition-all duration-300 ease-out">
        <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-50 to-purple-50 shadow-inner overflow-hidden border border-gray-200">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
              <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <Image
            src={imageUrl}
            alt={pokemon.name}
            layout="fill"
            objectFit="contain"
            className={`mx-auto transition-transform duration-300 ease-in-out group-hover:scale-110 hover:scale-110 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <h3 className="text-xl font-semibold text-center capitalize mt-4 text-gray-800 tracking-wide">
          {pokemon.name}
        </h3>
        <p className="text-center text-sm text-gray-500 mt-1 font-medium bg-gray-100 rounded-full px-3 py-1 w-fit mx-auto shadow-sm border border-gray-200">
          #{formattedId}
        </p>
      </div>
    </Link>
  );
}
