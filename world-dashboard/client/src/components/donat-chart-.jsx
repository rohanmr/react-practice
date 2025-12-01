import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import useApi from "@/hooks/use-api";
import { TrendingUp } from "lucide-react";

const COLORS = ["#4F46E5", "#22C55E", "#F97316", "#EF4444", "#06B6D4"];

const chartConfig = {
  population: {
    label: "Population",
    color: "var(--primary)",
  },
};

const DonutChart = () => {
  const { data, loading, error } = useApi("/totalPopulationByContinent");

  if (loading) return <p className="p-6">Loading chart...</p>;
  if (error) return <p className="p-6 text-red-500">Error loading data</p>;

  // ✅ Correct data mapping
  const chartData = data?.map((item) => ({
    name: item.Continent,
    value: Number(item.TotalPopulation),
  }));

  const totalPopulation = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Population by Continent</CardTitle>
        <CardDescription>Latest available data</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] lg:w-[620px]"
        >
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <ChartTooltip
                className="text-base"
                cursor={false}
                content={<ChartTooltipContent />}
              />

              <Pie
                data={chartData} // ✅ must be array
                dataKey="value" // ✅ correct field
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={4}
                strokeWidth={5}
              >
                {chartData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}

                {/* ✅ Center text */}
                <Label
                  content={({ viewBox }) => {
                    const { cx, cy } = viewBox;
                    return (
                      <text
                        x={cx}
                        y={cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={cx}
                          y={cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          {totalPopulation.toLocaleString()}
                        </tspan>
                        <tspan
                          x={cx}
                          y={cy + 22}
                          className="fill-muted-foreground text-sm"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm mt-3">
        <div className="flex items-center gap-2 leading-none font-medium">
          Updated continent population <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total population by continent
        </div>
      </CardFooter>
    </Card>
  );
};

export default DonutChart;
