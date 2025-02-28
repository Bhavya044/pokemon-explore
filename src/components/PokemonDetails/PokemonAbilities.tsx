import React from 'react';
import { IPokemonAbility } from '@/types/pokemon';

type Props = {
  abilities: IPokemonAbility[];
};

const PokemonAbilities: React.FC<Props> = ({ abilities }) => {
  if (!abilities?.length) return null;

  return (
    <div className=" mt-3 flex flex-wrap gap-3">
      {abilities?.map(({ name, version }, index) => {
        const abilityLabel = `${name} - ${version}`;
        return (
          <span
            key={index}
            className="bg-yellow-300 text-yellow-800 px-4 py-2 rounded-xl text-sm font-semibold shadow"
          >
            {abilityLabel}
          </span>
        );
      })}
    </div>
  );
};

export default PokemonAbilities;
