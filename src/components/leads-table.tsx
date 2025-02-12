"use client"

import { useState } from "react"
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreVertical } from "lucide-react"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Input } from "./ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const data: Lead[] = [
 {
  id: "001",
  date: "08/21/2024",
  name: "Philip Burr",
  status: "Appointment",
  city: "Pittsburg",
  state: "PA",
  zip: "15212"
 },
 {
  id: "002",
  date: "11/19/2024",
  name: "Richard Anderson",
  status: "Customer",
  city: "Fulton",
  state: "TX",
  zip: "78418"
 },
 {
  id: "003",
  date: "05/28/2024",
  name: "Elvira Balderas",
  status: "Dead Lead",
  city: "Aransas Pass",
  state: "TX",
  zip: "78336"
 },
 {
  id: "004",
  date: "07/02/2024",
  name: "Brenda Beaver",
  status: "Customer",
  city: "Rockport",
  state: "TX",
  zip: "78382"
 },
 {
  id: "O05",
  date: "11/19/2024",
  name: "Robert Blakeley",
  status: "Customer",
  city: "Aransas Pass",
  state: "TX",
  zip: "78336"
 },
 {
  id: "006",
  date: "08/16/2024",
  name: "Maria Carmen",
  status: "New Lead",
  city: "Fulton",
  state: "TX",
  zip: "78358"
 },
 {
  id: "007",
  date: "01/14/2025",
  name: "Gary Dawson",
  status: "Door Knock",
  city: "Rockport",
  state: "TX",
  zip: "78382"
 },
 {
  id: "008",
  date: "01/30/2025",
  name: "Cale Barnette",
  status: "Setter Follow Up",
  city: "College Station",
  state: "TX",
  zip: "77840"
 },
 {
  id: "009",
  date: "12/15/2024",
  name: "Sterling Bennett",
  status: "Agent Follow Up",
  city: "Dallas",
  state: "TX",
  zip: "75243"
 },
 {
  id: "010",
  date: "08/21/2024",
  name: "Joseph Saenz",
  status: "Appointment",
  city: "Pittsburg",
  state: "PA",
  zip: "15212"
 },
 {
  id: "011",
  date: "11/19/2024",
  name: "Paul Noyce",
  status: "Customer",
  city: "Fulton",
  state: "TX",
  zip: "78418"
 },
 {
  id: "012",
  date: "05/28/2024",
  name: "Joyce Dorsett",
  status: "Dead Lead",
  city: "Aransas Pass",
  state: "TX",
  zip: "78336"
 },
 {
  id: "013",
  date: "07/02/2024",
  name: "Stella Resendez",
  status: "Customer",
  city: "Rockport",
  state: "TX",
  zip: "78382"
 },
 {
  id: "014",
  date: "11/19/2024",
  name: "Michael Ruddick",
  status: "Customer",
  city: "Aransas Pass",
  state: "TX",
  zip: "78336"
 },
 {
  id: "015",
  date: "08/16/2024",
  name: "Sherry Dierlam",
  status: "New Lead",
  city: "Fulton",
  state: "TX",
  zip: "78358"
 },
 {
  id: "016",
  date: "01/14/2025",
  name: "James Kraus",
  status: "Door Knock",
  city: "Rockport",
  state: "TX",
  zip: "78382"
 },
 {
  id: "017",
  date: "01/30/2025",
  name: "Susan Bacarella",
  status: "Setter Follow Up",
  city: "College Station",
  state: "TX",
  zip: "77840"
 },
 {
  id: "018",
  date: "12/15/2024",
  name: "Pablo Mendez",
  status: "Agent Follow Up",
  city: "Dallas",
  state: "TX",
  zip: "75243"
 },
]

export type Lead = {
 id: string
 date: string
 name: string
 status: "New Lead" | "Calling" | "Appointment" | "Door Knock" | "Dead Lead" | "Customer" | "No Show" | "Agent Follow Up" | "Setter Follow Up"
 city: string
 state: string
 zip: string
}

export const columns: ColumnDef<Lead>[] = [
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
  header: "Date",
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
  accessorKey: "city",
  header: ({ column }) => (
   <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
   >
    City
    <ArrowUpDown />
   </Button>
  ),
  cell: ({ row }) => <div>{row.getValue("city")}</div>
 },
 {
  accessorKey: "state",
  header: ({ column }) => (
   <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
   >
    State
    <ArrowUpDown />
   </Button>
  ),
  cell: ({ row }) => <div>{row.getValue("state")}</div>
 },
 {
  accessorKey: "zip",
  header: ({ column }) => (
   <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
   >
    Zip
    <ArrowUpDown />
   </Button>
  ),
  cell: ({ row }) => <div>{row.getValue("zip")}</div>
 },
 {
  id: "actions",
  enableHiding: false,
  cell: ({ row }) => {
   const lead = row.original

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
      <DropdownMenuItem onClick={() => navigator.clipboard.writeText(lead.name)}>
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

export function LeadsTable() {
 const [ sorting, setSorting ] = useState<SortingState>([])
 const [ columnFilters, setColumnFilters ] = useState<ColumnFiltersState>([])
 const [ columnVisibility, setColumnVisibility ] = useState<VisibilityState>({})
 const [ rowSelection, setRowSelection ] = useState({})

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
  <div className="col-span-12 lg:col-span-9">
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
     <Button>Create</Button>
     <Button variant="outline">CSV</Button>
    </div>
   </div>
   <div className="rounded-md border">
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