import { LucideIcon } from "lucide-react"

interface MetricsCardProps {
 title: string
 subtitle: string
 description: string
 Icon: LucideIcon
}

export function MetricsCard({
 title,
 subtitle,
 description,
 Icon
}: MetricsCardProps) {
 return (
  <div className="flex flex-col col-span-6 lg:col-span-3 rounded-md border p-4">
   <div className="flex items-center justify-between">
    <h4 className="text-xs text-muted-foreground">{subtitle}</h4>
    <Icon className="h-4 w-4" />
   </div>
   <h2 className="text-2xl font-semibold">{title}</h2>
   <h3 className="text-sm">{description}</h3>
  </div>
 )
}