import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function VerticalLineChart({data}) {
  return (
      <LineChart
        layout="vertical"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Line dataKey="pv" stroke="#8884d8" />
        <Line dataKey="uv" stroke="#82ca9d" />
      </LineChart>
  );
}

export default VerticalLineChart;
