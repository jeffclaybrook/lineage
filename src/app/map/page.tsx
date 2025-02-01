import { Suspense } from "react"
import { Header } from "@/components/header"
import { LeadsMap } from "@/components/leads-map"
import { Loader } from "@/components/loader"

export default function Map() { 
 return (
  <main className="flex flex-1 flex-col w-full">
   <Header title="Map" />
   <Suspense fallback={<Loader />}>
    <LeadsMap />
   </Suspense>
  </main>
 )
}