"use client"

import { useMemo, useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"

const data = [
 { date: "2024-04-01", leads: 222, customers: 150 },
 { date: "2024-04-02", leads: 97, customers: 180 },
 { date: "2024-04-03", leads: 167, customers: 120 },
 { date: "2024-04-04", leads: 242, customers: 260 },
 { date: "2024-04-05", leads: 373, customers: 290 },
 { date: "2024-04-06", leads: 301, customers: 340 },
 { date: "2024-04-07", leads: 245, customers: 180 },
 { date: "2024-04-08", leads: 409, customers: 320 },
 { date: "2024-04-09", leads: 59, customers: 110 },
 { date: "2024-04-10", leads: 261, customers: 190 },
 { date: "2024-04-11", leads: 327, customers: 350 },
 { date: "2024-04-12", leads: 292, customers: 210 },
 { date: "2024-04-13", leads: 342, customers: 380 },
 { date: "2024-04-14", leads: 137, customers: 220 },
 { date: "2024-04-15", leads: 120, customers: 170 },
 { date: "2024-04-16", leads: 138, customers: 190 },
 { date: "2024-04-17", leads: 446, customers: 360 },
 { date: "2024-04-18", leads: 364, customers: 410 },
 { date: "2024-04-19", leads: 243, customers: 180 },
 { date: "2024-04-20", leads: 89, customers: 150 },
 { date: "2024-04-21", leads: 137, customers: 200 },
 { date: "2024-04-22", leads: 224, customers: 170 },
 { date: "2024-04-23", leads: 138, customers: 230 },
 { date: "2024-04-24", leads: 387, customers: 290 },
 { date: "2024-04-25", leads: 215, customers: 250 },
 { date: "2024-04-26", leads: 75, customers: 130 },
 { date: "2024-04-27", leads: 383, customers: 420 },
 { date: "2024-04-28", leads: 122, customers: 180 },
 { date: "2024-04-29", leads: 315, customers: 240 },
 { date: "2024-04-30", leads: 454, customers: 380 },
 { date: "2024-05-01", leads: 165, customers: 220 },
 { date: "2024-05-02", leads: 293, customers: 310 },
 { date: "2024-05-03", leads: 247, customers: 190 },
 { date: "2024-05-04", leads: 385, customers: 420 },
 { date: "2024-05-05", leads: 481, customers: 390 },
 { date: "2024-05-06", leads: 498, customers: 520 },
 { date: "2024-05-07", leads: 388, customers: 300 },
 { date: "2024-05-08", leads: 149, customers: 210 },
 { date: "2024-05-09", leads: 227, customers: 180 },
 { date: "2024-05-10", leads: 293, customers: 330 },
 { date: "2024-05-11", leads: 335, customers: 270 },
 { date: "2024-05-12", leads: 197, customers: 240 },
 { date: "2024-05-13", leads: 197, customers: 160 },
 { date: "2024-05-14", leads: 448, customers: 490 },
 { date: "2024-05-15", leads: 473, customers: 380 },
 { date: "2024-05-16", leads: 338, customers: 400 },
 { date: "2024-05-17", leads: 499, customers: 420 },
 { date: "2024-05-18", leads: 315, customers: 350 },
 { date: "2024-05-19", leads: 235, customers: 180 },
 { date: "2024-05-20", leads: 177, customers: 230 },
 { date: "2024-05-21", leads: 82, customers: 140 },
 { date: "2024-05-22", leads: 81, customers: 120 },
 { date: "2024-05-23", leads: 252, customers: 290 },
 { date: "2024-05-24", leads: 294, customers: 220 },
 { date: "2024-05-25", leads: 201, customers: 250 },
 { date: "2024-05-26", leads: 213, customers: 170 },
 { date: "2024-05-27", leads: 420, customers: 460 },
 { date: "2024-05-28", leads: 233, customers: 190 },
 { date: "2024-05-29", leads: 78, customers: 130 },
 { date: "2024-05-30", leads: 340, customers: 280 },
 { date: "2024-05-31", leads: 178, customers: 230 },
 { date: "2024-06-01", leads: 178, customers: 200 },
 { date: "2024-06-02", leads: 470, customers: 410 },
 { date: "2024-06-03", leads: 103, customers: 160 },
 { date: "2024-06-04", leads: 439, customers: 380 },
 { date: "2024-06-05", leads: 88, customers: 140 },
 { date: "2024-06-06", leads: 294, customers: 250 },
 { date: "2024-06-07", leads: 323, customers: 370 },
 { date: "2024-06-08", leads: 385, customers: 320 },
 { date: "2024-06-09", leads: 438, customers: 480 },
 { date: "2024-06-10", leads: 155, customers: 200 },
 { date: "2024-06-11", leads: 92, customers: 150 },
 { date: "2024-06-12", leads: 492, customers: 420 },
 { date: "2024-06-13", leads: 81, customers: 130 },
 { date: "2024-06-14", leads: 426, customers: 380 },
 { date: "2024-06-15", leads: 307, customers: 350 },
 { date: "2024-06-16", leads: 371, customers: 310 },
 { date: "2024-06-17", leads: 475, customers: 520 },
 { date: "2024-06-18", leads: 107, customers: 170 },
 { date: "2024-06-19", leads: 341, customers: 290 },
 { date: "2024-06-20", leads: 408, customers: 450 },
 { date: "2024-06-21", leads: 169, customers: 210 },
 { date: "2024-06-22", leads: 317, customers: 270 },
 { date: "2024-06-23", leads: 480, customers: 530 },
 { date: "2024-06-24", leads: 132, customers: 180 },
 { date: "2024-06-25", leads: 141, customers: 190 },
 { date: "2024-06-26", leads: 434, customers: 380 },
 { date: "2024-06-27", leads: 448, customers: 490 },
 { date: "2024-06-28", leads: 149, customers: 200 },
 { date: "2024-06-29", leads: 103, customers: 160 },
 { date: "2024-06-30", leads: 446, customers: 400 }
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

export function DashboardBarChart() {
 const [activeChart, setActiveChart] = useState<keyof typeof config>("leads")

 const total = useMemo(() => ({
  leads: data.reduce((acc, curr) => acc + curr.leads, 0),
  customers: data.reduce((acc, curr) => acc + curr.customers, 0)
 }), [])

 return (
  <Card className="col-span-12">
   <CardHeader>
    <div className="flex items-start justify-between">
     <CardTitle className="text-sm">Leads vs Customers</CardTitle>
     <div className="flex">
      {["leads", "customers"].map((key) => {
       const chart = key as keyof typeof config
       return (
        <button
         key={chart}
         data-active={activeChart === chart}
         onClick={() => setActiveChart(chart)}
         className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
        >
         <span className="text-xs text-muted-foreground">{config[chart].label}</span>
         <span className="text-lg font-bold leading-none sm:text-3xl">{total[key as keyof typeof total].toLocaleString()}</span>
        </button>
       )
      })}
     </div>
    </div>
   </CardHeader>
   <CardContent>
    <ChartContainer config={config} className="w-full max-h-[300px]">
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
   </CardContent>
  </Card>
 )
}