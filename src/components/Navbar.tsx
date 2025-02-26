'use client';

import { Press_Start_2P } from 'next/font/google'; // Pokémon-inspired pixel font

const pressStart = Press_Start_2P({ subsets: ['latin'], weight: '400' });

export const Navbar = () => {
  return (
    <div
      className={`${pressStart.className} bg-red-500 border-b-4 border-yellow-400 py-3 mb-8 sticky top-0 z-50 shadow-lg`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-xl sm:text-2xl text-white whitespace-nowrap">
          🔥 Pokémon Explorer 🔥
        </h1>
        {/* Search bar in the navbar */}
        <div className="w-full sm:w-1/2">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>
      <div className="container mx-auto text-center">
        <h1 className="text-2xl text-white">🔥 Pokémon Explorer 🔥</h1>
      </div>
    </div>
  );
};
