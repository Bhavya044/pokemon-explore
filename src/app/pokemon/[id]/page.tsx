import PokemonDetailPage from '@/components/PokemonDetails/PokemonDetailPage';
import { getPokemonDetail } from '@/utils/fetchPokemon';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Fetch Pokémon data based on the provided ID from params
  const { id } = await params;
  const pokemonData = await getPokemonDetail(Number(id));

  return (
    <div className="container mx-auto px-4">
      <PokemonDetailPage pokemon={pokemonData} />
    </div>
  );
};

export default Page;
