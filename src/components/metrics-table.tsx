import { Sheet } from "lucide-react"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"

export type Invoice = {
 invoice: string
 method: string
 amount: string
}

const data: Invoice[] = [
 { invoice: "INV001", method: "Credit Card", amount: "$250.00" },
 { invoice: "INV002", method: "PayPal", amount: "$150.00" },
 { invoice: "INV003", method: "Bank Transfer", amount: "$350.00" },
 { invoice: "INV004", method: "Credit Card", amount: "$450.00" },
 { invoice: "INV005", method: "PayPal", amount: "$550.00" }
]

export function MetricsTable() {
 return (
  <div className="col-span-12 lg:col-span-6 border rounded-md">
   <div className="flex flex-col p-4">
    <div className="flex items-center justify-between">
     <h4 className="text-xs text-muted-foreground">My Business</h4>
     <Sheet className="h-4 w-4" />
    </div>
    <h3 className="text-sm">This quarter</h3>
   </div>
   <Table>
    <TableHeader>
     <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
     </TableRow>
    </TableHeader>
    <TableBody>
     {data.map((invoice, i) => (
      <TableRow key={i}>
       <TableCell className="font-medium">{invoice.invoice}</TableCell>
       <TableCell>{invoice.method}</TableCell>
       <TableCell className="text-right">{invoice.amount}</TableCell>
      </TableRow>
     ))}
    </TableBody>
    <TableFooter>
     <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">$1,750.00</TableCell>
     </TableRow>
    </TableFooter>
   </Table>
  </div>
 )
}