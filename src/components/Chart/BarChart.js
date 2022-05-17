import React from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";
import PChart from "./PieChart.js";

export default function BarChart() {
  const data = [
    { name: "USA", value: 3000, fill: "#666" },
    { name: "EUR", value: 4600 },
    { name: "GBP", value: 1000, fill: "darkred" },
    { name: "NGN", value: 2000, fill: "#28a745" },
    { name: "YUAN", value: 4000, fill: "gold" },
  ];

  return (
    <div className="chart">
      <div style={{ paddingTop: "10px" }}>
        <h3 style={{ textAlign: "center" }}>Quaterly Chart</h3>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#105BAA"
            label
          />

          <Tooltip />
        </PieChart>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Yearly Chart</h3>
        <PChart />
      </div>
    </div>
  );
}
