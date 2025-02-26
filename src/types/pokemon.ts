export type Pokemon = {
  name: string;
  id: number;
  image: string;
  abilities?: { ability: { name: string } }[];
  types?: { type: { name: string } }[];
};

export type IconProps = {
  className?: string; //For Tailwind styling
  width?: number | string;
  height?: number | string;
  fill?: string;
};

export interface IPokemon {
  name: string;
  id: string;
}

export interface IPokemonResponseOriginal extends IPokemon {
  url: string;
}
export interface IGetPokemonResponseFull {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonResponseOriginal[];
}
