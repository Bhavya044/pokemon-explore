'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextProps {
  search: string;
  setSearch: (search: string) => void;
  searchLoading: boolean;
  setSearchLoading: (loading: boolean) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, searchLoading, setSearchLoading }}
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
