import { Suspense } from "react"
import { Charts } from "@/components/charts"
import { Header } from "@/components/header"
import { Loader } from "@/components/loader"

export default function Metrics() { 
 return (
  <main className="flex flex-1 flex-col w-full pb-4">
   <Header title="Metrics" />
   <Suspense fallback={<Loader />}>
    <div className="grid lg:grid-cols-2 gap-4 p-4">
     <Charts />
    </div>
   </Suspense>
  </main>
 )
}