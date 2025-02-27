'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextProps {
  search: string; //search string
  setSearch: (search: string) => void;
  searchLoading: boolean; //boolean indicator
  setSearchLoading: (loading: boolean) => void;
  searchError: string | null;
  setSearchError: (error: string | null) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null); // New error state

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        searchLoading,
        setSearchLoading,
        searchError,
        setSearchError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
