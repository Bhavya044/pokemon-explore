'use client';

import SearchIcon from './icons/SearchIcon';

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="🔍 Search Pokémon by name..."
        className="w-full p-4 pl-12 text-lg rounded-full shadow-lg border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white placeholder-gray-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <SearchIcon width={24} height={24} />
      </div>
    </div>
  );
}
