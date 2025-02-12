import { Suspense } from "react"
import { Header } from "@/components/common/header"
import { Loader } from "@/components/common/loader"
import { PoliciesTable } from "@/components/policies/policies-table"

export default function Policies() {
 return (
  <main className="flex flex-col flex-1 w-full">
   <Header title="Policies" />
   <Suspense fallback={<Loader />}>
    <PoliciesTable />
   </Suspense>
  </main>
 )
}