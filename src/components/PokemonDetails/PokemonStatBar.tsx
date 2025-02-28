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

const PokemonStats: React.FC<{ stats: IPokemonStat[] }> = ({ stats }) => {
  const formattedStats = stats?.map((stat) => ({
    name: stat.name.toUpperCase(),
    value: stat.value,
  }));

  return (
    <div className="mt-10 flex justify-center">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={formattedStats} barSize={45}>
          <XAxis
            dataKey="name"
            tick={{ fill: '#8c8c8c', fontSize: 10 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis type="number" hide />

          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
            fill="#4A90E2"
            animationDuration={1500}
          >
            <LabelList
              dataKey="value"
              fontSize={12}
              fontWeight="bold"
              fill="white"
              position="center"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PokemonStats;
