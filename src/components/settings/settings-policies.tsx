import { Pencil, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { SettingsCreatePolicy } from "./settings-create-policy"

export type Policy = {
 label: "Waiting to Submit" | "Submitted to Carrier" | "Active Policy" | "Not Taken by Client" | "Declined by Carrier" | "Client Deceased" | "In Danger of Lapse" | "Lapsed" | "Cancelled"
 color: "#ff7f50" | "#ff0000" | "#01bfff" | "#008800" | "#000000" | "#ffd700" | "#1d00ff" | "#a0522d" | "#4682b4"
}

const policies: Policy[] = [
 { label: "Waiting to Submit", color: "#ff7f50" },
 { label: "Submitted to Carrier", color: "#ff0000" },
 { label: "Active Policy", color: "#01bfff" },
 { label: "Not Taken by Client", color: "#008800" },
 { label: "Declined by Carrier", color: "#000000" },
 { label: "Client Deceased", color: "#ffd700" },
 { label: "In Danger of Lapse", color: "#1d00ff" },
 { label: "Lapsed", color: "#a0522d" },
 { label: "Cancelled", color: "#4682b4" }
]

export function SettingsPolicies() {
 return (
  <section className="flex flex-col gap-4 p-4">
   <SettingsCreatePolicy />
   <div className="border rounded-md">
    <Table>
     <TableHeader>
      <TableRow>
       <TableHead>Policy</TableHead>
       <TableHead>Color</TableHead>
       <TableHead className="text-right">Action</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody>
      {policies.map((policy, i) => (
       <TableRow key={i}>
        <TableCell>{policy.label}</TableCell>
        <TableCell>
         <span className="h-4 w-4 flex rounded-full" style={{ backgroundColor: `${policy.color}`}} />
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