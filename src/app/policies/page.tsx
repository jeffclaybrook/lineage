import { Suspense } from "react"
import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { PoliciesTable } from "@/components/policies-table"

export default function Policies() { 
 return (
  <main className="flex flex-1 flex-col w-full pb-4">
   <Header title="Policies" />
   <Suspense fallback={<Loader />}>
    <div className="grid grid-cols-12 gap-4 p-4">
     <PoliciesTable />
    </div>
   </Suspense>
  </main>
 )
}