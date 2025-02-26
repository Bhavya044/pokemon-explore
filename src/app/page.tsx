import PokemonList from '@/components/PokemonList';
import { getPokemonList } from '@/utils/fetchPokemon';

export default async function HomePage() {
  const { count, pokemons, next } = await getPokemonList(); // Initial fetch with default limit
  return (
    <div className="container mx-auto px-4">
      <PokemonList
        initialPokemons={pokemons}
        totalCount={count}
        nextUrl={next}
      />
    </div>
  );
}
