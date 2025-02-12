import { Suspense } from "react"
import { Header } from "@/components/common/header"
import { Loader } from "@/components/common/loader"

export default function Account() {
 return (
  <main className="flex flex-col flex-1 w-full">
   <Header title="Account" />
   <Suspense fallback={<Loader />}>
    <Loader />
   </Suspense>
  </main>
 )
}