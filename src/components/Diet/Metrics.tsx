"use client";

import { TrendingDown } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { metrics: "fiber", visitors: 275, fill: "#1A4314" },
  { metrics: "carbo", visitors: 200, fill: "#007AFF" },
  { metrics: "fat", visitors: 187, fill: "#F44E25" },
  { metrics: "sugar", visitors: 173, fill: "#ff758f" },
  { metrics: "protein", visitors: 190, fill: "#34A853" },
  { metrics: "vitamins", visitors: 150, fill: "#FBBC05" },
  { metrics: "minerals", visitors: 130, fill: "#EA4335" },
  { metrics: "other", visitors: 90, fill: "#D9D9D9" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  fiber: {
    label: "Fiber",
    color: "#4285F4",
  },
  carbo: {
    label: "Carbo",
    color: "#007AFF",
  },
  fat: {
    label: "Fat",
    color: "#FF7139",
  },
  sugar: {
    label: "Sugar",
    color: "#0078D7",
  },
  protein: {
    label: "Protein",
    color: "#34A853",
  },
  vitamins: {
    label: "Vitamins",
    color: "#FBBC05",
  },
  minerals: {
    label: "Minerals",
    color: "#EA4335",
  },
  other: {
    label: "Other",
    color: "#6C757D",
  },
} satisfies ChartConfig;

export function Metrics() {
  return (
    <Card className="border-none mt-10">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center">
          Composição da Dieta - Gráfico
        </CardTitle>
        <CardDescription className="text-dark mr-2">
          Janeiro - Junho 2025
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px] w-full">
        {/*Problema da responsividade ta aqui*/}
        <ChartContainer className="h-full w-full" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
            height={200}
          >
            <YAxis
              dataKey="metrics"
              type="category"
              tickLine={false}
              tickMargin={5}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={15} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Déficit calórico de 5.2% p/day <TrendingDown className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrar composição total da dieta para os próximos dois meses.
        </div>
      </CardFooter>
    </Card>
  );
}
