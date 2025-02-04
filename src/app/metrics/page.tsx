import { Suspense } from "react"
import { DollarSign, Users, UserCheck, UserPlus } from "lucide-react"
import { DashboardCard } from "@/components/dashboard-card"
import { DashboardLineChart } from "@/components/dashboard-line-chart"
import { DashboardTable } from "@/components/dashboard-table"
import { DashboardPieChart } from "@/components/dashboard-pie-chart"
import { MetricsAreaChart } from "@/components/metrics-area-chart"
import { MetricsBarChart } from "@/components/metrics-bar-chart"
import { Header } from "@/components/header"
import { Loader } from "@/components/loader"

export default function Metrics() { 
 return (
  <main className="flex flex-1 flex-col w-full pb-4">
   <Header title="Metrics" />
   <Suspense fallback={<Loader />}>
    <div className="grid lg:grid-cols-12 gap-4 p-4">
     <DashboardCard
      label="Leads"
      amount="1,125"
      description="All time"
      Icon={Users}
     />
     <DashboardCard
      label="Customers"
      amount="225"
      description="+22 this month"
      Icon={UserCheck}
     />
     <DashboardCard
      label="Revenue"
      amount="$8,000"
      description="This year"
      Icon={DollarSign}
     />
     <DashboardCard
      label="New Leads"
      amount="+216"
      description="This month"
      Icon={UserPlus}
     />
     <MetricsBarChart />
     <DashboardPieChart />
     <DashboardLineChart />
     <MetricsAreaChart />
     <DashboardTable />
     <DashboardTable />
    </div>
   </Suspense>
  </main>
 )
}