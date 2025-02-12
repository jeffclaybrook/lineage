import { Suspense } from "react"
import { Header } from "@/components/common/header"
import { Loader } from "@/components/common/loader"

export default function Calendar() {
 return (
  <main className="flex flex-col flex-1 w-full">
   <Header title="Calendar" />
   <Suspense fallback={<Loader />}>
    <iframe src="https://calendar.google.com/calendar/embed?src=jeff%40silverbow.io&ctz=America%2FChicago" width="100%" height="100%" />
   </Suspense>
  </main>
 )
}