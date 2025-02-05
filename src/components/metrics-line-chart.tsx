"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { ChartLine } from "lucide-react"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"

const data = [
 { month: "Sep", newLeads: 35, customers: 15 },
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

export function MetricsLineChart() {
 return (
  <Card className="col-span-12 lg:col-span-6">
   <div className="flex items-start justify-between p-6">
    <div className="flex flex-col space-y-1">
     <CardTitle className="text-sm">New Leads & Customers</CardTitle>
     <CardDescription>Last quarter</CardDescription>
    </div>
    <ChartLine className="h-4 w-4" />
   </div>
   <ChartContainer config={config} className="mx-auto w-full max-h-[300px] p-4">
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
      style={{ marginLeft: 1, marginRight: 1 }}
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
  </Card>
 )
}