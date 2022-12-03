import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Total Enrollement", count: 1000 },
  { name: "completion", count: 2500 },
  { name: "Candidates", count: 850 },
  { name: "Reached Out", count: 2705 },
  { name: "Interview set", count: 700 },
  { name: "Candidates hired", count: 250 },
];
const StatChart = () => {
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={200}>
        <AreaChart data={data}>
          <Area
            type={"monotone"}
            dataKey={"count"}
            stroke={"#793EF5"}
            fill={"#793EF5"}
            strokeWidth={1}
          />
          <CartesianGrid horizontal={false} stroke="#ccc" />
          <XAxis dataKey={"name"} />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default StatChart;
