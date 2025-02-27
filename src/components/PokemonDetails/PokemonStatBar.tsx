'use client';

import { IPokemonStat } from '@/types/pokemon';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

export const PokemonStats: React.FC<{ stats: IPokemonStat[] }> = ({
  stats,
}) => {
  const formattedStats = stats.map((stat) => ({
    name: stat.name.toUpperCase(),
    value: stat.value,
  }));

  return (
    <div className="mt-10">
      {/* Responsive Bar Chart with Labels Inside the Bars */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={formattedStats} barSize={45}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: '#8c8c8c', fontSize: 10 }}
            tickLine={false}
          />
          <YAxis type="number" hide />

          <Bar
            dataKey="value"
            fill="rgb(59, 130, 246)"
            radius={[8, 8, 0, 0]}
            animationDuration={1500}
          >
            {/* Show numbers inside the bars */}
            <LabelList
              dataKey="value"
              position="center"
              fill="white"
              fontSize={12}
              fontWeight="bold"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
