/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CountrySales } from "@/app/lib/types/types";
import { Card, CardTitle } from "../ui/card";
import { FlagIcon } from "lucide-react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";

interface Props {
  countrySales: CountrySales[];
}

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

export default function CountrySalesChart({ countrySales }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  return (
    <Card className="w-full md:col-span-4 rounded-xl shadow-xl my-2 overflow-hidden h-[350px] px-5">
      <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
        <FlagIcon /> Sales by Country
      </CardTitle>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart className="min-h-[300px]">
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape as any}
            data={countrySales}
            cx="50%"
            cy="40%"
            innerRadius={55}
            outerRadius={80}
            fill="#8884d8"
            dataKey="sales"
            onMouseEnter={onPieEnter}
          >
            {countrySales.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}

interface ActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  percent: number;
  value: number;
  region: string;
}

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  percent,
  value,
  region,
}: ActiveShapeProps) => {
  const RADIAN = Math.PI / 180;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {region}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#00C49F"
        fontSize={12}
      >{`Total: $ ${value}`}</text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#00C49F"
        fontSize={12}
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
