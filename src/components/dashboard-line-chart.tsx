"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { ChartLine } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"

const data = [
 { month: "Jan", newLeads: 60, customers: 50 },
 { month: "Feb", newLeads: 42, customers: 54 },
 { month: "Mar", newLeads: 53, customers: 44 },
 { month: "Apr", newLeads: 65, customers: 57 },
 { month: "May", newLeads: 34, customers: 48 },
 { month: "Jun", newLeads: 70, customers: 63 },
 { month: "Jul", newLeads: 64, customers: 51 },
 { month: "Aug", newLeads: 50, customers: 34 },
 { month: "Sep", newLeads: 60, customers: 50 },
 { month: "Oct", newLeads: 40, customers: 53 },
 { month: "Nov", newLeads: 65, customers: 40 },
 { month: "Dec", newLeads: 60, customers: 50 }
]

const config = {
 newLeads: {
  label: "New Leads",
  color: "hsl(var(--chart-1))"
 },
 customers: {
  label: "Customers",
  color: "hsl(var(--chart-2))"
 }
} satisfies ChartConfig

export function DashboardLineChart() {
 return (
  <Card className="col-span-12 lg:col-span-6">
   <CardHeader>
    <div className="flex items-center justify-between">
     <CardTitle className="text-sm">New Leads & Customers</CardTitle>
     <ChartLine className="h-4 w-4" />
    </div>
    <CardDescription>Year 2024</CardDescription>
   </CardHeader>
   <CardContent>
    <ChartContainer config={config} className="mx-auto max-h-[300px]">
     <LineChart
      accessibilityLayer
      data={data}
      margin={{ left: 12, right: 12 }}
     >
      <CartesianGrid vertical={false} />
      <XAxis
       dataKey={"month"}
       tickLine={false}
       axisLine={false}
       tickMargin={8}
       tickFormatter={(value) => value.slice(0, 3)}
      />
      <ChartTooltip
       cursor={false}
       content={<ChartTooltipContent hideLabel />}
      />
      <Line
       dataKey={"newLeads"}
       type="natural"
       stroke="var(--color-newLeads)"
       strokeWidth={2}
       dot={{
        fill: "var(--color-newLeads)"
       }}
       activeDot={{
        r: 6
       }}
      />
      <Line
       dataKey={"customers"}
       type="monotone"
       stroke="var(--color-customers)"
       strokeWidth={2}
       dot={{
        fill: "var(--color-customers)"
       }}
       activeDot={{
        r: 6
       }}
      />
     </LineChart>
    </ChartContainer>
   </CardContent>
  </Card>
 )
}