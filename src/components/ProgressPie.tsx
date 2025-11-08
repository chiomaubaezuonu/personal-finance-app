import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Lifestyle", value: 6546 },
  { name: "Bills", value: 750 },
  { name: "Transportation", value: 750 },
  { name: "General", value: 100 },
  { name: "Dinning out", value: 75 },

  { name: "Personal care", value: 100 },
  { name: "Shopping", value: 500 },
];

const COLORS = [
  "#b36c49",
  "#277c78",
  "#626070",
  "#c94736",
  "#f2cdac",
  "#626070",
  "#82c9d7",
]; // main
const LIGHTER = [
  "#ca9980",
  "#67a3a0",
  "#918f9a",
  "#d97e72",
  "#f5dcc4",
  "#918f9a",
  "#a7d9e3",
]; // lighter shades

export default function ProgressPie() {
  return (
    <div style={{width:280, height:300 }}>
      <ResponsiveContainer>
        <PieChart>
          {/* Outer Pie (main color) */}
          <Pie
            data={data}
            dataKey="value"
            innerRadius={90}
            outerRadius={115}
            paddingAngle={0}
            startAngle={30}
            endAngle={390}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} stroke="none" />
            ))}
          </Pie>

          {/* Inner Pie (lighter shade) */}
          <Pie
            data={data}
            dataKey="value"
            innerRadius={75}
            outerRadius={90}
            paddingAngle={0}
            startAngle={30}
            endAngle={390}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={LIGHTER[i]} stroke="none" />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
