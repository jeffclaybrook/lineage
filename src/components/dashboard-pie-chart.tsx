"use client"

import { Label, Pie, PieChart } from "recharts"
import { ChartPie } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"

const data = [
 { status: "agentFollowUp", leads: 75, fill: "var(--color-agentFollowUp)" },
 { status: "appointment", leads: 54, fill: "var(--color-appointment)" },
 { status: "customer", leads: 64, fill: "var(--color-customer)" },
 { status: "deadLead", leads: 44, fill: "var(--color-deadLead)" },
 { status: "doorKnock", leads: 60, fill: "var(--color-doorKnock)" },
 { status: "newLead", leads: 70, fill: "var(--color-newLead)" },
 { status: "setterFollowUp", leads: 75, fill: "var(--color-setterFollowUp)" }
]

const config = {
 leads: {
  label: "Leads"
 },
 agentFollowUp: {
  label: "Agent Follow Up",
  color: "hsl(var(--chart-1))"
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
 newLead: {
  label: "New Lead",
  color: "hsl(var(--chart-1))"
 },
 setterFollowUp: {
  label: "Setter Follow Up",
  color: "hsl(var(--chart-2))"
 }
} satisfies ChartConfig

export function DashboardPieChart() {
 return (
  <Card className="col-span-6">
   <CardHeader>
    <div className="flex items-center justify-between">
     <CardTitle className="text-sm">Lead Status</CardTitle>
     <ChartPie className="h-4 w-4" />
    </div>
    <CardDescription>All time</CardDescription>
   </CardHeader>
   <CardContent>
    <ChartContainer config={config} className="mx-auto max-h-[300px]">
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
  </Card>
 )
}