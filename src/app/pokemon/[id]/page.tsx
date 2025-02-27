import { getPokemonDetail } from '@/utils/fetchPokemon';
import PokemonDetail from '@/components/PokemonDetails/PokemonDetail';

// Main page component for rendering Pokémon details
export default async function Page({ params }: { params: { id: string } }) {
  const pokemonData = await getPokemonDetail(Number(params.id));
  return (
    <div className="container mx-auto px-4">
      <PokemonDetail pokemon={pokemonData} />
    </div>
  );
}
