import { Play, Plus, SquarePen, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const data = [
 {
  lead: "Jeffrey Claybrook",
  dateTime: "Feb 5, 2025 19:29",
  fromNumber: "(361) 204-5020",
  toNumber: "(469) 226-7022",
  duration: "0:05"
 },
 {
  lead: "Joe Williamson",
  dateTime: "Feb 5, 2025 16:30",
  fromNumber: "(361) 309-2023",
  toNumber: "(512) 422-73292",
  duration: "0:04"
 },
]

export function SettingsCalling() {
 return (
  <section className="grid grid-cols-12 gap-4 p-4">
   <Card className="col-span-12 lg:col-span-6">
    <CardHeader>
     <CardTitle className="text-sm">My Callback Number</CardTitle>
     <CardDescription>All incoming calls will be routed to this number</CardDescription>
    </CardHeader>
    <CardContent className="flex items-center justify-between">
     <p>(512) 422-3292</p>
     <Button size="icon" variant="secondary">
      <SquarePen className="h-4 w-4" />
     </Button>
    </CardContent>
   </Card>
   <Card className="col-span-12 lg:col-span-6">
    <CardHeader>
     <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col space-y-1">
       <CardTitle className="text-sm">My Phone Numbers</CardTitle>
       <CardDescription>Select an unlimited number of custom outbound caller IDs.</CardDescription>
      </div>
      <Button>
       <Plus className="h-4 w-4" />
       Add
      </Button>
     </div>
    </CardHeader>
    <CardContent className="space-y-3">
     <div className="flex items-center justify-between">
      <p>(361) 204-5020</p>
      <Button size="icon" variant="destructive">
       <Trash2 />
      </Button>
     </div>
     <div className="flex items-center justify-between">
      <p>(361) 309-2023</p>
      <Button size="icon" variant="destructive">
       <Trash2 />
      </Button>
     </div>
    </CardContent>
   </Card>
   <Card className="col-span-12">
    <CardHeader>
     <CardTitle className="text-sm">Call Recordings</CardTitle>
    </CardHeader>
    <CardContent>
     <Table>
      <TableHeader>
       <TableRow>
        <TableHead className="w-[150px]">Lead</TableHead>
        <TableHead>Date & Time</TableHead>
        <TableHead className="text-right">Recording</TableHead>
       </TableRow>
      </TableHeader>
      <TableBody>
       {data.map((recording, i) => (
        <TableRow key={i}>
         <TableCell className="font-medium">{recording.lead}</TableCell>
         <TableCell>{recording.dateTime}</TableCell>
         <TableCell className="text-right">
          <Button size="icon" variant="secondary">
           <Play className="h-4 w-4" />
          </Button>
         </TableCell>
        </TableRow>
       ))}
      </TableBody>
     </Table>
    </CardContent>
   </Card>
  </section>
 )
}