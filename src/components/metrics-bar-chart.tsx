"use client"

import { useMemo, useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"

const data = [
 { date: "2025-01-01", leads: 178, customers: 200 },
 { date: "2025-01-02", leads: 470, customers: 410 },
 { date: "2025-01-03", leads: 103, customers: 160 },
 { date: "2025-01-04", leads: 439, customers: 380 },
 { date: "2025-01-05", leads: 88, customers: 140 },
 { date: "2025-01-06", leads: 294, customers: 250 },
 { date: "2025-01-07", leads: 323, customers: 370 },
 { date: "2025-01-08", leads: 385, customers: 320 },
 { date: "2025-01-09", leads: 438, customers: 480 },
 { date: "2025-01-10", leads: 155, customers: 200 },
 { date: "2025-01-11", leads: 92, customers: 150 },
 { date: "2025-01-12", leads: 492, customers: 420 },
 { date: "2025-01-13", leads: 81, customers: 130 },
 { date: "2025-01-14", leads: 426, customers: 380 },
 { date: "2025-01-15", leads: 307, customers: 350 },
 { date: "2025-01-16", leads: 371, customers: 310 },
 { date: "2025-01-17", leads: 475, customers: 520 },
 { date: "2025-01-18", leads: 107, customers: 170 },
 { date: "2025-01-19", leads: 341, customers: 290 },
 { date: "2025-01-20", leads: 408, customers: 450 },
 { date: "2025-01-21", leads: 169, customers: 210 },
 { date: "2025-01-22", leads: 317, customers: 270 },
 { date: "2025-01-23", leads: 480, customers: 530 },
 { date: "2025-01-24", leads: 132, customers: 180 },
 { date: "2025-01-25", leads: 141, customers: 190 },
 { date: "2025-01-26", leads: 434, customers: 380 },
 { date: "2025-01-27", leads: 448, customers: 490 },
 { date: "2025-01-28", leads: 149, customers: 200 },
 { date: "2025-01-29", leads: 103, customers: 160 },
 { date: "2025-01-30", leads: 446, customers: 400 }
]

const config = {
 leadsVsCustomers: {
  label: "Leads vs. Customers"
 },
 leads: {
  label: "Leads",
  color: "hsl(var(--chart-1))"
 },
 customers: {
  label: "Customers",
  color: "hsl(var(--chart-2))"
 }
} satisfies ChartConfig

export function MetricsBarChart() {
 const [activeChart, setActiveChart] = useState<keyof typeof config>("leads")

 const total = useMemo(() => ({
  leads: data.reduce((acc, curr) => acc + curr.leads, 0),
  customers: data.reduce((acc, curr) => acc + curr.customers, 0)
 }), [])

 return (
  <Card className="col-span-12">
   <div className="flex">
    {["leads", "customers"].map((key) => {
     const chart = key as keyof typeof config
     return (
      <button
       key={chart}
       data-active={activeChart === chart}
       onClick={() => setActiveChart(chart)}
       className="relative z-30 flex flex-1 flex-col justify-center gap-1 px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:px-8 sm:py-6"
      >
       <span className="text-xs text-muted-foreground">{config[chart].label}</span>
       <span className="text-lg font-bold leading-none sm:text-3xl">{total[key as keyof typeof total].toLocaleString()}</span>
      </button>
     )
    })}
   </div>
   <ChartContainer config={config} className="w-full max-h-[300px] p-4">
    <BarChart
     accessibilityLayer
     data={data}
     margin={{
      left: 12,
      right: 12
     }}
    >
     <CartesianGrid vertical={false} />
     <XAxis
      dataKey={"date"}
      tickLine={false}
      tickMargin={8}
      axisLine={false}
      tickFormatter={(value) => {
       const date = new Date(value)
       return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
       })
      }}
     />
     <ChartTooltip
      content={
       <ChartTooltipContent
        nameKey="leadsVsCustomers"
        className="w-[150px]"
        labelFormatter={(value) => {
         return new Date(value).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric"
         })
        }}
       />
      }
     />
     <Bar
      dataKey={activeChart}
      fill={`var(--color-${activeChart})`}
      radius={4}
     />
    </BarChart>
   </ChartContainer>
  </Card>
 )
}