"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

export type Status = {
 label: string
 color: string
}

const statuses: Status[] = [
 { label: "White", color: "#ffffff" },
 { label: "Red", color: "#ff5733" },
 { label: "Purple", color: "#8a2be2" },
 { label: "Orange", color: "#ff8c00" },
 { label: "Green", color: "#40826d" },
 { label: "Brown", color: "#933d41" },
 { label: "Turquoise", color: "#20b2aa" },
 { label: "Blue", color: "#007bff" },
 { label: "Violet", color: "#c9a0dc" },
]

const formSchema = z.object({
 name: z.string()
})

export function SettingsCreateStatus() {
 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   name: ""
  }
 })

 return (
  <AlertDialog>
   <AlertDialogTrigger asChild>
    <Button className="ml-auto">
     <Plus /> Create New Status
    </Button>
   </AlertDialogTrigger>
   <AlertDialogContent>
    <AlertDialogHeader>
     <AlertDialogTitle>Create status</AlertDialogTitle>
    </AlertDialogHeader>
    <Form {...form}>
     <form className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
       <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
         <FormItem>
          <FormLabel>Status name</FormLabel>
          <FormControl>
           <Input
            type="text"
            placeholder="Status name"
            {...field}
           />
          </FormControl>
          <FormMessage />
         </FormItem>
        )}
       />
      </div>
      <div className="col-span-12 flex items-center justify-between">
       {statuses.map((status, i) => (
        <TooltipProvider key={i}>
         <Tooltip>
          <TooltipTrigger asChild>
           <span className="h-6 w-6 flex rounded-full" style={{ backgroundColor: `${status.color}`, border: "1px solid #f4f4f4" }} />
          </TooltipTrigger>
          <TooltipContent>{status.label}</TooltipContent>
         </Tooltip>
        </TooltipProvider>
       ))}
      </div>
      <div className="col-span-12">
       <AlertDialogFooter>
        <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
        <AlertDialogAction type="submit">Save</AlertDialogAction>
       </AlertDialogFooter>
      </div>
     </form>
    </Form>
   </AlertDialogContent>
  </AlertDialog>
 )
}