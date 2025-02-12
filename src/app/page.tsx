import { Suspense } from "react"
import { Header } from "@/components/header"
import { LeadsTable } from "@/components/leads-table"
import { Loader } from "@/components/loader"

export default function Home() { 
 return (
  <main className="flex flex-1 flex-col w-full pb-4">
   <Header title="Leads" />
   <Suspense fallback={<Loader />}>
    <LeadsTable />
   </Suspense>
  </main>
 )
}