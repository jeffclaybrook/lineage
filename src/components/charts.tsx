"use client"

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Label, Pie, PieChart, XAxis } from "recharts"
import { TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"

const pieChartData = [
 { status: "chrome", leads: 275, fill: "var(--color-chrome)" },
 { status: "safari", leads: 200, fill: "var(--color-safari)" },
 { status: "firefox", leads: 287, fill: "var(--color-firefox)" },
 { status: "edge", leads: 173, fill: "var(--color-edge)" },
 { status: "other", leads: 190, fill: "var(--color-other)" }
]

const barChartData = [
 { month: "January", desktop: 186, mobile: 80 },
 { month: "February", desktop: 305, mobile: 200 },
 { month: "March", desktop: 237, mobile: 120 },
 { month: "April", desktop: 73, mobile: 190 },
 { month: "May", desktop: 209, mobile: 130 },
 { month: "June", desktop: 214, mobile: 140 }
]

const areaChartData = [
 { month: "January", desktop: 186, mobile: 80 },
 { month: "February", desktop: 305, mobile: 200 },
 { month: "March", desktop: 237, mobile: 120 },
 { month: "April", desktop: 73, mobile: 190 },
 { month: "May", desktop: 209, mobile: 130 },
 { month: "June", desktop: 214, mobile: 140 }
]

const pieChartConfig = {
 leads: {
  label: "leads",
 },
 chrome: {
  label: "Chrome",
  color: "hsl(var(--chart-1))",
 },
 safari: {
  label: "Safari",
  color: "hsl(var(--chart-2))",
 },
 firefox: {
  label: "Firefox",
  color: "hsl(var(--chart-3))",
 },
 edge: {
  label: "Edge",
  color: "hsl(var(--chart-4))",
 },
 other: {
  label: "Other",
  color: "hsl(var(--chart-5))",
 },
} satisfies ChartConfig

const barChartConfig = {
 desktop: {
  label: "Desktop",
  color: "hsl(var(--chart-1))",
 },
 mobile: {
  label: "Mobile",
  color: "hsl(var(--chart-2))",
 },
} satisfies ChartConfig

const areaChartConfig = {
 desktop: {
  label: "Desktop",
  color: "hsl(var(--chart-1))",
 },
 mobile: {
  label: "Mobile",
  color: "hsl(var(--chart-2))",
 },
} satisfies ChartConfig

export function Charts() {
 return (
  <>
   <Card className="flex flex-col">
    <CardHeader>
     <CardTitle>Lead Status</CardTitle>
     <CardDescription>January - June 2024</CardDescription>
    </CardHeader>
    <CardContent>
     <ChartContainer config={pieChartConfig} className="mx-auto max-h-[250px]">
      <PieChart>
       <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent hideLabel />}
       />
       <Pie
        data={pieChartData}
        dataKey="leads"
        nameKey="status"
        innerRadius={60}
        strokeWidth={5}
       >
        <Label
         content={({ viewBox }) => {
          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
           return (
            <text
             x={viewBox.cx}
             y={viewBox.cy}
             textAnchor="middle"
             dominantBaseline="middle"
            >
             <tspan
              x={viewBox.cx}
              y={viewBox.cy}
              className="fill-foreground text-3xl font-bold"
             >
              1,125
             </tspan>
             <tspan
              x={viewBox.cx}
              y={(viewBox.cy || 0) + 24}
              className="fill-muted-foreground"
             >
              leads
             </tspan>
            </text>
           )
          }
         }}
        />
       </Pie>
      </PieChart>
     </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col gap-2 text-sm">
     <p className="flex items-center gap-2 font-medium leading-none">
      Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
     </p>
     <p className="leading-none text-muted-foreground">Showing total leads for the last 6 months</p>
    </CardFooter>
   </Card>
   <Card className="flex flex-col">
    <CardHeader>
     <CardTitle>Lead Sources</CardTitle>
     <CardDescription>January - June 2024</CardDescription>
    </CardHeader>
    <CardContent>
     <ChartContainer config={barChartConfig} className="mx-auto max-h-[250px]">
      <BarChart accessibilityLayer data={barChartData}>
       <CartesianGrid vertical={false} />
       <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
       />
       <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent indicator="dashed" />}
       />
       <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
       <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
     </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col gap-2 text-sm">
     <p className="flex items-center gap-2 font-medium leading-none">
      Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
     </p>
     <p className="leading-none text-muted-foreground">Showing total leads for the last 6 months</p>
    </CardFooter>
   </Card>
   <Card className="flex flex-col">
    <CardHeader>
     <CardTitle>Lead Status</CardTitle>
     <CardDescription>January - June 2024</CardDescription>
    </CardHeader>
    <CardContent>
     <ChartContainer config={areaChartConfig} className="mx-auto max-h-[250px]">
      <AreaChart
       accessibilityLayer
       data={areaChartData}
       margin={{
        left: 12,
        right: 12
       }}
      >
       <CartesianGrid vertical={false} />
       <XAxis
        dataKey="month"
        tickLine={false}
        axisLine={false}
        tickMargin={8}
        tickFormatter={(value) => value.slice(0, 3)}
       />
       <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent indicator="dot" />}
       />
       <Area
        dataKey="mobile"
        type="natural"
        fill="var(--color-mobile)"
        fillOpacity={0.4}
        stroke="var(--color-mobile)"
        stackId="a"
       />
       <Area
        dataKey="desktop"
        type="natural"
        fill="var(--color-desktop)"
        fillOpacity={0.4}
        stroke="var(--color-desktop)"
        stackId="a"
       />
      </AreaChart>
     </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col gap-2 text-sm">
     <p className="flex items-center gap-2 font-medium leading-none">
      Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
     </p>
     <p className="leading-none text-muted-foreground">Showing total leads for the last 6 months</p>
    </CardFooter>
   </Card>
  </>
 )
}