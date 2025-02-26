import PokemonList from '@/components/PokemonList';
import { getPokemonList } from '@/utils/fetchPokemon';

const LIMIT: number = 30;
export default async function HomePage() {
  const pokemons = await getPokemonList(LIMIT); // Server-side fetch ✅
  return (
    <div className="container mx-auto px-4">
      {/* <h1 className="text-3xl font-bold text-center mb-6">Pokémon Explorer</h1> */}
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
