"use client"

import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Twitter, Youtube, Instagram } from "lucide-react"
import logo from '@/public/logo.png'

const navItems = [
  { label: "EXPLORE", href: "#" },
  { label: "MEMES", href: "#" },
  { label: "BUY/TRADE", href: "#" },
  { label: "FRIENDS OF DOGE", href: "#" },
  { label: "DEBT TRACKER", href: "#" },
  { label: "SPEND TRACKER", href: "#" },
  { label: "DEFICIT", href: "#" },
  { label: "AGENT ID", href: "#" },
  { label: "SHOP MERCH", href: "#" },
]

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
]

export function Sidebar() {
  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <Image src={logo} alt={""} className="w-20 h-20 ml-auto m-2 lg:hidden"/>
        <SheetTrigger asChild className="lg:hidden mt-4 ml-2">
          <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-black p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-black border-r border-gray-800 text-white">
        <SidebarContent />
      </div>
    </>
  )
}

function SidebarContent() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6">
        <Image
          src={logo}
          alt="Doge Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <nav className="flex-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-6 flex gap-4">
        {socialLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <Link key={index} href={link.href} className="text-gray-400 hover:text-white">
              <Icon className="h-5 w-5" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

