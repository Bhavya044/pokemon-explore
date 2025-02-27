import { PokemonDetail } from '@/components/PokemonDetails/PokemonDetail';
import { getPokemonDetail } from '@/utils/fetchPokemon';

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const pokemonData = await getPokemonDetail(Number(id));

  return (
    <div className="container mx-auto px-4">
      <PokemonDetail pokemon={pokemonData} />
    </div>
  );
};

export default Page;
