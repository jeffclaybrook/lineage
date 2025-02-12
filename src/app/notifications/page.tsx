import { Suspense } from "react"
import { Header } from "@/components/common/header"
import { Loader } from "@/components/common/loader"

export default function Notifications() {
 return (
  <main className="flex flex-col flex-1 w-full">
   <Header title="Notifications" />
   <Suspense fallback={<Loader />}>
    <Loader />
   </Suspense>
  </main>
 )
}