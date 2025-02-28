import PokemonList from '@/components/PokemonList';
import ErrorDisplay from '@/components/UI/ErrorDisplay';
import { getPokemonList } from '@/utils/fetchPokemon';

const HomePage = async () => {
  //fetch the initial list of Pokémon
  const { totalCount, pokemons, next } = await getPokemonList();

  if (!pokemons?.length)
    return <ErrorDisplay error="Error while fetching Pokemon List" />;

  return (
    <div className="container px-4 mx-auto">
      <PokemonList
        list={pokemons}
        nextUrl={next ?? ''}
        totalCount={totalCount}
      />
    </div>
  );
};

export default HomePage;
