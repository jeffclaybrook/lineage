"use client"

import { EllipsisVertical, Plus } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const data = [
 {
  carrierName: "Aetna",
  carrierPlanCode: "AETN-01",
  carrierPlanName: "AETN *Level & Graded Age 60-80"
 }
]

export function SettingsCarriers() {
 return (
  <section className="flex flex-col gap-4 p-4">
   <Button className="ml-auto">
    <Plus />
    Add New Carrier
   </Button>
   <Card>
    <Table>
     <TableHeader>
      <TableRow>
       <TableHead>Carrier Name</TableHead>
       <TableHead>Carrier Plan Code</TableHead>
       <TableHead>Carrier Plan Name</TableHead>
       <TableHead></TableHead>
      </TableRow>
     </TableHeader>
     <TableBody>
      {data.map((carrier, i) => (
       <TableRow key={i}>
        <TableCell className="font-medium">{carrier.carrierName}</TableCell>
        <TableCell>{carrier.carrierPlanCode}</TableCell>
        <TableCell>{carrier.carrierPlanName}</TableCell>
        <TableCell>
         <DropdownMenu>
          <DropdownMenuTrigger asChild>
           <Button size="icon" variant="ghost">
            <EllipsisVertical />
            <span className="sr-only">Open menu</span>
           </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
           <DropdownMenuLabel>Actions</DropdownMenuLabel>
           <DropdownMenuItem onClick={() => navigator.clipboard.writeText(carrier.carrierName)}>Copy Carrier Name</DropdownMenuItem>
           <DropdownMenuSeparator />
           <DropdownMenuItem>Edit</DropdownMenuItem>
           <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
         </DropdownMenu>
        </TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </Card>
  </section>
 )
}