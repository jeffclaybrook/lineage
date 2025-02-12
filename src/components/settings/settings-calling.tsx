import { Headset, PhoneCall, PhoneIncoming, PhoneOutgoing, Play, SquarePen, Trash2 } from "lucide-react"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

export type Recording = {
 lead: string
 date: string
 from: string
 to: string
 duration: string
}

const recordings: Recording[] = [
 {
  lead: "Jeffrey Claybrook",
  date: "01/08/2025",
  from: "(361) 204-5020",
  to: "(469) 226-7022",
  duration: "00:05"
 },
 {
  lead: "Joe Williamson",
  date: "01/08/2025",
  from: "(361) 309-2023",
  to: "(512) 422-7392",
  duration: "00:04"
 }
]

export function SettingsCalling() {
 return (
  <section className="grid grid-cols-12 gap-4 p-4">
   <div className="col-span-12 lg:col-span-6 border rounded-md p-4">
    <div className="flex flex-col gap-1 mb-4">
     <div className="flex items-center justify-between">
      <h3>My Callback Number</h3>
      <PhoneIncoming className="h-4 w-4" />
     </div>
     <h4 className="text-sm text-muted-foreground">All incoming calls will be routed to this number</h4>
    </div>
    <ul className="flex flex-col gap-2">
     <li className="flex items-center justify-between">
      <p>(512) 422-3292</p>
      <Button variant="secondary" size="icon">
       <SquarePen className="h-4 w-4" />
      </Button>
     </li>
     <li className="flex items-center justify-between">
      <p>(512) 422-3292</p>
      <Button variant="secondary" size="icon">
       <SquarePen className="h-4 w-4" />
      </Button>
     </li>
    </ul>
   </div>
   <div className="col-span-12 lg:col-span-6 border rounded-md p-4">
    <div className="flex flex-col gap-1 mb-4">
     <div className="flex items-center justify-between">
      <h3>My Phone Numbers</h3>
      <PhoneOutgoing className="h-4 w-4" />
     </div>
     <h4 className="text-sm text-muted-foreground">Select an unlimited number of custom outbound caller IDs</h4>
    </div>
    <ul className="flex flex-col gap-2">
     <li className="flex items-center justify-between">
      <p>(361) 204-5020</p>
      <Button variant="destructive" size="icon">
       <Trash2 className="h-4 w-4" />
      </Button>
     </li>
     <li className="flex items-center justify-between">
      <p>(361) 309-2023</p>
      <Button variant="destructive" size="icon">
       <Trash2 className="h-4 w-4" />
      </Button>
     </li>
    </ul>
   </div>
   <div className="col-span-12 border rounded-md p-4">
    <div className="flex flex-col gap-1 mb-4">
     <div className="flex items-center justify-between">
      <h3>Caller Access</h3>
      <PhoneCall className="h-4 w-4" />
     </div>
     <h4 className="text-sm text-muted-foreground">List of users with caller access</h4>
    </div>
    <ul className="flex flex-col gap-4">
     <li className="flex items-center justify-between flex-1">
      <div className="flex items-center gap-4">
       <Avatar>
        <AvatarFallback>JC</AvatarFallback>
       </Avatar>
       <div className="flex flex-col">
        <div className="flex gap-4">
         <p>Jeffrey Claybrook</p>
         <Badge>Enabled</Badge>
        </div>
        <p>jeff@silverbow.io</p>
       </div>
      </div>
      <Button variant="destructive">Disable</Button>
     </li>
     <li className="flex items-center justify-between flex-1">
      <div className="flex items-center gap-4">
       <Avatar>
        <AvatarFallback>JW</AvatarFallback>
       </Avatar>
       <div className="flex flex-col">
        <div className="flex gap-4">
         <p>Joe Williamson</p>
         <Badge variant="outline">Disabled</Badge>
        </div>
        <p>joe@silverbow.io</p>
       </div>
      </div>
      <Button variant="secondary">Enable</Button>
     </li>
    </ul>
   </div>
   <div className="col-span-12 border rounded-md">
    <div className="flex flex-col gap-1 px-4 pt-4 mb-4">
     <div className="flex items-center justify-between">
      <h3>Call Recordings</h3>
      <Headset className="h-4 w-4" />
     </div>
     <h4 className="text-sm text-muted-foreground">A list of call recordings</h4>
    </div>
    <Table>
     <TableHeader>
      <TableRow>
       <TableHead>Lead</TableHead>
       <TableHead>Date</TableHead>
       <TableHead>From</TableHead>
       <TableHead>To</TableHead>
       <TableHead>Duration</TableHead>
       <TableHead className="text-right">Recording</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody>
      {recordings.map((recording, i) => (
       <TableRow key={i}>
        <TableCell className="font-medium">{recording.lead}</TableCell>
        <TableCell>{recording.date}</TableCell>
        <TableCell>{recording.from}</TableCell>
        <TableCell>{recording.to}</TableCell>
        <TableCell>{recording.duration}</TableCell>
        <TableCell className="text-right">
         <Button variant="secondary" size="icon">
          <Play className="h-4 w-4" />
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