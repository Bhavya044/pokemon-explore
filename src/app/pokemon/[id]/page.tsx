import Image from 'next/image';
import { getPokemonDetails } from '@/utils/fetchPokemon';

type Params = { id: string };

export default async function PokemonDetailPage({
  params,
}: {
  params: Params;
}) {
  const pokemon = await getPokemonDetails(params.id);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center capitalize">
        {pokemon.name}
      </h2>
      <Image
        src={'....dsb.com'}
        alt={'pokemon'}
        width={150}
        height={150}
        className="mx-auto my-4"
      />
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Types:</h3>
          <div className="flex gap-2">
            {pokemon.types.map((t: any) => (
              <span
                key={t.type.name}
                className="bg-green-200 px-3 py-1 rounded-full"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Abilities:</h3>
          <div className="flex gap-2">
            {pokemon.abilities.map((a: any) => (
              <span
                key={a.ability.name}
                className="bg-purple-200 px-3 py-1 rounded-full"
              >
                {a.ability.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
