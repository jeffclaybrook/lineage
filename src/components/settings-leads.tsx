import { Pencil, Plus, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const data = [
 { label: "Agent follow-up", color: "#ff7f50" },
 { label: "Appointment", color: "#ff0000" },
 { label: "Calling", color: "#01bfff" },
 { label: "Customer", color: "#008800" },
 { label: "Dead Lead", color: "#000000" },
 { label: "Door Knock", color: "#ffd700" },
 { label: "New Lead", color: "#1d00ff" },
 { label: "No Show", color: "#a0522d" },
 { label: "Setter follow-up", color: "#4682b4" },
]

export function SettingsLeads() {
 return (
  <section className="flex flex-col gap-4 p-4">
   <Button className="ml-auto">
    <Plus />
    Create New Status
   </Button>
   <Card>
    <Table>
     <TableHeader>
      <TableRow>
       <TableHead>Status</TableHead>
       <TableHead>Color</TableHead>
       <TableHead className="text-right">Action</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody>
      {data.map((status, i) => (
       <TableRow key={i}>
        <TableCell>{status.label}</TableCell>
        <TableCell>
         <span className={`flex w-4 h-4 rounded-md bg-[${status.color}]`} />
        </TableCell>
        <TableCell className="flex items-center justify-end gap-2">
         <Button size="icon" variant="secondary">
          <Pencil className="w-4 h-4" />
         </Button>
         <Button size="icon" variant="destructive">
          <Trash2 className="w-4 h-4" />
         </Button>
        </TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </Card>
  </section>
 )
}