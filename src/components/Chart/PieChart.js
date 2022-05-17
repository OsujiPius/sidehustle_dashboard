import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function PieChart() {
  const data = [
    { name: "USD", value: 3000, fill: "#666" },
    { name: "EUR", value: 4600 },
    { name: "GBP", value: 1000, fill: "darkred" },
    { name: "NGN", value: 2000, fill: "#28a745" },
    { name: "YUAN", value: 4000, fill: "gold" },
  ];

  return (
    <div>
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" background={{ fill: "#eee" }} />
        <Bar dataKey="value" />
      </BarChart>
    </div>
  );
}
