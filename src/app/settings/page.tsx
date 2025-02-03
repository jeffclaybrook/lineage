import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Loader } from "@/components/loader"
import { SettingsApplications } from "@/components/settings-applications"
import { SettingsCalling } from "@/components/settings-calling"
import { SettingsCarriers } from "@/components/settings-carriers"
import { SettingsGeneral } from "@/components/settings-general"
import { SettingsLeads } from "@/components/settings-leads"

export default function Settings() { 
 return (
  <main className="flex flex-1 flex-col w-full pb-4">
   <Header title="Settings" />
   <Suspense fallback={<Loader />}>
    <Tabs defaultValue="general">
     <TabsList className="flex overflow-x-scroll">
      <TabsTrigger value="general" className="flex-1">General</TabsTrigger>
      <TabsTrigger value="calling" className="flex-1">Calling</TabsTrigger>
      <TabsTrigger value="leads" className="flex-1">Leads</TabsTrigger>
      <TabsTrigger value="applications" className="flex-1">Applications</TabsTrigger>
      <TabsTrigger value="carriers" className="flex-1">Carriers</TabsTrigger>
     </TabsList>
     <TabsContent value="general">
      <SettingsGeneral />
     </TabsContent>
     <TabsContent value="calling">
      <SettingsCalling />
     </TabsContent>
     <TabsContent value="leads">
      <SettingsLeads />
     </TabsContent>
     <TabsContent value="applications">
      <SettingsApplications />
     </TabsContent>
     <TabsContent value="carriers">
      <SettingsCarriers />
     </TabsContent>
    </Tabs>
   </Suspense>
  </main>
 )
}