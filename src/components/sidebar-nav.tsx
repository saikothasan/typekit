"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Menu } from "lucide-react"

interface SidebarNavProps {
  currentTool: string
}

export function SidebarNav({ currentTool }: SidebarNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const tools = [
    { name: "Currencies", href: "/currencies" },
    { name: "Czech", href: "/languages/czech" },
    { name: "Danish", href: "/languages/danish" },
    { name: "Dutch", href: "/languages/dutch" },
    { name: "Esperanto", href: "/languages/esperanto" },
    { name: "Finnish", href: "/languages/finnish" },
    { name: "French", href: "/languages/french" },
    { name: "German", href: "/languages/german" },
    { name: "Greek", href: "/languages/greek" },
    { name: "Hungarian", href: "/languages/hungarian" },
    { name: "Icelandic", href: "/languages/icelandic" },
    { name: "IPA English", href: "/ipa/english" },
    { name: "IPA Full", href: "/ipa/full" },
    { name: "Italian", href: "/languages/italian" },
    { name: "Maori", href: "/languages/maori" },
    { name: "Math symbols", href: "/math" },
    { name: "Norwegian", href: "/languages/norwegian" },
    { name: "Pinyin", href: "/languages/pinyin" },
    { name: "Polish", href: "/languages/polish" },
    { name: "Portuguese", href: "/languages/portuguese" },
    { name: "Romanian", href: "/languages/romanian" },
    { name: "Russian", href: "/languages/russian" },
    { name: "Spanish", href: "/languages/spanish" },
    { name: "Swedish", href: "/languages/swedish" },
    { name: "Symbols", href: "/symbols" },
    { name: "Turkish", href: "/languages/turkish" },
    { name: "Ukrainian", href: "/languages/ukrainian" },
    { name: "Vietnamese", href: "/languages/vietnamese" },
    { name: "Welsh", href: "/languages/welsh" },
  ]

  // Find current tool name
  const currentToolName =
    tools.find((tool) => tool.href === `/${currentTool}` || tool.href.startsWith(`/${currentTool}/`))?.name ||
    "Choose a tool"

  return (
    <div className="bg-white border rounded-md shadow-sm overflow-hidden">
      <div className="p-3 border-b flex items-center justify-between lg:block">
        <h2 className="text-sm font-medium">Choose your online keyboard:</h2>
        <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-4 w-4 mr-1" />
          <span className="sr-only md:not-sr-only">{currentToolName}</span>
          {isOpen ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
        </Button>
      </div>

      <nav className={cn("space-y-1 max-h-[300px] overflow-y-auto p-2", isOpen ? "block" : "hidden lg:block")}>
        {tools.map((tool) => {
          const isActive = tool.href === `/${currentTool}` || tool.href.startsWith(`/${currentTool}/`)

          return (
            <Link
              key={tool.href}
              href={tool.href}
              className={cn(
                "block px-2 py-1.5 text-sm rounded-md transition-colors",
                isActive ? "bg-[#ff5c39]/10 text-[#ff5c39] font-medium" : "text-gray-700 hover:bg-gray-100",
              )}
              onClick={() => setIsOpen(false)}
            >
              {tool.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

