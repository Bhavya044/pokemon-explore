import PokeballIcon from '@/components/icons/PokeballIcon';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin w-16 h-16 opacity-80">
        <PokeballIcon />
      </div>
      <p className="ml-4 text-gray-600 text-lg font-semibold">
        Fetching Pokémon...
      </p>
    </div>
  );
}
