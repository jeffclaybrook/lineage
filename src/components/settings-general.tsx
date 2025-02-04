import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

const states = [
 "Alabama",
 "Alaska",
 "Arizona",
 "Arkansas",
 "California",
 "Colorado",
 "Connecticut",
 "Delaware",
 "Florida",
 "Georgia",
 "Hawaii",
 "Idaho",
 "Illinois",
 "Indiana",
 "Iowa",
 "Kansas",
 "Kentucky",
 "Louisiana",
 "Maine",
 "Maryland",
 "Massachusetts",
 "Michigan",
 "Minnesota",
 "Mississippi",
 "Missouri",
 "Montana",
 "Nebraska",
 "Nevada",
 "New Hampshire",
 "New Jersey",
 "New Mexico",
 "New York",
 "North Carolina",
 "North Dakota",
 "Ohio",
 "Oklahoma",
 "Oregon",
 "Pennsylvania",
 "Rhode Island",
 "South Carolina",
 "South Dakota",
 "Tennessee",
 "Texas",
 "Utah",
 "Vermont",
 "Virginia",
 "Washington",
 "West Virginia",
 "Wisconsin",
 "Wyoming"
]

export function SettingsGeneral() {
 return (
  <section className="grid lg:grid-cols-12 gap-4 items-start p-4">
   <Card className="col-span-12 lg:col-span-4">
    <CardHeader className="items-center">
     <Avatar className="h-32 w-32">
      <AvatarImage src="/avatar.webp" alt="Jeff Claybrook" />
      <AvatarFallback>JC</AvatarFallback>
     </Avatar>
    </CardHeader>
    <CardContent className="flex justify-center">
     <Button>Upload New Avatar</Button>
    </CardContent>
   </Card>
   <Card className="col-span-12 lg:col-span-8">
    <CardHeader>
     <form className="space-y-6">
      <div className="flex flex-col space-y-3">
       <CardTitle className="text-md">Profile Information</CardTitle>
       <div className="space-y-1.5">
        <Label htmlFor="firstName">First Name</Label>
        <Input type="text" id="firstName" placeholder="First Name" />
       </div>
       <div className="space-y-1.5">
        <Label htmlFor="lastName">Last Name</Label>
        <Input type="text" id="lastName" placeholder="Last Name" />
       </div>
       <div className="space-y-1.5">
        <Label htmlFor="emailAddress">Email Address</Label>
        <Input type="text" id="emailAddress" placeholder="Email Address" />
       </div>
       <div className="space-y-1.5">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input type="text" id="phoneNumber" placeholder="Phone Number" />
       </div>
      </div>
      <div className="flex flex-col space-y-3">
       <CardTitle className="text-md">Address Information</CardTitle>
       <div className="space-y-1.5">
        <Label htmlFor="streetAddress">Street Address</Label>
        <Input type="text" id="streetAddress" placeholder="Street Address" />
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
            <SelectItem key={i} value={state}>{state}</SelectItem>
           ))}
          </SelectGroup>
         </SelectContent>
        </Select>
       </div>
       <div className="space-y-1.5">
        <Label htmlFor="zipCode">Zip Code</Label>
        <Input type="text" id="zipCode" placeholder="Zip Code" />
       </div>
      </div>
      <Button>Save</Button>
     </form>
    </CardHeader>
   </Card>
  </section>
 )
}