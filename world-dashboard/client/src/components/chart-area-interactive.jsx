"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useApi from "@/hooks/use-api";

const chartConfig = {
  population: {
    label: "Population",
    color: "var(--primary)",
  },
};

export function ChartAreaInteractive() {
  const { data, loading, error } = useApi("/topTenPopCountries");

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">Error loading chart</p>;

  console.log(data);

  // ✅ Format data for recharts
  const formattedData = data?.map((item) => ({
    country: item.Name,
    population: item.Population,
  }));

  return (
    <Card className="w-auto">
      <CardHeader>
        <CardTitle>Top 10 Countries by Population</CardTitle>
        <CardDescription>Based on latest available data</CardDescription>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={formattedData}>
            <defs>
              <linearGradient id="fillPopulation" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-population)"
                  stopOpacity={0.9}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-population)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="country"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              className="text-sm"
            />

            <ChartTooltip
              cursor={false}
              className="text-sm"
              content={<ChartTooltipContent indicator="dot" />}
            />

            <Area
              dataKey="population"
              type="natural"
              fill="url(#fillPopulation)"
              stroke="var(--color-population)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
