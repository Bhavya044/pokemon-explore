import React from 'react';

interface IAbilitiesProps {
  ability: string;
}

export const PokemonAbilities: React.FC<IAbilitiesProps> = ({ ability }) => {
  return (
    <div className="text-sm text-gray-700">
      <span className="font-medium">{ability}</span>
    </div>
  );
};
