import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"

export type State = {
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

export function SettingsGeneral() {
 return (
  <section className="grid grid-cols-12 gap-4 items-start p-4">
   <div className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center gap-4 border rounded-md p-4">
    <Avatar className="h-32 w-32">
     <AvatarImage src="/avatar.webp" alt="Jeff Claybrook" />
     <AvatarFallback>JC</AvatarFallback>
    </Avatar>
    <Button>Upload New Avatar</Button>
   </div>
   <div className="col-span-12 lg:col-span-8 border rounded-md p-4">
    <form className="space-y-6">
     <div className="flex flex-col space-y-3">
      <h2 className="text-md">Profile Information</h2>
      <div className="space-y-1.5">
       <Label htmlFor="firstName">First Name</Label>
       <Input type="text" id="firstName" placeholder="First Name" />
      </div>
      <div className="space-y-1.5">
       <Label htmlFor="lastName">Last Name</Label>
       <Input type="text" id="lastName" placeholder="Last Name" />
      </div>
      <div className="space-y-1.5">
       <Label htmlFor="email">Email</Label>
       <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="space-y-1.5">
       <Label htmlFor="phone">Phone</Label>
       <Input type="text" id="phone" placeholder="Phone" />
      </div>
     </div>
     <div className="flex flex-col space-y-3">
      <h2 className="text-md">Address Information</h2>
      <div className="space-y-1.5">
       <Label htmlFor="address">Address</Label>
       <Input type="text" id="address" placeholder="Address" />
      </div>
      <div className="space-y-1.5">
       <Label htmlFor="city">City</Label>
       <Input type="text" id="city" placeholder="City" />
      </div>
      <div className="space-y-1.5">
       <Label>State</Label>
       <Select>
        <SelectTrigger>
         <SelectValue placeholder="State" />
        </SelectTrigger>
        <SelectContent>
         <SelectGroup>
          <SelectLabel>States</SelectLabel>
          {states.map((state, i) => (
           <SelectItem key={i} value={state.value}>{state.label}</SelectItem>
          ))}
         </SelectGroup>
        </SelectContent>
       </Select>
      </div>
      <div className="space-y-1.5">
       <Label htmlFor="zip">Zip</Label>
       <Input type="text" id="zip" placeholder="Zip" />
      </div>
     </div>
     <Button>Save</Button>
    </form>
   </div>
  </section>
 )
}