'use client';

import PokemonDetail from '@/components/PokemonDetails/PokemonDetail';
import ErrorDisplay from '../UI/ErrorDisplay';
import { useSearch } from '@/context/SearchContext';
import { IPokemonDetail } from '@/types/pokemon';

const PokemonDetailPage = ({ pokemon }: { pokemon: IPokemonDetail | null }) => {
  const { searchError } = useSearch();

  if (!pokemon && !searchError) {
    return (
      <ErrorDisplay error="Pokemon not found or there was some error getting Pokemon data!" />
    );
  }
  if (searchError) {
    return <ErrorDisplay error={searchError} />;
  }

  return (
    <div className="container mx-auto px-4">
      {pokemon ? <PokemonDetail pokemon={pokemon} /> : null}
    </div>
  );
};

export default PokemonDetailPage;
