import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function LeadsFilters() {
 return (
  <Card className="col-span-12 lg:col-span-3">
   <CardHeader>
    <CardTitle className="text-sm">Lead Status Filters</CardTitle>
   </CardHeader>
   <CardContent>
    <ul className="space-y-3">
     <li className="flex items-center justify-between">
      <div className="flex items-center gap-4">
       <span className="w-4 h-4 rounded-md bg-[#ff7f50]" />
       <span className="text-sm">Agent Follow Up</span>
      </div>
      <span className="text-sm font-medium">10</span>
     </li>
     <li className="flex items-center justify-between">
      <div className="flex items-center gap-4">
       <span className="w-4 h-4 rounded-md bg-[#ff0000]" />
       <span className="text-sm">Appointment</span>
      </div>
      <span className="text-sm font-medium">10</span>
     </li>
     <li className="flex items-center justify-between">
      <div className="flex items-center gap-4">
       <span className="w-4 h-4 rounded-md bg-[#01bfff]" />
       <span className="text-sm">Calling</span>
      </div>
      <span className="text-sm font-medium">27</span>
     </li>
     <li className="flex items-center justify-between">
      <div className="flex items-center gap-4">
       <span className="w-4 h-4 rounded-md bg-[#008800]" />
       <span className="text-sm">Customer</span>
      </div>
      <span className="text-sm font-medium">27</span>
     </li>
     <li className="flex items-center justify-between">
      <div className="flex items-center gap-4">
       <span className="w-4 h-4 rounded-md bg-[#000000]" />
       <span className="text-sm">Dead Lead</span>
      </div>
      <span className="text-sm font-medium">27</span>
     </li>
     <li className="flex items-center justify-between">
      <div className="flex items-center gap-4">
       <span className="w-4 h-4 rounded-md bg-[#ffd700]" />
       <span className="text-sm">Door Knock</span>
      </div>
      <span className="text-sm font-medium">27</span>
     </li>
     <li className="flex items-center justify-between">
      <div className="flex items-center gap-4">
       <span className="w-4 h-4 rounded-md bg-[#1d00ff]" />
       <span className="text-sm">New Lead</span>
      </div>
      <span className="text-sm font-medium">20</span>
     </li>
     <li className="flex items-center justify-between">
      <div className="flex items-center gap-4">
       <span className="w-4 h-4 rounded-md bg-[#a0522d]" />
       <span className="text-sm">No Show</span>
      </div>
      <span className="text-sm font-medium">20</span>
     </li>
     <li className="flex items-center justify-between">
      <div className="flex items-center gap-4">
       <span className="w-4 h-4 rounded-md bg-[#4682b4]" />
       <span className="text-sm">Setter Follow Up</span>
      </div>
      <span className="text-sm font-medium">20</span>
     </li>
    </ul>
   </CardContent>
  </Card>
 )
}