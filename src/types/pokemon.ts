//base Pokemon interface for common properties
interface IBasePokemon {
  name: string;
  id: number;
}

//basic Pokemon data structure for listing
export interface IPokemon extends IBasePokemon {
  image: string;
  abilities?: IPokemonAbilityBasic[];
  types?: IPokemonType[];
}

//response structure for fetching all Pokémon
export interface IPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonListItem[];
}

export interface IPokemonResponseModified {
  totalCount: number;
  next: string | null;
  previous: string | null;
  pokemons: IPokemonListItem[];
}

//single Pokemon entry from a list
export interface IPokemonListItem extends IBasePokemon {
  url: string;
  image: string;
}

// pokemon Type structure
export interface IPokemonType {
  name: string;
}

//basic Pokemon ability structure used in lists
export interface IPokemonAbilityBasic {
  name: string;
}

//detailed Pokemon Ability with normal/hidden variants
export interface IPokemonAbility extends IPokemonAbilityBasic {
  version: 'Hidden' | 'Normal';
}

//stat structure
export interface IPokemonStat {
  name: string;
  value: number;
}

// Move structure
export interface IPokemonMove {
  name: string;
  version: string;
}

//evolution details structure
export interface IPokemonEvolution {
  name: string;
  url: string;
  evolves_to: IPokemonEvolution[];
}

//Full Pokemon detail response -  modified
export interface IPokemonDetail extends IBasePokemon {
  flavorText?: string;
  captureRate?: number;
  types: string[];
  stats: IPokemonStat[];
  abilities: IPokemonAbility[];
  moves: IPokemonMove[];
  height: number;
  weight: number;
  imageUrl?: string;
  evolutionChain: IPokemonEvolution[];
}

//Pokemon detail response -  original
export interface IPokemonDetailsOriginal {
  id: number;
  name: string;
  height: number;
  weight: number;
  flavor_text_entries: { flavor_text: string }[];
  capture_rate: number;
  evolution_chain: { url: string };
  sprites: { other: { 'official-artwork': { front_default: string } } };
  stats: { stat: { name: string }; base_stat: number }[];
  types: { type: { name: string } }[];
  abilities: { ability: { name: string }; is_hidden: boolean }[];
  moves: {
    move: { name: string };
    version_group_details: { move_learn_method: { name: string } }[];
  }[];
}
