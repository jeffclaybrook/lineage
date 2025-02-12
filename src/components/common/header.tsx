/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client"

import { useEffect, useState } from "react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage } from "../ui/breadcrumb"
import { SidebarTrigger } from "../ui/sidebar"
import { ModeToggle } from "./mode-toggle"

interface HeaderProps {
 title: string
}

export function Header({ title }: HeaderProps) {
 const [top, setTop] = useState(true)

 useEffect(() => {
  const scrollHandler = () => {
   window.scrollY > 10 ? setTop(false) : setTop(true)
  }
  window.addEventListener("scroll", scrollHandler)
  return () => window.removeEventListener("scroll", scrollHandler)
 }, [top])

 return (
  <header className={`flex items-center justify-between sticky top-0 bg-background p-4 z-40 ${!top && "shadow-sm"}`}>
   <div className="flex items-center gap-3">
    <SidebarTrigger />
    <Breadcrumb>
     <BreadcrumbItem>
      <BreadcrumbPage>{title}</BreadcrumbPage>
     </BreadcrumbItem>
    </Breadcrumb>
   </div>
   <ModeToggle />
  </header>
 )
}