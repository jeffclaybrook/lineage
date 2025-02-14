"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { PhoneInput } from "../ui/phone-input"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export type State = {
 value: string
 label: string
}

export type Carrier = {
 label: string
}

export type Plan = {
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

const carriers: Carrier[] = [
 { label: "Accendo" },
 { label: "Aetna" },
 { label: "Aflac" },
 { label: "Allianz" },
 { label: "American Amicable" },
 { label: "American General" },
 { label: "American Memorial" },
 { label: "Americo" },
]

const plans: Plan[] = [
 { label: "Level Age 45-80" },
 { label: "Modified Age 45-75" },
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
 dateReceived: z.coerce.date().optional(),
 carrier: z.string().optional(),
 plans: z.string().optional()
})

export function SettingsCreatePolicy() {
 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
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
    <Button className="ml-auto">
     <Plus /> Create New Policy
    </Button>
   </AlertDialogTrigger>
   <AlertDialogContent className="max-w-2xl overflow-auto">
    <AlertDialogHeader>
     <AlertDialogTitle>Create policy</AlertDialogTitle>
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
         name="dateReceived"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Date received</FormLabel>
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
         name="carrier"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Carrier</FormLabel>
           <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
             <SelectTrigger>
              <SelectValue placeholder="Carrier" />
             </SelectTrigger>
            </FormControl>
            <SelectContent>
             {carriers.map((carrier, i) => (
              <SelectItem key={i} value={carrier.label}>{carrier.label}</SelectItem>
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
         name="plans"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Plan</FormLabel>
           <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
             <SelectTrigger>
              <SelectValue placeholder="Lead status" />
             </SelectTrigger>
            </FormControl>
            <SelectContent>
             {plans.map((plan, i) => (
              <SelectItem key={i} value={plan.label}>{plan.label}</SelectItem>
             ))}
            </SelectContent>
           </Select>
           <FormMessage />
          </FormItem>
         )}
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