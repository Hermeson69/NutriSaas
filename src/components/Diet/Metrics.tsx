"use client";

import { TrendingUp } from "lucide-react";
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
    { browser: "chrome", visitors: 275, fill: "#1A4314" },
    { browser: "safari", visitors: 200, fill: "#007AFF" },
    { browser: "firefox", visitors: 187, fill: "#F44E25" },
    { browser: "edge", visitors: 173, fill: "#ff758f" },
    { browser: "other", visitors: 90, fill: "#D9D9D9" },
];

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "#4285F4",
    },
    safari: {
        label: "Safari",
        color: "#007AFF",
    },
    firefox: {
        label: "Firefox",
        color: "#FF7139",
    },
    edge: {
        label: "Edge",
        color: "#0078D7",
    },
    other: {
        label: "Other",
        color: "#6C757D",
    },
} satisfies ChartConfig;

export function Metrics() {
    return (
        <Card className="border-none w-full h-100">
            <CardHeader>
                <CardTitle>Bar Chart - Mixed</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="h-50">
                <ChartContainer className="h-40 w-full" config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            left: 0,
                        }}
                    >
                        <YAxis
                            dataKey="browser"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
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
                        <Bar dataKey="visitors" layout="vertical" radius={5} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    );
}
