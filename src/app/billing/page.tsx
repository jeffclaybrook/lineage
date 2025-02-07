import { Suspense } from "react"
import { Header } from "@/components/header"
import { Loader } from "@/components/loader"

export default function Billing() { 
 return (
  <main className="flex flex-1 flex-col w-full pb-4">
   <Header title="Billing" />
   <Suspense fallback={<Loader />}>
    <Loader />
   </Suspense>
  </main>
 )
}