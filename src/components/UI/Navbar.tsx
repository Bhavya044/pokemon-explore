'use client';

import { Press_Start_2P } from 'next/font/google';
import SearchBar from './SearchBar';
import Link from 'next/link';
import { useSearch } from '@/context/SearchContext';

const pressStart = Press_Start_2P({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
  const { setSearch, setSearchError } = useSearch();

  //clear search when navigating to home
  const handleHomeClick = () => {
    setSearch?.(''); // Clear search input
    setSearchError?.(''); // Clear error message
  };

  return (
    <nav className="bg-red-500 py-2 shadow-md sticky top-0 z-50 border-b-2 border-yellow-400">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
        <div className="flex items-center gap-3">
          <Link
            scroll={true}
            href={'/'}
            onClick={handleHomeClick}
            className={`${pressStart.className} text-2xl text-white tracking-wide drop-shadow-lg`}
          >
            Pokémon Explorer
          </Link>
        </div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
