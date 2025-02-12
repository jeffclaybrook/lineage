"use client"

import { Label, Pie, PieChart } from "recharts"
import { ChartPie } from "lucide-react"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"

const data = [
 { status: "appointment", leads: 54, fill: "var(--color-appointment)" },
 { status: "customer", leads: 64, fill: "var(--color-customer)" },
 { status: "deadLead", leads: 44, fill: "var(--color-deadLead)" },
 { status: "doorKnock", leads: 60, fill: "var(--color-doorKnock)" },
 { status: "followUp", leads: 60, fill: "var(--color-followUp)" },
 { status: "newLead", leads: 70, fill: "var(--color-newLead)" },
]

const config = {
 leads: {
  label: "Leads"
 },
 appointment: {
  label: "Appointment",
  color: "hsl(var(--chart-2))"
 },
 customer: {
  label: "Customer",
  color: "hsl(var(--chart-3))"
 },
 deadLead: {
  label: "Dead Lead",
  color: "hsl(var(--chart-4))"
 },
 doorKnock: {
  label: "Door Knock",
  color: "hsl(var(--chart-5))"
 },
 followUp: {
  label: "Follow Up",
  color: "hsl(var(--chart-6))"
 },
 newLead: {
  label: "New Lead",
  color: "hsl(var(--chart-7))"
 }
} satisfies ChartConfig

export function MetricsPieChart() {
 return (
  <div className="col-span-12 lg:col-span-6 border rounded-md">
   <div className="flex flex-col p-4">
    <div className="flex items-center justify-between">
     <h4 className="text-xs text-muted-foreground">Leads</h4>
     <ChartPie className="h-4 w-4" />
    </div>
    <h3 className="text-sm">This quarter</h3>
   </div>
   <ChartContainer config={config} className="mx-auto w-full max-h-[300px]">
    <PieChart>
     <ChartTooltip
      cursor={false}
      content={<ChartTooltipContent hideLabel />}
     />
     <Pie
      data={data}
      dataKey="leads"
      nameKey="status"
      innerRadius={80}
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
            352
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
  </div>
 )
}