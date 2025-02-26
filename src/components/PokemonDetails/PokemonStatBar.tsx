import React from 'react';

interface IStatBarProps {
  name: string;
  value: number;
}

export const PokemonStatBar: React.FC<IStatBarProps> = ({ name, value }) => {
  const getBarColor = () => {
    if (value >= 80) return 'bg-green-400';
    if (value >= 50) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  return (
    <div>
      <div className="flex justify-between text-sm text-gray-600">
        <span className="font-medium">{name}</span>
        <span>{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full mt-1">
        <div
          className={`h-2 rounded-full ${getBarColor()}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};
