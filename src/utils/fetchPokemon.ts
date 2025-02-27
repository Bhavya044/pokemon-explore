import {
  IPokemon,
  IPokemonListItem,
  IPokemonResponse,
  IPokemonDetail,
  IPokemonEvolution,
  IPokemonStat,
  IPokemonAbility,
  IPokemonMove,
  IPokemonDetailsOriginal,
  IPokemonResponseModified,
} from '@/types/pokemon';

//fetch list ofPokemon with pagination support
export async function getPokemonList(
  url?: string,
): Promise<IPokemonResponseModified> {
  //url is link to get the next set of Pokemon
  const fetchUrl = url ?? 'https://pokeapi.co/api/v2/pokemon?limit=10';
  const res = await fetch(fetchUrl);
  const data: IPokemonResponse = await res.json();

  //ensure that only unique pokemon values are returned
  const seenIds = new Set<number>();
  const uniquePokemons: IPokemonListItem[] = data.results
    .map((pokemon) => ({
      name: pokemon.name,
      id: Number(pokemon.url.split('/').filter(Boolean).pop()), //extract ID from the end of the url
      url: pokemon.url,
      image: '',
    }))
    .filter((pokemon) => {
      if (seenIds.has(pokemon.id)) return false;
      seenIds.add(pokemon.id);
      return true;
    });

  return {
    count: data.count,
    next: data.next,
    previous: data.previous,
    pokemons: uniquePokemons,
  };
}

//Fetch Pokemon details by name
export const getPokemonByName = async (
  name: string,
): Promise<IPokemon | null> => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) return null;

    const data: IPokemonDetailsOriginal = await res.json();

    return {
      name: data.name,
      id: data.id,
      image: data.sprites.other['official-artwork'].front_default,
      abilities: data.abilities.map((ability) => ({
        name: ability.ability.name,
      })),
      types: data.types.map((type) => ({
        name: type.type.name,
      })),
    };
  } catch (error) {
    console.error(`Error fetching Pokemon by name:`, error);
    return null;
  }
};

//fetch Pokemon details by ID
export const getPokemonDetail = async (id: number): Promise<IPokemonDetail> => {
  //Fetch Pokemon details
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data: IPokemonDetailsOriginal = await res.json();

  // Fetch Pokemon species data
  const speciesRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`,
  );
  const speciesData: IPokemonDetailsOriginal = await speciesRes.json();

  //Fetch evolution chain data by chain url
  const evolutionRes = await fetch(speciesData?.evolution_chain?.url);
  const evolutionData: {
    chain: {
      species: { name: string; url: string };
      evolves_to: { [key: string]: string }[];
    };
  } = await evolutionRes.json();

  //parse evolution chain
  const parseEvolutionChain = (evolution: {
    species: { name: string; url: string };
    evolves_to: unknown[];
  }): IPokemonEvolution[] => {
    const chain: IPokemonEvolution[] = [];

    //start with the given evolution node
    let current: {
      species: { name: string; url: string };
      evolves_to: unknown[];
    } | null = evolution;

    //traverse the evolution chain
    while (current) {
      //add the current evolution to the chain
      chain.push({
        name: current.species.name,
        url: current.species.url,
        evolves_to: [],
      });

      // Move to the next evolution stage (if available)
      current =
        current.evolves_to.length > 0
          ? (current.evolves_to[0] as {
              species: { name: string; url: string };
              evolves_to: unknown[];
            })
          : null;
    }

    return chain;
  };

  return {
    id: data.id,
    name: data.name,
    flavorText: speciesData.flavor_text_entries?.[0]?.flavor_text,
    captureRate: speciesData.capture_rate,
    types: data.types.map((type) => type.type.name),
    stats: data.stats.map<IPokemonStat>((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    abilities: data.abilities.map<IPokemonAbility>((ability) => ({
      name: ability.ability.name,
      version: ability.is_hidden ? 'Hidden' : 'Normal',
    })),
    moves: data.moves.map<IPokemonMove>((move) => ({
      name: move.move.name,
      version: move.version_group_details[0].move_learn_method.name,
    })),
    height: data.height,
    weight: data.weight,
    imageUrl: data.sprites.other['official-artwork'].front_default,
    evolutionChain: parseEvolutionChain(evolutionData.chain),
  };
};
