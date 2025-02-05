import { Sheet } from "lucide-react"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"

const data = [
 {
  invoice: "INV001",
  paymentStatus: "Paid",
  totalAmount: "$250.00",
  paymentMethod: "Credit Card",
 },
 {
  invoice: "INV002",
  paymentStatus: "Pending",
  totalAmount: "$150.00",
  paymentMethod: "PayPal",
 },
 {
  invoice: "INV003",
  paymentStatus: "Unpaid",
  totalAmount: "$350.00",
  paymentMethod: "Bank Transfer",
 },
 {
  invoice: "INV004",
  paymentStatus: "Paid",
  totalAmount: "$450.00",
  paymentMethod: "Credit Card",
 },
 {
  invoice: "INV005",
  paymentStatus: "Paid",
  totalAmount: "$550.00",
  paymentMethod: "PayPal",
 },
 {
  invoice: "INV006",
  paymentStatus: "Pending",
  totalAmount: "$200.00",
  paymentMethod: "Bank Transfer",
 },
 {
  invoice: "INV007",
  paymentStatus: "Unpaid",
  totalAmount: "$300.00",
  paymentMethod: "Credit Card",
 }
]

export function MetricsTable() {
 return (
  <Card className="col-span-12 lg:col-span-6">
   <div className="flex items-start justify-between p-6">
    <div className="flex flex-col space-y-1">
     <CardTitle className="text-sm">My Business</CardTitle>
     <CardDescription>Year 2025</CardDescription>
    </div>
    <Sheet className="h-4 w-4" />
   </div>
   <Table>
    <TableHeader>
     <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
     </TableRow>
    </TableHeader>
    <TableBody>
     {data.map((invoice) => (
      <TableRow key={invoice.invoice}>
       <TableCell className="font-medium">{invoice.invoice}</TableCell>
       <TableCell>{invoice.paymentStatus}</TableCell>
       <TableCell>{invoice.paymentMethod}</TableCell>
       <TableCell className="text-right">{invoice.totalAmount}</TableCell>
      </TableRow>
     ))}
    </TableBody>
    <TableFooter>
     <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$2,500.00</TableCell>
     </TableRow>
    </TableFooter>
   </Table>
  </Card>
 )
}