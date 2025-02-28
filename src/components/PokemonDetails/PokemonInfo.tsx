import { pokemonTypesColors } from '@/utils/helper.config';
import Image from 'next/image';

interface PokemonInfoProps {
  id: number;
  name: string;
  types: string[];
  weight: number;
  height: number;
  imageUrl: string;
  text: string;
  captureRate: number;
}

const PokemonInfo = ({
  name,
  id,
  types,
  weight,
  height,
  imageUrl,
  text,
  captureRate,
}: PokemonInfoProps) => {
  return (
    <div className=" w-full grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 xs:gap-2">
      {/* Image Section */}
      <div className="relative mb-4 col-span-1 items-center justify-center flex">
        <Image
          src={imageUrl}
          alt={name}
          width={350}
          height={350}
          className=" w-full  object-contain sm:w-auto"
          priority
        />
      </div>

      {/* Text Section */}
      <div className=" col-span-2 flex flex-col gap-5">
        <h1 className="capitalize font-bold text-3xl md:text-5xl text-gray-900 flex gap-2 flex-wrap">
          {name} <span className="text-gray-500 text-2xl">#{id}</span>
        </h1>
        <h4 className="italic text-sm sm:text-base">{text}</h4>

        <div className="text-lg text-gray-700 flex smx:flex-row flex-col items-start smx:justify-start  flex-wrap gap-3 sm:flex-nowrap sm:gap-5 justify-center sm:justify-start">
          <p className="flex flex-col lg:flex-row gap-2">
            <span className="font-semibold">Weight:</span> {weight} kg
          </p>
          <span className="hidden lg:inline">|</span>
          <p className="flex flex-col lg:flex-row gap-2">
            <span className="font-semibold">Height:</span> {height} m
          </p>
          <span className="hidden lg:inline">|</span>
          <p className="flex flex-col lg:flex-row gap-2">
            <span className="font-semibold">Capture Rate:</span> {captureRate}%
          </p>
        </div>

        {/* Type Section */}
        <div className="mt-2 flex flex-wrap gap-3">
          {types.map((type) => {
            const colorClasses = pokemonTypesColors[type]?.color;
            return (
              <span
                key={type}
                className={`px-4 py-1 rounded-lg text-sm font-semibold border ${colorClasses ?? 'border-gray-500 text-gray-500'} flex items-center`}
              >
                <span className="mr-2 text-xl">
                  {pokemonTypesColors[type]?.emoji}
                </span>
                {<span>{type}</span>}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
