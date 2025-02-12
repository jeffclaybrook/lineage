import { Suspense } from "react"
import { Header } from "@/components/common/header"
import { Loader } from "@/components/common/loader"

export default function Billing() {
 return (
  <main className="flex flex-col flex-1 w-full">
   <Header title="Billing" />
   <Suspense fallback={<Loader />}>
    <Loader />
   </Suspense>
  </main>
 )
}