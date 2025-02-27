import Image from 'next/image';

interface PokemonInfoProps {
  id: number;
  name: string;
  types: string[];
  weight: number;
  height: number;
  imageUrl: string;
  text: string;
}

// Type colors and emojis
const typeAttributes: { [key: string]: { color: string; emoji: string } } = {
  fire: { color: 'border-red-500 text-red-500', emoji: '🔥' },
  water: { color: 'border-blue-500 text-blue-500', emoji: '💧' },
  grass: { color: 'border-green-500 text-green-500', emoji: '🍃' },
  electric: { color: 'border-yellow-500 text-yellow-500', emoji: '⚡' },
  ice: { color: 'border-teal-400 text-teal-400', emoji: '❄️' },
  fighting: { color: 'border-orange-700 text-orange-700', emoji: '🥊' },
  ground: { color: 'border-yellow-700 text-yellow-700', emoji: '🌍' },
  flying: { color: 'border-indigo-400 text-indigo-400', emoji: '🕊️' },
  psychic: { color: 'border-pink-500 text-pink-500', emoji: '🧠' },
  bug: { color: 'border-lime-500 text-lime-500', emoji: '🐞' },
  rock: { color: 'border-gray-700 text-gray-700', emoji: '🪨' },
  ghost: { color: 'border-purple-500 text-purple-500', emoji: '👻' },
  dragon: { color: 'border-indigo-700 text-indigo-700', emoji: '🐉' },
  dark: { color: 'border-gray-900 text-gray-900', emoji: '🌑' },
  steel: { color: 'border-gray-500 text-gray-500', emoji: '⚙️' },
  fairy: { color: 'border-pink-300 text-pink-300', emoji: '🧚‍♀️' },
  poison: { color: 'border-purple-700 text-purple-700', emoji: '☠️' },
  normal: { color: 'border-gray-400 text-gray-400', emoji: '' },
};

const PokemonInfo = ({
  name,
  id,
  types,
  weight,
  height,
  imageUrl,
  text,
}: PokemonInfoProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
      {/* Image Section */}
      <div className="relative mb-4 sm:mb-0">
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
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 capitalize flex gap-2">
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

export default PokemonInfo;
