"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartColumn } from "lucide-react"
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

export function DashboardBarChart() {
 return (
  <Card className="col-span-12">
   <CardHeader>
    <div className="flex items-center justify-between">
     <CardTitle className="text-sm">New Leads & Customers</CardTitle>
     <ChartColumn className="h-4 w-4" />
    </div>
    <CardDescription>Year 2024</CardDescription>
   </CardHeader>
   <CardContent>
    <ChartContainer config={config} className="mx-auto w-full max-h-[300px]">
     <BarChart accessibilityLayer data={data}>
      <CartesianGrid vertical={false} />
      <XAxis
       dataKey={"month"}
       tickLine={false}
       tickMargin={10}
       axisLine={false}
       tickFormatter={(value) => value.slice(0, 3)}
      />
      <ChartTooltip
       cursor={false}
       content={<ChartTooltipContent indicator="dashed" />}
      />
      <Bar
       dataKey={"newLeads"}
       fill="var(--color-newLeads)"
       radius={4}
      />
      <Bar
       dataKey={"customers"}
       fill="var(--color-customers)"
       radius={4}
      />
     </BarChart>
    </ChartContainer>
   </CardContent>
  </Card>
 )
}