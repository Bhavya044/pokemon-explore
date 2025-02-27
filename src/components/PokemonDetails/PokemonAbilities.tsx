import React from 'react';
import { IPokemonAbility } from '@/types/pokemon';

export const PokemonAbilities: React.FC<{ abilities: IPokemonAbility[] }> = ({
  abilities,
}) => {
  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {abilities.map((ability, index) => (
        <span
          key={`${ability.name}${index}`}
          className="bg-yellow-300 text-yellow-800 px-4 py-2 rounded-xl text-sm font-semibold shadow"
        >
          {/* Ability name */}
          <span className="font-bold">{ability?.name}</span>

          {/* Version information */}
          <span className="text-yellow-700 ml-2 text-xs">
            - {ability?.version}
          </span>
        </span>
      ))}
    </div>
  );
};
