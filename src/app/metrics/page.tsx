import { Suspense } from "react"
import { DollarSign, Users, UserCheck, UserPlus } from "lucide-react"
import { MetricsAreaChart } from "@/components/metrics-area-chart"
import { MetricsBarChart } from "@/components/metrics-bar-chart"
import { MetricsCard } from "@/components/metrics-card"
import { MetricsLineChart } from "@/components/metrics-line-chart"
import { MetricsPieChart } from "@/components/metrics-pie-chart"
import { MetricsTable } from "@/components/metrics-table"
import { Header } from "@/components/header"
import { Loader } from "@/components/loader"

export default function Metrics() { 
 return (
  <main className="flex flex-1 flex-col w-full pb-4">
   <Header title="Metrics" />
   <Suspense fallback={<Loader />}>
    <div className="grid grid-cols-12 gap-4 p-4">
     <MetricsCard
      title="1,125"
      description="All time"
      label="Leads"
      Icon={Users}
     />
     <MetricsCard
      title="225"
      description="+22 this month"
      label="Customers"
      Icon={UserCheck}
     />
     <MetricsCard
      title="$8,000"
      description="This year"
      label="Revenue"
      Icon={DollarSign}
     />
     <MetricsCard
      title="+216"
      description="This month"
      label="New Leads"
      Icon={UserPlus}
     />
     <MetricsBarChart />
     <MetricsPieChart />
     <MetricsLineChart />
     <MetricsAreaChart />
     <MetricsTable />
    </div>
   </Suspense>
  </main>
 )
}