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

export const getPokemonDetail = async (id: number) => {
  // Fetch Pokémon details
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  // Fetch Pokémon species data to get evolution chain URL
  const speciesRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`,
  );
  const speciesData = await speciesRes.json();

  // Fetch evolution chain data using the URL from species data
  const evolutionRes = await fetch(speciesData.evolution_chain.url);
  const evolutionData = await evolutionRes.json();

  // Process and return the complete Pokémon data with evolution chain
  return {
    id: data.id,
    name: data.name,
    flavorText: speciesData?.flavor_text_entries?.[0]?.flavor_text,
    captureRate: speciesData?.capture_rate,
    types: data.types.map((type: { type: { name: string } }) => type.type.name),
    stats: data.stats.map(
      (stat: { stat: { name: string }; base_stat: number }) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      }),
    ),
    abilities: data.abilities.map(
      (ability: { ability: { name: string }; is_hidden: boolean }) => ({
        name: ability.ability.name,
        version: ability.is_hidden ? 'Hidden' : 'Normal',
      }),
    ),
    moves: data.moves.map(
      (move: { move: { name: string }; version_group_details: any[] }) => ({
        name: move.move.name,
        version: move.version_group_details[0].move_learn_method.name,
      }),
    ),
    height: data.height,
    weight: data.weight,
    imageUrl: data.sprites?.other['official-artwork']?.front_default,
    evolutionChain: evolutionData.chain, // Include evolution chain data
  };
};
