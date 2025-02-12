import { Pencil, Plus, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

export type Status = {
 label: "Agent Follow Up" | "Appointment" | "Calling" | "Customer" | "Dead Lead" | "Door Knock" | "New Lead" | "No Show" | "Setter Follow Up"
 color: "#ff7f50" | "#ff0000" | "#01bfff" | "#008800" | "#000000" | "#ffd700" | "#1d00ff" | "#a0522d" | "#4682b4"
}

const status: Status[] = [
 { label: "Agent Follow Up", color: "#ff7f50" },
 { label: "Appointment", color: "#ff0000" },
 { label: "Calling", color: "#01bfff" },
 { label: "Customer", color: "#008800" },
 { label: "Dead Lead", color: "#000000" },
 { label: "Door Knock", color: "#ffd700" },
 { label: "New Lead", color: "#1d00ff" },
 { label: "No Show", color: "#a0522d" },
 { label: "Setter Follow Up", color: "#4682b4" }
]

export function SettingsLeads() {
 return (
  <section className="flex flex-col gap-4 p-4">
   <Button className="ml-auto">
    <Plus />
    Create New Status
   </Button>
   <div className="border rounded-md">
    <Table>
     <TableHeader>
      <TableRow>
       <TableHead>Status</TableHead>
       <TableHead>Color</TableHead>
       <TableHead className="text-right">Action</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody>
      {status.map((status, i) => (
       <TableRow key={i}>
        <TableCell>{status.label}</TableCell>
        <TableCell>
         <span className="h-4 w-4 flex rounded-full" style={{ backgroundColor: `${status.color}`}} />
        </TableCell>
        <TableCell className="flex items-center justify-end gap-2">
         <Button variant="secondary" size="icon">
          <Pencil className="h-4 w-4" />
         </Button>
         <Button variant="destructive" size="icon">
          <Trash2 className="h-4 w-4" />
         </Button>
        </TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </div>
  </section>
 )
}