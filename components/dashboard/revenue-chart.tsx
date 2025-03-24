"use client";

import { Revenue } from "@/app/lib/types/types";
import { Card, CardTitle } from "../ui/card";
import { BadgeDollarSign } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  revenueList: Revenue[];
}

export default function RevenueChart({ revenueList }: Props) {
  return (
    <Card className="w-full md:col-span-4 rounded-xl shadow-xl my-2 overflow-hidden h-[380px] px-5">
      <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
        <BadgeDollarSign /> Monthly Revenue
      </CardTitle>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={300}
          height={100}
          data={revenueList}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month_name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#2c3e50", color: "#FFBB28" }}
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
