'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextProps {
  search: string; //search string
  setSearch?: (search: string) => void;
  searchLoading: boolean; //boolean indicator to show if search is in progress
  setSearchLoading?: (loading: boolean) => void;
  searchError: string | null;
  setSearchError?: (error: string | null) => void;
}

const initialContextValues: SearchContextProps = {
  search: '',
  searchError: '',
  searchLoading: false,
};

const SearchContext = createContext<SearchContextProps>(initialContextValues);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

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
  return context;
};
