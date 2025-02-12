import { Suspense } from "react"
import { Header } from "@/components/header"
import { Loader } from "@/components/loader"

export default function Calendar() { 
 return (
  <main className="flex flex-1 flex-col w-full pb-4">
   <Header title="Calendar" />
   <Suspense fallback={<Loader />}>
    <iframe src="https://calendar.google.com/calendar/embed?src=jeff%40silverbow.io&ctz=America%2FChicago" width="100%" height="100%" />
   </Suspense>
  </main>
 )
}