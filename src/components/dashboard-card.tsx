import { LucideIcon } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DashboardCardProps {
 label: string
 amount: string
 description: string
 Icon: LucideIcon
}

export function DashboardCard({
 label,
 amount,
 description,
 Icon
}: DashboardCardProps) {
 return (
  <Card className="col-span-12 lg:col-span-3">
   <CardHeader>
    <div className="flex items-center justify-between">
     <p className="text-sm">{label}</p>
     <Icon className="h-4 w-4" />
    </div>
    <CardTitle>{amount}</CardTitle>
    <CardDescription>{description}</CardDescription>
   </CardHeader>
  </Card>
 )
}