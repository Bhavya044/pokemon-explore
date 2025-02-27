import { PokemonDetail } from '@/components/PokemonDetails/PokemonDetail';
import { getPokemonDetail } from '@/utils/fetchPokemon';

const Page: React.FC<{ params: { id: string } }> = async ({ params }) => {
  //fetch Pokémon data based on the provided ID from params
  const pokemonData = await getPokemonDetail(Number(params.id));

  return (
    <div className="container mx-auto px-4">
      <PokemonDetail pokemon={pokemonData} />
    </div>
  );
};

export default Page;
