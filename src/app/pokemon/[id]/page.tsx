import { PokemonDetail } from '@/components/PokemonDetails/PokemonDetail';
import { getPokemonDetail } from '@/utils/fetchPokemon';

const Page = async ({ params }: { params: { id: string } }) => {
  // Fetch Pokémon data based on the provided ID from params
  const { id } = await params;
  const pokemonData = await getPokemonDetail(Number(id));

  return (
    <div className="container mx-auto px-4">
      <PokemonDetail pokemon={pokemonData} />
    </div>
  );
};

export default Page;
