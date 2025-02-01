"use client"

import Link from "next/link"
import { ComponentProps } from "react"
import { usePathname } from "next/navigation"
import { BadgeCheck, Bell, BookOpen, Calendar, ChartColumn, ChevronsUpDown, CreditCard, LogOut, Map, Settings, Sparkles, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, useSidebar } from "./ui/sidebar"

const links = [
 {
  title: "Leads",
  href: "/",
  icon: Users
 },
 {
  title: "Map",
  href: "/map",
  icon: Map
 },
 {
  title: "Calendar",
  href: "/calendar",
  icon: Calendar
 },
 {
  title: "Policies",
  href: "/policies",
  icon: BookOpen
 },
 {
  title: "Metrics",
  href: "/metrics",
  icon: ChartColumn
 },
 {
  title: "Settings",
  href: "/settings",
  icon: Settings
 }
]

export function Navbar({ ...props }: ComponentProps<typeof Sidebar>) {
 const { isMobile } = useSidebar()
 const pathname = usePathname()
 
 return (
  <Sidebar collapsible="icon" {...props}>
   <SidebarHeader>
    <Avatar className="h-8 w-8 rounded-lg p-1">
     <AvatarImage src="/lineage-logo.png" alt="Lineage" />
     <AvatarFallback className="rounded-lg">SB</AvatarFallback>
    </Avatar>
   </SidebarHeader>
   <SidebarContent>
    <SidebarGroup>
     <SidebarGroupLabel>Lineage</SidebarGroupLabel>
     <SidebarGroupContent>
      <SidebarMenu>
       {links.map((link) => (
        <SidebarMenuItem key={link.title}>
         <SidebarMenuButton asChild>
          <Link href={link.href} className={pathname === link.href ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}>
           <link.icon />
           <span>{link.title}</span>
          </Link>
         </SidebarMenuButton>
        </SidebarMenuItem>
       ))}
      </SidebarMenu>
     </SidebarGroupContent>
    </SidebarGroup>
   </SidebarContent>
   <SidebarFooter>
    <SidebarMenu>
     <SidebarMenuItem>
      <DropdownMenu>
       <DropdownMenuTrigger asChild>
        <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
         <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src="/avatar.webp" alt="Jeff Claybrook" />
          <AvatarFallback>JC</AvatarFallback>
         </Avatar>
         <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">Jeff Claybrook</span>
          <span className="truncate text-xs">jeff@silverbow.io</span>
         </div>
         <ChevronsUpDown className="ml-auto size-4" />
        </SidebarMenuButton>
       </DropdownMenuTrigger>
       <DropdownMenuContent
        side={isMobile ? "bottom" : "right"}
        align="end"
        sideOffset={4}
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
       >
        <DropdownMenuLabel className="p-0 font-normal">
         <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar className="h-8 w-8 rounded-lg">
           <AvatarImage src="/avatar.webp" alt="Jeff Claybrook" />
           <AvatarFallback className="rounded-lg">JC</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
           <span className="truncate font-semibold">Jeff Claybrook</span>
           <span className="truncate text-xs">jeff@silverbow.io</span>
          </div>
         </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
         <DropdownMenuItem>
          <Sparkles />
          Upgrade to Pro
         </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
         <DropdownMenuItem>
          <BadgeCheck />
          Account
         </DropdownMenuItem>
         <DropdownMenuItem>
          <CreditCard />
          Billing
         </DropdownMenuItem>
         <DropdownMenuItem>
          <Bell />
          Notifications
         </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
         <LogOut />
         Logout
        </DropdownMenuItem>
       </DropdownMenuContent>
      </DropdownMenu>
     </SidebarMenuItem>
    </SidebarMenu>
   </SidebarFooter>
   <SidebarRail />
  </Sidebar>
 )
}