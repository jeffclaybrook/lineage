import { Pencil, Plus, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const data = [
 { label: "Waiting to Submit", color: "#ff7f50" },
 { label: "Submitted to Carrier", color: "#ff0000" },
 { label: "Active Policy", color: "#01bfff" },
 { label: "Not Taken by Client", color: "#008800" },
 { label: "Declined by Carrier", color: "#000000" },
 { label: "Client Deceased", color: "#ffd700" },
 { label: "In Danger of Lapse", color: "#1d00ff" },
 { label: "Lapsed", color: "#a0522d" },
 { label: "Canceled", color: "#4682b4" },
]

export function SettingsPolicies() {
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
          <Pencil className="h-4 w-4" />
         </Button>
         <Button size="icon" variant="destructive">
          <Trash2 className="h-4 w-4" />
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