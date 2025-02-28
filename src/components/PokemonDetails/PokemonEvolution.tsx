import React from 'react';

import { IPokemonEvolution } from '@/types/pokemon';
import ForwardArrowIcon from '../icons/ForwardArrow';
import SplashBg from '../UI/SplashBg';

const PokemonEvolution: React.FC<{
  evolutionChain: IPokemonEvolution[];
}> = ({ evolutionChain }) => {
  //getting image from external source as image is not directly available in the api
  const getPokemonImageUrl = (url: string) => {
    const id = url.split('/')[6];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  const renderEvolution = (evolution: IPokemonEvolution, index: number) => {
    return (
      <div
        key={`${evolution?.name}-${index ?? 0}`}
        className="flex md:gap-5 items-center space-y-3 sm:space-y-5 flex-col sm:flex-row md:space-x-5 sm:justify-center"
      >
        {/* Pokemon Image*/}
        <div className="flex flex-col items-center">
          <SplashBg
            pokemonName={evolution?.name}
            imageUrl={getPokemonImageUrl(evolution?.url)}
          />
          <span className="font-semibold text-gray-800 capitalize">
            {evolution?.name}
          </span>
        </div>
        {/*hide arrow icon for last index */}
        {index !== evolutionChain?.length - 1 && (
          <ForwardArrowIcon
            height={30}
            width={30}
            className="transform rotate-90 sm:transform-none block"
          />
        )}
        {evolution?.evolves_to?.length > 0 &&
          evolution?.evolves_to?.map((evolve, index) =>
            renderEvolution(evolve, index),
          )}
      </div>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-8 justify-center">
      {evolutionChain?.map((evolution, index) =>
        renderEvolution(evolution, index),
      )}
    </div>
  );
};

export default PokemonEvolution;
