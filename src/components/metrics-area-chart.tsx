"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip } from "./ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export type Data = {
 date: string
 average: number
 customers: number
}

const data: Data[] = [
 { date: "2024-12-01", average: 165, customers: 220 },
 { date: "2024-12-02", average: 293, customers: 310 },
 { date: "2024-12-03", average: 247, customers: 190 },
 { date: "2024-12-04", average: 385, customers: 420 },
 { date: "2024-12-05", average: 481, customers: 390 },
 { date: "2024-12-06", average: 498, customers: 520 },
 { date: "2024-12-07", average: 388, customers: 300 },
 { date: "2024-12-08", average: 149, customers: 210 },
 { date: "2024-12-09", average: 227, customers: 180 },
 { date: "2024-12-10", average: 293, customers: 330 },
 { date: "2024-12-11", average: 335, customers: 270 },
 { date: "2024-12-12", average: 197, customers: 240 },
 { date: "2024-12-13", average: 197, customers: 160 },
 { date: "2024-12-14", average: 448, customers: 490 },
 { date: "2024-12-15", average: 473, customers: 380 },
 { date: "2024-12-16", average: 338, customers: 400 },
 { date: "2024-12-17", average: 499, customers: 420 },
 { date: "2024-12-18", average: 315, customers: 350 },
 { date: "2024-12-19", average: 235, customers: 180 },
 { date: "2024-12-20", average: 177, customers: 230 },
 { date: "2024-12-21", average: 82, customers: 140 },
 { date: "2024-12-22", average: 81, customers: 120 },
 { date: "2024-12-23", average: 252, customers: 290 },
 { date: "2024-12-24", average: 294, customers: 220 },
 { date: "2024-12-25", average: 201, customers: 250 },
 { date: "2024-12-26", average: 213, customers: 170 },
 { date: "2024-12-27", average: 420, customers: 460 },
 { date: "2024-12-28", average: 233, customers: 190 },
 { date: "2024-12-29", average: 78, customers: 130 },
 { date: "2024-12-30", average: 340, customers: 280 },
 { date: "2024-12-31", average: 178, customers: 230 },
 { date: "2025-01-01", average: 178, customers: 200 },
 { date: "2025-01-02", average: 470, customers: 410 },
 { date: "2025-01-03", average: 103, customers: 160 },
 { date: "2025-01-04", average: 439, customers: 380 },
 { date: "2025-01-05", average: 88, customers: 140 },
 { date: "2025-01-06", average: 294, customers: 250 },
 { date: "2025-01-07", average: 323, customers: 370 },
 { date: "2025-01-08", average: 385, customers: 320 },
 { date: "2025-01-09", average: 438, customers: 480 },
 { date: "2025-01-10", average: 155, customers: 200 },
 { date: "2025-01-11", average: 92, customers: 150 },
 { date: "2025-01-12", average: 492, customers: 420 },
 { date: "2025-01-13", average: 81, customers: 130 },
 { date: "2025-01-14", average: 426, customers: 380 },
 { date: "2025-01-15", average: 307, customers: 350 },
 { date: "2025-01-16", average: 371, customers: 310 },
 { date: "2025-01-17", average: 475, customers: 520 },
 { date: "2025-01-18", average: 107, customers: 170 },
 { date: "2025-01-19", average: 341, customers: 290 },
 { date: "2025-01-20", average: 408, customers: 450 },
 { date: "2025-01-21", average: 169, customers: 210 },
 { date: "2025-01-22", average: 317, customers: 270 },
 { date: "2025-01-23", average: 480, customers: 530 },
 { date: "2025-01-24", average: 132, customers: 180 },
 { date: "2025-01-25", average: 141, customers: 190 },
 { date: "2025-01-26", average: 434, customers: 380 },
 { date: "2025-01-27", average: 448, customers: 490 },
 { date: "2025-01-28", average: 149, customers: 200 },
 { date: "2025-01-29", average: 103, customers: 160 },
 { date: "2025-01-30", average: 446, customers: 400 }
]

const config = {
 average: {
  label: "Average",
  color: "hsl(var(--chart-1))"
 },
 customers: {
  label: "Customers",
  color: "hsl(var(--chart-2))"
 }
} satisfies ChartConfig

export function MetricsAreaChart() {
 const [timeRange, setTimeRange] = useState("90d")

 const filteredData = data.filter((item) => {
  const date = new Date(item.date)
  const referenceDate = new Date("2025-01-30")

  let daysToSubtract = 90

  if (timeRange === "30d") {
   daysToSubtract = 30
  } else if (timeRange === "7d") {
   daysToSubtract = 7
  }

  const startDate = new Date(referenceDate)
  startDate.setDate(startDate.getDate() - daysToSubtract)

  return date >= startDate
 })

 return (
  <div className="col-span-12 border rounded-md">
   <div className="flex flex-col p-4">
    <div className="flex items-center justify-between">
     <h4 className="text-xs text-muted-foreground">Customers</h4>
     <Select value={timeRange} onValueChange={setTimeRange}>
      <SelectTrigger
       aria-label="Select a value"
       className="w-[160px]"
      >
       <SelectValue placeholder="Last 3 months" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="90d">Last 3 months</SelectItem>
       <SelectItem value="30d">Last 30 days</SelectItem>
       <SelectItem value="7d">Last 7 days</SelectItem>
      </SelectContent>
     </Select>
    </div>
   </div>
   <ChartContainer config={config} className="w-full max-h-[300px] p-4">
    <AreaChart data={filteredData}>
    <linearGradient
      id="fillAverage"
      x1="0"
      y1="0"
      x2="0"
      y2="1"
     >
      <stop
       offset="5%"
       stopColor="var(--color-average)"
       stopOpacity={0.8}
      />
      <stop
       offset="95%"
       stopColor="var(--color-average)"
       stopOpacity={0.1}
      />
     </linearGradient>
     <linearGradient
      id="fillYourCustomers"
      x1="0"
      y1="0"
      x2="0"
      y2="1"
     >
      <stop
       offset="5%"
       stopColor="var(--color-yourCustomers)"
       stopOpacity={0.8}
      />
      <stop
       offset="95%"
       stopColor="var(--color-yourCustomers)"
       stopOpacity={0.1}
      />
     </linearGradient>
     <CartesianGrid vertical={false} />
     <XAxis
      dataKey={"date"}
      tickLine={false}
      axisLine={false}
      tickMargin={8}
      minTickGap={32}
      tickFormatter={(value) => {
       const date = new Date(value)
       return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
       })
      }}
     />
     <ChartTooltip
      labelFormatter={(value) => {
       return new Date(value).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
       })
      }}
     />
     <Area
      dataKey={"average"}
      type="natural"
      fill="var(--color-average)"
      fillOpacity={0.4}
      stroke="var(--color-average)"
      stackId="a"
     />
     <Area
      dataKey={"customers"}
      type="natural"
      fill="var(--color-customers)"
      fillOpacity={0.4}
      stroke="var(--color-customers)"
      stackId="a"
     />
     <ChartLegend content={<ChartLegendContent />} />
    </AreaChart>
   </ChartContainer>
  </div>
 )
}