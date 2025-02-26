'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Pokemon } from '@/types/pokemon';

export default function PokemonCard({ pokemon }: { pokemon: any }) {
  return (
    <Link href={`/pokemon/${pokemon.id}`} prefetch>
      <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
        {/* <Image
          src={"image.com"}
          alt={pokemon.name}
          width={100}
          height={100}
          className="mx-auto"
        /> */}
        <h3 className="text-lg font-semibold text-center capitalize mt-2">
          {pokemon.name}
        </h3>
      </div>
    </Link>
  );
}
