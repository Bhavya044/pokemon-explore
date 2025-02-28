import { IPokemonMove } from '@/types/pokemon';
import React from 'react';

const PokemonMoves: React.FC<{ moves: IPokemonMove[] }> = ({ moves }) => {
  return (
    <div className="p-3 grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5  sm:grid-cols-3 gap-3  max-h-72 overflow-y-auto  rounded-lg ">
      {moves?.map((move) => (
        <div
          key={move.name}
          className="shadow-md rounded-lg px-2 py-1 text-sm  border border-gray-300 bg-gray-100 flex flex-col items-center gap-2"
        >
          <span className="font-semibold text-gray-800 text-md">
            {move.name}
          </span>
          <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded-full">
            {move.version}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PokemonMoves;
