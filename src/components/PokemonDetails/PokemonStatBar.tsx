'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

interface PokemonStatsProps {
  stats: { name: string; value: number }[];
}

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  const formattedStats = stats.map((stat) => ({
    name: stat.name.toUpperCase(),
    value: stat.value,
  }));

  return (
    <div className="mt-8">
      {/* Smaller Bar Chart with Responsive Design */}
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={formattedStats} barSize={45}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: '#8c8c8c', fontSize: 8 }}
            tickLine={false}
          />
          <YAxis type="number" hide />

          <Bar
            dataKey="value"
            fill="rgb(59, 130, 246)"
            radius={[8, 8, 0, 0]}
            animationDuration={1500}
          >
            {/* Add the number on top of each bar */}
            <LabelList
              dataKey="value"
              position="top"
              fill="#8c8c8c"
              fontSize={14}
              fontWeight="bold"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PokemonStats;
