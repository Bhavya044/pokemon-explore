import Image from 'next/image';
import SplashBg from '../UI/SplashBg';
import ForwardArrowIcon from '../icons/ForwardArrow';

export const PokemonEvolution = ({
  evolutionChain,
}: {
  evolutionChain: any;
}) => {
  const renderEvolution = (evolution: any, index: number) => {
    return (
      <>
        <div
          key={evolution.species.name}
          className="flex gap-6 items-center space-y-2"
        >
          <div className="flex flex-col items-center">
            <SplashBg
              pokemonName={evolution.species.name}
              imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.species.url.split('/')[6]}.png`}
            />
            <span className="font-semibold text-gray-800 capitalize">
              {evolution.species.name}
            </span>
          </div>
          {index !== evolution.evolves_to.length && (
            <ForwardArrowIcon height={30} width={30} />
          )}

          {evolution.evolves_to.length > 0 &&
            evolution.evolves_to.map((evolve: any, index: number) =>
              renderEvolution(evolve, index),
            )}
        </div>
      </>
    );
  };

  return (
    <div className="flex space-x-8 justify-center">
      {renderEvolution(evolutionChain)}
    </div>
  );
};
