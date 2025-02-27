interface PokemonMovesProps {
  moves: { name: string; version: string }[];
}

const PokemonMoves = ({ moves }: PokemonMovesProps) => {
  return (
    <div className="grid grid-cols-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-60 overflow-y-auto ">
      {moves.map((move) => (
        <div
          key={move.name}
          className="border-2 border-red-500 px-3 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-yellow-200 transition-all transform hover:scale-105 flex flex-col items-center gap-1"
        >
          <span className="font-semibold">{move.name}</span>
          <span className="text-xs text-gray-600">{move.version}</span>
        </div>
      ))}
    </div>
  );
};

export default PokemonMoves;
