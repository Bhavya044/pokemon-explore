'use client';

import { Press_Start_2P } from 'next/font/google';
import { useState } from 'react';
import SearchBar from './SearchBar';

const pressStart = Press_Start_2P({ subsets: ['latin'], weight: '400' });

export const Navbar = () => {
  const [search, setSearch] = useState('');
  return (
    <nav
      className={`bg-red-500 py-2 shadow-md sticky top-0 z-50 border-b-2 border-yellow-400`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
        <h1
          className={`${pressStart.className} text-2xl text-white tracking-wide drop-shadow-lg`}
        >
          Pokémon Explorer
        </h1>
        <SearchBar search={search} setSearch={setSearch} />
      </div>
    </nav>
  );
};
