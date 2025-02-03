import { Suspense } from "react"
import { Header } from "@/components/header"
import { LeadsFilters } from "@/components/leads-filters"
import { LeadsTable } from "@/components/leads-table"
import { Loader } from "@/components/loader"

export default function Home() { 
 return (
  <main className="flex flex-1 flex-col w-full pb-4">
   <Header title="Leads" />
   <Suspense fallback={<Loader />}>
    <div className="grid grid-cols-12 gap-4 p-4">
     <LeadsTable />
     <LeadsFilters />
    </div>
   </Suspense>
  </main>
 )
}