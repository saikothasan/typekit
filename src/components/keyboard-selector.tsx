"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

type KeyboardCategory = {
  name: string
  keyboards: string[]
}

const KEYBOARD_CATEGORIES: KeyboardCategory[] = [
  {
    name: "Languages",
    keyboards: [
      "Czech",
      "Danish",
      "Dutch",
      "Esperanto",
      "Finnish",
      "French",
      "German",
      "Greek",
      "Hungarian",
      "Icelandic",
      "Italian",
      "Maori",
      "Norwegian",
      "Polish",
      "Portuguese",
      "Romanian",
      "Russian",
      "Spanish",
      "Swedish",
      "Turkish",
      "Ukrainian",
      "Vietnamese",
      "Welsh",
    ],
  },
  {
    name: "Phonetics",
    keyboards: ["IPA English", "IPA Full"],
  },
  {
    name: "Other",
    keyboards: ["Currencies", "Math symbols", "Pinyin", "Symbols"],
  },
]

export function KeyboardSelector() {
  const [selectedKeyboard, setSelectedKeyboard] = useState<string | null>(null)

  const handleKeyboardSelect = (keyboard: string) => {
    setSelectedKeyboard(keyboard)
    // This would trigger the parent component to load the appropriate keyboard layout
  }

  return (
    <div className="border rounded-md p-4 bg-white">
      <ScrollArea className="h-[400px] pr-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {KEYBOARD_CATEGORIES.flatMap((category) =>
            category.keyboards.map((keyboard) => (
              <Button
                key={keyboard}
                variant="ghost"
                className={`justify-start h-auto py-1.5 px-2 font-normal text-sm ${
                  selectedKeyboard === keyboard ? "bg-blue-100 text-blue-800" : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => handleKeyboardSelect(keyboard)}
              >
                {keyboard}
              </Button>
            )),
          )}
        </div>
      </ScrollArea>
    </div>
  )
}

