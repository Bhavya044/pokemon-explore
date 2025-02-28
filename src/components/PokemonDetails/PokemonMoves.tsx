import { IPokemonMove } from '@/types/pokemon';
import React from 'react';

const PokemonMoves: React.FC<{ moves: IPokemonMove[] }> = ({ moves }) => {
  return (
    <div className=" gap-4 max-h-60 grid grid-cols-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-y-auto ">
      {moves?.map((move) => (
        <div
          key={move.name}
          className="shadow-md rounded-lg px-3 py-2 text-sm font-medium border-2 border-red-500 hover:bg-yellow-200 transform transition-all hover:scale-105 flex flex-col items-center gap-1"
        >
          <span className="font-semibold">{move.name}</span>
          <span className="text-xs text-gray-600">{move.version}</span>
        </div>
      ))}
    </div>
  );
};

export default PokemonMoves;
