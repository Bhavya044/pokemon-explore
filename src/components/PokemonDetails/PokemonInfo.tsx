import { typeAttributes } from '@/utils/helper.config';
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

export const PokemonInfo = ({
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
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
      {/* Image Section */}
      <div className="relative mb-4 sm:mb-0 col-span-1">
        <Image
          src={imageUrl}
          alt={name}
          width={350}
          height={350}
          className="object-contain w-full sm:w-auto"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-5 col-span-2">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 capitalize flex gap-2">
          {name} <span className="text-gray-500 text-2xl">#{id}</span>
        </h1>
        <h4 className="italic text-sm sm:text-base">{text}</h4>

        <div className="text-lg text-gray-700 flex gap-3">
          <p>
            <span className="font-semibold">Weight:</span> {weight} kg
          </p>
          |
          <p>
            <span className="font-semibold">Height:</span> {height} m
          </p>
          |{' '}
          <p>
            <span className="font-semibold">Capture Rate:</span> {captureRate}%
          </p>
        </div>

        {/* Type Section */}
        <div>
          <div className="flex flex-wrap gap-3 mt-2">
            {types.map((type) => (
              <span
                key={type}
                className={`px-4 py-1 rounded-lg text-sm font-semibold border ${typeAttributes[type]?.color ?? 'border-gray-500 text-gray-500'} flex items-center`}
              >
                <span className="mr-2 text-xl">
                  {typeAttributes[type]?.emoji}
                </span>
                <span>{type}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
