import { IPokemon, IPokemonResponseOriginal } from '@/types/pokemon';

export async function getPokemonList(url?: string) {
  const fetchUrl = url ?? 'https://pokeapi.co/api/v2/pokemon?limit=10';
  const res = await fetch(fetchUrl);
  const data = await res.json();

  const seenIds = new Set();
  const uniquePokemons = data?.results
    ?.map((pokemon: IPokemonResponseOriginal) => ({
      ...pokemon,
      id: pokemon.url.split('/').filter(Boolean).pop(), // Extract ID
    }))
    ?.filter((pokemon: IPokemon) => {
      if (seenIds.has(pokemon.id)) return false;
      seenIds.add(pokemon.id);
      return true;
    });

  return {
    count: data.count,
    next: data.next,
    pokemons: uniquePokemons,
  };
}

export async function getPokemonDetails(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.json();
}

export const getPokemonByName = async (
  name: string,
): Promise<IPokemon | null> => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching Pokémon by name:`, error);
    return null;
  }
};
