import React from 'react';

import { IPokemonEvolution } from '@/types/pokemon';
import ForwardArrowIcon from '../icons/ForwardArrow';
import { SplashBg } from '../UI/SplashBg';

export const PokemonEvolution: React.FC<{
  evolutionChain: IPokemonEvolution[];
}> = ({ evolutionChain }) => {
  const renderEvolution = (evolution: IPokemonEvolution, index: number) => {
    return (
      <div
        key={`${evolution?.name}-${index ?? 0}`}
        className="flex md:gap-6 items-center space-y-2 sm:space-y-4 flex-col sm:flex-row md:space-x-6 sm:justify-center"
      >
        {/* Pokemon Image*/}
        <div className="flex flex-col items-center">
          <SplashBg
            pokemonName={evolution?.name}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.url.split('/')[6]}.png`}
          />
          <span className="font-semibold text-gray-800 capitalize">
            {evolution?.name}
          </span>
        </div>
        {/* hide arrow icon for last index */}
        {index !== evolutionChain?.length - 1 && (
          <ForwardArrowIcon
            height={30}
            width={30}
            className="transform rotate-90 sm:transform-none block"
          />
        )}
        {evolution?.evolves_to?.length > 0 &&
          evolution?.evolves_to?.map((evolve, idx) =>
            renderEvolution(evolve, idx),
          )}
      </div>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-8 justify-center">
      {evolutionChain.map((evolution, idx) => renderEvolution(evolution, idx))}
    </div>
  );
};
