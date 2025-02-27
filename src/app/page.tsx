import PokemonList from '@/components/PokemonList';
import { getPokemonList } from '@/utils/fetchPokemon';

const HomePage = async () => {
  //fetch the initial list of Pokémon
  const { count, pokemons, next } = await getPokemonList();

  return (
    <div className="container mx-auto px-4">
      {/*render the Pokémon list with initial data */}
      <PokemonList
        initialPokemons={pokemons}
        totalCount={count}
        nextUrl={next}
      />
    </div>
  );
};

export default HomePage;
