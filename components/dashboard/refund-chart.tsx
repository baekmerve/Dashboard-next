"use client";

import { TicketX } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Refund } from "@/app/lib/types/types";

interface Props {
  refundList: Refund[];
}

export default function RefundChart({ refundList }: Props) {
  return (
    <Card className="w-full md:col-span-4 rounded-xl shadow-xl my-2 overflow-hidden h-[400px] px-5">
      <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
        <TicketX /> Refund Reasons
      </CardTitle>

      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={refundList}>
            <PolarGrid />
            <PolarAngleAxis dataKey="reason" />
            <PolarRadiusAxis />
            <Radar
              dataKey="total"
              stroke="#ff6f69"
              fill="#ff6f69"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
