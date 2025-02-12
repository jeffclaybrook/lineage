import { Suspense } from "react"
import { Header } from "@/components/common/header"
import { Loader } from "@/components/common/loader"

export default function Map() {
 return (
  <main className="flex flex-col flex-1 w-full">
   <Header title="Map" />
   <Suspense fallback={<Loader />}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d858.264755462857!2d-96.3319649174809!3d30.632294136969307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683fc22009a95%3A0x14bf54e8d8c0c18b!2sHQ!5e0!3m2!1sen!2sus!4v1738436249583!5m2!1sen!2sus" width="100%" height="100%" loading="lazy" />
   </Suspense>
  </main>
 )
}