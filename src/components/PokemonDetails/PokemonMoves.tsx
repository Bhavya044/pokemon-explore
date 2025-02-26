import React from 'react';

interface IMoveProps {
  move: string;
}

export const PokemonMoves: React.FC<IMoveProps> = ({ move }) => {
  return (
    <div className="text-sm text-gray-700">
      <span className="font-medium">{move}</span>
    </div>
  );
};
