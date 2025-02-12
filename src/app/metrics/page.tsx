import { Suspense } from "react"
import { CircleDollarSign, DollarSign, Users, UserCheck } from "lucide-react"
import { MetricsAreaChart } from "@/components/metrics-area-chart"
import { MetricsBarChart } from "@/components/metrics-bar-chart"
import { MetricsCard } from "@/components/metrics-card"
import { MetricsPieChart } from "@/components/metrics-pie-chart"
import { MetricsTable } from "@/components/metrics-table"
import { Header } from "@/components/header"
import { Loader } from "@/components/loader"

export default function Metrics() {
 return (
  <main className="flex flex-col flex-1 w-full">
   <Header title="Metrics" />
   <Suspense fallback={<Loader />}>
    <section className="grid grid-cols-12 gap-4 p-4">
     <MetricsCard
      title="1,125"
      subtitle="Leads"
      description="This year"
      Icon={Users}
     />
     <MetricsCard
      title="425"
      subtitle="Customers"
      description="This year"
      Icon={UserCheck}
     />
     <MetricsCard
      title="$10,293"
      subtitle="Revenue"
      description="This year"
      Icon={DollarSign}
     />
     <MetricsCard
      title="$4,090"
      subtitle="Spent"
      description="This year"
      Icon={CircleDollarSign}
     />
     <MetricsBarChart />
     <MetricsPieChart />
     <MetricsTable />
     <MetricsAreaChart />
    </section>
   </Suspense>
  </main>
 )
}