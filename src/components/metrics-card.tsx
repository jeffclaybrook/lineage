import { LucideIcon } from "lucide-react"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

interface MetricsCardProps {
 title: string
 description: string
 label: string
 Icon: LucideIcon
}

export function MetricsCard({
 title,
 description,
 label,
 Icon
}: MetricsCardProps) {
 return (
  <Card className="col-span-6 lg:col-span-3">
   <div className="flex items-start justify-between p-6">
    <div className="flex flex-col space-y-1">
     <p className="text-sm">{label}</p>
     <CardTitle>{title}</CardTitle>
     <CardDescription>{description}</CardDescription>
    </div>
    <Icon className="h-4 w-4" />
   </div>
  </Card>
 )
}