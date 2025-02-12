"use client"

import { useState } from "react"
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreVertical, Upload } from "lucide-react"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Input } from "../ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { PoliciesCreate } from "./policies-create"

export type Policy = {
 date: string
 name: string
 status: "Active Policy" | "Waiting to Submit" | "Submitted to Carrier" | "Not Taken by Client" | "Declined by Carrier" | "In Danger of Lapse" | "Lapsed" | "Canceled"
 carrier: "Accendo" | "Aetna" | "Aflac" | "Allianz" | "American Amicable" | "American Gneral" | "American Memorial" | "Americo" | "Ameritas" | "Assurant" | "Assurity" | "Balitmore Life" | "Christian Fidelity" | "Columbian" | "Great Western" | "Guarantee Trust Life" | "Oxford" | "Prosperity" | "Royal Neighbors" | "Transamerica" | "Trinity"
 amount: string
 premium: string
}

const data: Policy[] = [
 {
  date: "01/13/2025",
  name: "James Buker",
  status: "Waiting to Submit",
  carrier: "Accendo",
  amount: "$700,000",
  premium: "$6,200"
 },
 {
  date: "01/08/2025",
  name: "Philip Burr",
  status: "Active Policy",
  carrier: "Trinity",
  amount: "$550,000",
  premium: "$4,500"
 },
 {
  date: "12/21/2024",
  name: "Richard Anderson",
  status: "Submitted to Carrier",
  carrier: "Transamerica",
  amount: "$500,000",
  premium: "$4,200"
 },
 {
  date: "01/30/2025",
  name: "Robert Morisson",
  status: "Not Taken by Client",
  carrier: "Columbian",
  amount: "$700,000",
  premium: "$6,200"
 },
 {
  date: "02/10/2025",
  name: "Robert Blakeley",
  status: "Lapsed",
  carrier: "Christian Fidelity",
  amount: "$850,000",
  premium: "$7,200"
 },
 {
  date: "01/18/2025",
  name: "Virginia Santos",
  status: "Active Policy",
  carrier: "American Amicable",
  amount: "$10,000",
  premium: "$1,200"
 },
 {
  date: "01/21/2025",
  name: "Sheryl Escobar",
  status: "In Danger of Lapse",
  carrier: "Prosperity",
  amount: "$700,000",
  premium: "$6,200"
 }
]

export const columns: ColumnDef<Policy>[] = [
 {
  id: "select",
  header: ({ table }) => (
   <Checkbox
    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    aria-label="Select all"
    checked={
     table.getIsAllPageRowsSelected() ||
     (table.getIsSomePageRowsSelected() && "indeterminate")
    }
   />
  ),
  cell: ({ row }) => (
   <Checkbox
    checked={row.getIsSelected()}
    onCheckedChange={(value) => row.toggleSelected(!!value)}
    aria-label="Select row"
   />
  ),
  enableSorting: false,
  enableHiding: false
 },
 {
  accessorKey: "date",
  header: ({ column }) => (
   <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
   >
    Date
    <ArrowUpDown />
   </Button>
  ),
  cell: ({ row }) => (
   <div>{row.getValue("date")}</div>
  )
 },
 {
  accessorKey: "name",
  header: ({ column }) => (
   <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
   >
    Name
    <ArrowUpDown />
   </Button>
  ),
  cell: ({ row }) => <div>{row.getValue("name")}</div>
 },
 {
  accessorKey: "status",
  header: ({ column }) => (
   <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
   >
    Status
    <ArrowUpDown />
   </Button>
  ),
  cell: ({ row }) => <div>{row.getValue("status")}</div>
 },
 {
  accessorKey: "carrier",
  header: ({ column }) => (
   <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
   >
    Carrier
    <ArrowUpDown />
   </Button>
  ),
  cell: ({ row }) => <div>{row.getValue("carrier")}</div>
 },
 {
  accessorKey: "amount",
  header: ({ column }) => (
   <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
   >
    Amount
    <ArrowUpDown />
   </Button>
  ),
  cell: ({ row }) => <div>{row.getValue("amount")}</div>
 },
 {
  accessorKey: "premium",
  header: ({ column }) => (
   <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
   >
    Premium
    <ArrowUpDown />
   </Button>
  ),
  cell: ({ row }) => <div>{row.getValue("premium")}</div>
 },
 {
  id: "actions",
  enableHiding: false,
  cell: ({ row }) => {
   const policy = row.original

   return (
    <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="h-8 w-8 p-0">
       <MoreVertical />
       <span className="sr-only">Open menu</span>
      </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem onClick={() => navigator.clipboard.writeText(policy.name)}>
       Copy Name
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
     </DropdownMenuContent>
    </DropdownMenu>
   )
  }
 }
]

export function PoliciesTable() {
 const [sorting, setSorting] = useState<SortingState>([])
 const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
 const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
 const [rowSelection, setRowSelection] = useState({})

 const table = useReactTable({
  data,
  columns,
  onSortingChange: setSorting,
  onColumnFiltersChange: setColumnFilters,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onColumnVisibilityChange: setColumnVisibility,
  onRowSelectionChange: setRowSelection,
  state: {
   sorting,
   columnFilters,
   columnVisibility,
   rowSelection
  }
 })

 return (
  <div className="p-4">
   <div className="flex items-center justify-between gap-8 pb-4">
    <div className="flex items-center gap-4 flex-1">
     <Input
      placeholder="Search..."
      value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
      className="w-full"
      onChange={(e) => table.getColumn("name")?.setFilterValue(e.target.value)}
     />
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Button variant="outline" className="hidden lg:flex">
        Columns
        <ChevronDown />
       </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
       {table
        .getAllColumns()
        .filter((column) => column.getCanHide())
        .map((column) => (
         <DropdownMenuCheckboxItem
          key={column.id}
          className="capitalize"
          checked={column.getIsVisible()}
          onCheckedChange={(value) => column.toggleVisibility(!!value)}
         >
          {column.id}
         </DropdownMenuCheckboxItem>
        ))
       }
      </DropdownMenuContent>
     </DropdownMenu>
    </div>
    <div className="flex items-center justify-end gap-4 flex-1">
     <PoliciesCreate />
     <Button variant="outline">
      <Upload /> CSV
     </Button>
    </div>
   </div>
   <div className="grid grid-cols-12 gap-4">
    <div className="col-span-12 rounded-md border">
     <Table>
      <TableHeader>
       {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
         {headerGroup.headers.map((header) => (
          <TableHead key={header.id}>
           {header.isPlaceholder
            ? null
            : flexRender(
             header.column.columnDef.header,
             header.getContext()
            )
           }
          </TableHead>
         ))}
        </TableRow>
       ))}
      </TableHeader>
      <TableBody>
       {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
         <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
          {row.getVisibleCells().map((cell) => (
           <TableCell key={cell.id}>
            {flexRender(
             cell.column.columnDef.cell,
             cell.getContext()
            )}
           </TableCell>
          ))}
         </TableRow>
        ))
       ) : (
        <TableRow>
         <TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell>
        </TableRow>
       )}
      </TableBody>
     </Table>
    </div>
   </div>
   <div className="flex items-center justify-end space-x-2 py-4">
    <div className="flex-1 text-sm text-muted-foreground">
     {table.getFilteredSelectedRowModel().rows.length} of{" "}
     {table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
    <div className="space-x-2">
     <Button
      variant="outline"
      size="sm"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
     >
      Previous
     </Button>
     <Button
      variant="outline"
      size="sm"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
     >
      Next
     </Button>
    </div>
   </div>
  </div>
 )
}