"use client"

import * as z from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { format } from "date-fns"
import { Calendar as CalendarIcon, CloudUpload, Paperclip, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from "../ui/file-upload"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { PhoneInput } from "../ui/phone-input"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export type State = {
 value: string
 label: string
}

export type Source = {
 value: string
 label: string
}

export type Status = {
 value: string
 label: string
}

const states: State[] = [
 { value: "alabama", label: "Alabama" },
 { value: "alaska", label: "Alaska" },
 { value: "arizona", label: "Arizona" },
 { value: "arkansas", label: "Arkansas" },
 { value: "california", label: "California" },
 { value: "colorado", label: "Colorado" },
 { value: "connecticut", label: "Connecticut" },
 { value: "delaware", label: "Delaware" },
 { value: "florida", label: "Florida" },
 { value: "georgia", label: "Georgia" },
 { value: "hawaii", label: "Hawaii" },
 { value: "idaho", label: "Idaho" },
 { value: "illinois", label: "Illinois" },
 { value: "indiana", label: "Indiana" },
 { value: "iowa", label: "Iowa" },
 { value: "kansas", label: "Kansas" },
 { value: "kentucky", label: "Kentucky" },
 { value: "louisiana", label: "Louisiana" },
 { value: "maine", label: "Maine" },
 { value: "maryland", label: "Maryland" },
 { value: "massachusetts", label: "Massachusetts" },
 { value: "michigan", label: "Michigan" },
 { value: "minnesota", label: "Minnesota" },
 { value: "mississippi", label: "Mississippi" },
 { value: "missouri", label: "Missouri" },
 { value: "montana", label: "Montana" },
 { value: "nebraska", label: "Nebraska" },
 { value: "nevada", label: "Nevada" },
 { value: "newHampshire", label: "New Hampshire" },
 { value: "newJersey", label: "New Jersey" },
 { value: "newMexico", label: "New Mexico" },
 { value: "newYork", label: "New York" },
 { value: "northCarolina", label: "North Carolina" },
 { value: "northDakota", label: "North Dakota" },
 { value: "ohio", label: "Ohio" },
 { value: "oklahoma", label: "Oklahoma" },
 { value: "oregon", label: "Oregon" },
 { value: "pennsylvania", label: "Pennsylvania" },
 { value: "rhodeIsland", label: "Rhode Island" },
 { value: "southCarolina", label: "South Carolina" },
 { value: "southDakota", label: "South Dakota" },
 { value: "tennessee", label: "Tennessee" },
 { value: "texas", label: "Texas" },
 { value: "utah", label: "Utah" },
 { value: "vermont", label: "Vermont" },
 { value: "virginia", label: "Virginia" },
 { value: "washington", label: "Washington" },
 { value: "westVirginia", label: "West Virginia" },
 { value: "wisconson", label: "Wisconson" },
 { value: "wyoming", label: "Wyoming" }
]

const sources: Source[] = [
 { value: "directMail", label: "Direct Mail" },
 { value: "fexDirectMail", label: "FEX Direct Mail" },
 { value: "fexInternet", label: "FEX Internet" },
 { value: "internet", label: "Internet" },
 { value: "medicareDirectMail", label: "Medicare Direct Mail" },
 { value: "medicareInternet", label: "Medicare Internet" },
 { value: "other", label: "Other" },
 { value: "telemarket", label: "Telemarket" }
]

const statuses: Status[] = [
 { value: "agentFollowUp", label: "Agent Follow-up" },
 { value: "appointment", label: "Appointment" },
 { value: "calling", label: "Calling" },
 { value: "customer", label: "Customer" },
 { value: "deadLead", label: "Dead Lead" },
 { value: "doorKnock", label: "Door Knock" },
 { value: "exhausted", label: "Exhausted" },
 { value: "followUp", label: "Follow-up" },
 { value: "newLead", label: "New Lead" },
 { value: "other", label: "Other" },
 { value: "setterFollowUp", label: "Setter Follow-up" }
]

const formSchema = z.object({
 name: z.string(),
 phone: z.string().optional(),
 email: z.string().optional(),
 address: z.string().optional(),
 city: z.string().optional(),
 state: z.string().optional(),
 zip: z.string().optional(),
 county: z.string().optional(),
 dateOfBirth: z.coerce.date().optional(),
 leadSource: z.string().optional(),
 leadStatus: z.string().optional(),
 dateReceived: z.coerce.date().optional(),
 notes: z.string().optional(),
 attachments: z.string().optional()
})

export function LeadsCreate() {
 const [files, setFiles] = useState<File[] | null>(null)

 const dropZoneConfig = {
  maxFiles: 5,
  maxSize: 1024 * 1024 * 4,
  multiple: true
 }

 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   "dateOfBirth": new Date(),
   "dateReceived": new Date(),
  }
 })

 const onSubmit = (values: z.infer<typeof formSchema>) => {
  try {
   console.log(values)
   toast(
    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
     <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    </pre>
   )
  } catch (error) {
   console.error("Form submission error", error)
   toast.error("Unable to submit form. Please try again.")
  }
 }

 return (
  <AlertDialog>
   <AlertDialogTrigger asChild>
    <Button>
     <Plus /> Create
    </Button>
   </AlertDialogTrigger>
   <AlertDialogContent className="max-w-2xl overflow-auto">
    <AlertDialogHeader>
     <AlertDialogTitle>Create lead</AlertDialogTitle>
    </AlertDialogHeader>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-12 gap-4">
       <div className="col-span-6">
        <FormField
         control={form.control}
         name="name"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Name</FormLabel>
           <FormControl>
            <Input
             type="text"
             placeholder="Name"
             {...field}
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="col-span-6">
        <FormField
         control={form.control}
         name="phone"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Phone</FormLabel>
           <FormControl>
            <PhoneInput
             placeholder="Phone"
             defaultCountry="US"
             {...field}
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="col-span-6">
        <FormField
         control={form.control}
         name="email"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Email</FormLabel>
           <FormControl>
            <Input
             type="email"
             placeholder="Email"
             {...field}
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="col-span-6">
        <FormField
         control={form.control}
         name="address"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Address</FormLabel>
           <FormControl>
            <Input
             type="text"
             placeholder="Address"
             {...field}
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="col-span-3">
        <FormField
         control={form.control}
         name="city"
         render={({ field }) => (
          <FormItem>
           <FormLabel>City</FormLabel>
           <FormControl>
            <Input
             type="text"
             placeholder="City"
             {...field}
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="col-span-3">
        <FormField
         control={form.control}
         name="state"
         render={({ field }) => (
          <FormItem>
           <FormLabel>State</FormLabel>
           <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
             <SelectTrigger>
              <SelectValue placeholder="State" />
             </SelectTrigger>
            </FormControl>
            <SelectContent>
             {states.map((state, i) => (
              <SelectItem key={i} value={state.value}>{state.label}</SelectItem>
             ))}
            </SelectContent>
           </Select>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="col-span-3">
        <FormField
         control={form.control}
         name="zip"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Zip</FormLabel>
           <FormControl>
            <Input
             type="text"
             placeholder="Zip"
             {...field}
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="col-span-3">
        <FormField
         control={form.control}
         name="county"
         render={({ field }) => (
          <FormItem>
           <FormLabel>County</FormLabel>
           <FormControl>
            <Input
             type="text"
             placeholder="County"
             {...field}
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="col-span-4">
        <FormField
         control={form.control}
         name="dateOfBirth"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Date of birth</FormLabel>
           <Popover>
            <PopoverTrigger asChild>
             <FormControl>
              <Button
               variant={"outline"}
               className={cn(
                "w-full pl-3 text-left font-normal",
                !field.value && "text-muted-foreground"
               )}
              >
               {field.value ? (
                format(field.value, "PPP")
               ) : (
                <span>Pick a date</span>
               )}
               <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
             </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
             <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              initialFocus
             />
            </PopoverContent>
           </Popover>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="col-span-4">
        <FormField
         control={form.control}
         name="leadSource"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Lead Source</FormLabel>
           <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
             <SelectTrigger>
              <SelectValue placeholder="Lead source" />
             </SelectTrigger>
            </FormControl>
            <SelectContent>
             {sources.map((source, i) => (
              <SelectItem key={i} value={source.value}>{source.label}</SelectItem>
             ))}
            </SelectContent>
           </Select>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="col-span-4">
        <FormField
         control={form.control}
         name="leadStatus"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Lead Status</FormLabel>
           <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
             <SelectTrigger>
              <SelectValue placeholder="Lead status" />
             </SelectTrigger>
            </FormControl>
            <SelectContent>
             {statuses.map((status, i) => (
              <SelectItem key={i} value={status.value}>{status.label}</SelectItem>
             ))}
            </SelectContent>
           </Select>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="col-span-12">
        <FormField
         control={form.control}
         name="attachments"
         render={({ field }) => {
          console.log(field)
          return (
           <FormItem>
            <FormLabel>Attachments</FormLabel>
            <FormControl>
             <FileUploader
              value={files}
              onValueChange={setFiles}
              dropzoneOptions={dropZoneConfig}
              className="relative bg-background rounded-lg p-2"
             >
              <FileInput
               id="fileInput"
               className="outline-dashed outline-1 outline-slate-500"
              >
               <div className="flex items-center justify-center flex-col p-8 w-full">
                <CloudUpload className="text-gray-500 w-10 h-10" />
                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                 <span className="font-semibold">Click to Upload</span>
                 &nbsp; or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, PDF, or GIF</p> 
               </div>
              </FileInput>
              <FileUploaderContent>
               {files &&
                files.length > 0 &&
                files.map((file, i) => (
                 <FileUploaderItem key={i} index={i}>
                  <Paperclip className="h-4 w-4 stroke-current" />
                  <span>{file.name}</span>
                 </FileUploaderItem>
                ))
               }
              </FileUploaderContent>
             </FileUploader>
           </FormControl>
          </FormItem>
          )
         }}
        />
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