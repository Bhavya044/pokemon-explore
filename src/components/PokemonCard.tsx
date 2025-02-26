'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IPokemon } from '@/types/pokemon';

export default function PokemonCard({ pokemon }: { pokemon: IPokemon }) {
  //format the Pokémon ID to three digits as per the git repo
  const formattedId = pokemon.id.toString().padStart(3, '0');
  const imageUrl = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${formattedId}.png`;

  return (
    <Link href={`/pokemon/${pokemon.id}`} prefetch>
      <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
        <div className="relative w-24 h-24 mx-auto">
          <Image
            src={imageUrl}
            alt={pokemon.name}
            layout="fill"
            objectFit="contain"
            className="mx-auto"
          />
        </div>
        <h3 className="text-lg font-semibold text-center capitalize mt-2">
          {pokemon.name}
        </h3>
      </div>
    </Link>
  );
}
