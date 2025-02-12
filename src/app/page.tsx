import { Suspense } from "react"
import { Header } from "@/components/common/header"
import { LeadsTable } from "@/components/leads/leads-table"
import { Loader } from "@/components/common/loader"

export default function Home() {
 return (
  <main className="flex flex-col flex-1 w-full">
   <Header title="Leads" />
   <Suspense fallback={<Loader />}>
    <LeadsTable />
   </Suspense>
  </main>
 )
}