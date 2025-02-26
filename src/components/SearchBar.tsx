'use client';

import SearchIcon from './icons/SearchIcon';

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="relative w-full sm:w-96">
      <input
        type="text"
        placeholder="Search Pokemon by name..."
        className="w-full p-2 pl-12 text-gray-600 rounded-full shadow-md border-2 border-yellow-400  focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-red-500 transition-all duration-200 placeholder-gray-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <SearchIcon width={20} height={20} />
      </div>
    </div>
  );
}
