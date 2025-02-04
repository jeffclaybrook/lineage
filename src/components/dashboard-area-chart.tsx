"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip } from "./ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const data = [
 { date: "2024-04-01", average: 222, yourCustomers: 150 },
 { date: "2024-04-02", average: 97, yourCustomers: 180 },
 { date: "2024-04-03", average: 167, yourCustomers: 120 },
 { date: "2024-04-04", average: 242, yourCustomers: 260 },
 { date: "2024-04-05", average: 373, yourCustomers: 290 },
 { date: "2024-04-06", average: 301, yourCustomers: 340 },
 { date: "2024-04-07", average: 245, yourCustomers: 180 },
 { date: "2024-04-08", average: 409, yourCustomers: 320 },
 { date: "2024-04-09", average: 59, yourCustomers: 110 },
 { date: "2024-04-10", average: 261, yourCustomers: 190 },
 { date: "2024-04-11", average: 327, yourCustomers: 350 },
 { date: "2024-04-12", average: 292, yourCustomers: 210 },
 { date: "2024-04-13", average: 342, yourCustomers: 380 },
 { date: "2024-04-14", average: 137, yourCustomers: 220 },
 { date: "2024-04-15", average: 120, yourCustomers: 170 },
 { date: "2024-04-16", average: 138, yourCustomers: 190 },
 { date: "2024-04-17", average: 446, yourCustomers: 360 },
 { date: "2024-04-18", average: 364, yourCustomers: 410 },
 { date: "2024-04-19", average: 243, yourCustomers: 180 },
 { date: "2024-04-20", average: 89, yourCustomers: 150 },
 { date: "2024-04-21", average: 137, yourCustomers: 200 },
 { date: "2024-04-22", average: 224, yourCustomers: 170 },
 { date: "2024-04-23", average: 138, yourCustomers: 230 },
 { date: "2024-04-24", average: 387, yourCustomers: 290 },
 { date: "2024-04-25", average: 215, yourCustomers: 250 },
 { date: "2024-04-26", average: 75, yourCustomers: 130 },
 { date: "2024-04-27", average: 383, yourCustomers: 420 },
 { date: "2024-04-28", average: 122, yourCustomers: 180 },
 { date: "2024-04-29", average: 315, yourCustomers: 240 },
 { date: "2024-04-30", average: 454, yourCustomers: 380 },
 { date: "2024-05-01", average: 165, yourCustomers: 220 },
 { date: "2024-05-02", average: 293, yourCustomers: 310 },
 { date: "2024-05-03", average: 247, yourCustomers: 190 },
 { date: "2024-05-04", average: 385, yourCustomers: 420 },
 { date: "2024-05-05", average: 481, yourCustomers: 390 },
 { date: "2024-05-06", average: 498, yourCustomers: 520 },
 { date: "2024-05-07", average: 388, yourCustomers: 300 },
 { date: "2024-05-08", average: 149, yourCustomers: 210 },
 { date: "2024-05-09", average: 227, yourCustomers: 180 },
 { date: "2024-05-10", average: 293, yourCustomers: 330 },
 { date: "2024-05-11", average: 335, yourCustomers: 270 },
 { date: "2024-05-12", average: 197, yourCustomers: 240 },
 { date: "2024-05-13", average: 197, yourCustomers: 160 },
 { date: "2024-05-14", average: 448, yourCustomers: 490 },
 { date: "2024-05-15", average: 473, yourCustomers: 380 },
 { date: "2024-05-16", average: 338, yourCustomers: 400 },
 { date: "2024-05-17", average: 499, yourCustomers: 420 },
 { date: "2024-05-18", average: 315, yourCustomers: 350 },
 { date: "2024-05-19", average: 235, yourCustomers: 180 },
 { date: "2024-05-20", average: 177, yourCustomers: 230 },
 { date: "2024-05-21", average: 82, yourCustomers: 140 },
 { date: "2024-05-22", average: 81, yourCustomers: 120 },
 { date: "2024-05-23", average: 252, yourCustomers: 290 },
 { date: "2024-05-24", average: 294, yourCustomers: 220 },
 { date: "2024-05-25", average: 201, yourCustomers: 250 },
 { date: "2024-05-26", average: 213, yourCustomers: 170 },
 { date: "2024-05-27", average: 420, yourCustomers: 460 },
 { date: "2024-05-28", average: 233, yourCustomers: 190 },
 { date: "2024-05-29", average: 78, yourCustomers: 130 },
 { date: "2024-05-30", average: 340, yourCustomers: 280 },
 { date: "2024-05-31", average: 178, yourCustomers: 230 },
 { date: "2024-06-01", average: 178, yourCustomers: 200 },
 { date: "2024-06-02", average: 470, yourCustomers: 410 },
 { date: "2024-06-03", average: 103, yourCustomers: 160 },
 { date: "2024-06-04", average: 439, yourCustomers: 380 },
 { date: "2024-06-05", average: 88, yourCustomers: 140 },
 { date: "2024-06-06", average: 294, yourCustomers: 250 },
 { date: "2024-06-07", average: 323, yourCustomers: 370 },
 { date: "2024-06-08", average: 385, yourCustomers: 320 },
 { date: "2024-06-09", average: 438, yourCustomers: 480 },
 { date: "2024-06-10", average: 155, yourCustomers: 200 },
 { date: "2024-06-11", average: 92, yourCustomers: 150 },
 { date: "2024-06-12", average: 492, yourCustomers: 420 },
 { date: "2024-06-13", average: 81, yourCustomers: 130 },
 { date: "2024-06-14", average: 426, yourCustomers: 380 },
 { date: "2024-06-15", average: 307, yourCustomers: 350 },
 { date: "2024-06-16", average: 371, yourCustomers: 310 },
 { date: "2024-06-17", average: 475, yourCustomers: 520 },
 { date: "2024-06-18", average: 107, yourCustomers: 170 },
 { date: "2024-06-19", average: 341, yourCustomers: 290 },
 { date: "2024-06-20", average: 408, yourCustomers: 450 },
 { date: "2024-06-21", average: 169, yourCustomers: 210 },
 { date: "2024-06-22", average: 317, yourCustomers: 270 },
 { date: "2024-06-23", average: 480, yourCustomers: 530 },
 { date: "2024-06-24", average: 132, yourCustomers: 180 },
 { date: "2024-06-25", average: 141, yourCustomers: 190 },
 { date: "2024-06-26", average: 434, yourCustomers: 380 },
 { date: "2024-06-27", average: 448, yourCustomers: 490 },
 { date: "2024-06-28", average: 149, yourCustomers: 200 },
 { date: "2024-06-29", average: 103, yourCustomers: 160 },
 { date: "2024-06-30", average: 446, yourCustomers: 400 }
]

const config = {
 customers: {
  label: "Customers"
 },
 average: {
  label: "Average",
  color: "hsl(var(--chart-1))"
 },
 yourCustomers: {
  label: "Customers",
  color: "hsl(var(--chart-2))"
 }
} satisfies ChartConfig

export function DashboardAreaChart() {
 const [timeRange, setTimeRange] = useState("90d")

 const filteredData = data.filter((item) => {
  const date = new Date(item.date)
  const referenceDate = new Date("2024-06-30")
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
  <Card className="col-span-12">
   <CardHeader>
    <div className="flex items-center justify-between">
     <CardTitle className="text-sm">Customer Conversion</CardTitle>
     <Select value={timeRange} onValueChange={setTimeRange}>
      <SelectTrigger
       aria-label="Select a value"
       className="w-[160px] rounded-lg sm:ml-auto"
      >
       <SelectValue placeholder="Last 3 months" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="90d" className="rounded-lg">Last 3 months</SelectItem>
       <SelectItem value="30d" className="rounded-lg">Last 30 days</SelectItem>
       <SelectItem value="7d" className="rounded-lg">Last 7 days</SelectItem>
      </SelectContent>
     </Select>
    </div>
    <CardDescription>Year 2024</CardDescription>
   </CardHeader>
   <CardContent>
    <ChartContainer config={config} className="w-full max-h-[300px]">
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
       dataKey={"yourCustomers"}
       type="natural"
       fill="var(--color-yourCustomers)"
       fillOpacity={0.4}
       stroke="var(--color-yourCustomers)"
       stackId="a"
      />
      <ChartLegend content={<ChartLegendContent />} />
     </AreaChart>
    </ChartContainer>
   </CardContent>
  </Card>
 )
}