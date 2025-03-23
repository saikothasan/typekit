"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VirtualKeyboardProps {
  characters: { label: string; char: string }[]
  onCharacterClick: (char: string) => void
  className?: string
}

export function VirtualKeyboard({ characters, onCharacterClick, className }: VirtualKeyboardProps) {
  const [activeKey, setActiveKey] = useState<string | null>(null)

  const handleKeyClick = (char: string) => {
    setActiveKey(char)
    onCharacterClick(char)

    // Reset active state after a short delay for visual feedback
    setTimeout(() => {
      setActiveKey(null)
    }, 200)
  }

  return (
    <div className={cn("p-4 bg-white border rounded-md shadow-sm", className)}>
      <div className="grid grid-cols-10 gap-1 sm:gap-2 md:gap-3">
        {characters.map((item, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={cn(
              "h-10 md:h-12 min-w-[2rem] font-medium transition-all duration-200 relative",
              activeKey === item.char ? "bg-primary/20 border-primary" : "hover:bg-gray-100",
              "after:content-[''] after:absolute after:inset-0 after:bg-black/5 after:opacity-0 active:after:opacity-100",
            )}
            onClick={() => handleKeyClick(item.char)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

