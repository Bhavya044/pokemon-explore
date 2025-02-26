export type Pokemon = {
  name: string;
  id: number;
  image: string;
  abilities?: { ability: { name: string } }[];
  types?: { type: { name: string } }[];
};

export type IconProps = {
  className?: string; // For Tailwind styling
  width?: number | string;
  height?: number | string;
  fill?: string;
};
