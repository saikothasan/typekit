"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { SpecialCharacterButton } from "@/components/special-character-button"
import { useLocalStorage } from "@/hooks/use-local-storage"

// Define keyboard layouts for different languages
const KEYBOARD_LAYOUTS: Record<string, { label: string; char: string }[]> = {
  French: [
    { label: "é", char: "é" },
    { label: "è", char: "è" },
    { label: "ê", char: "ê" },
    { label: "ë", char: "ë" },
    { label: "à", char: "à" },
    { label: "â", char: "â" },
    { label: "ù", char: "ù" },
    { label: "û", char: "û" },
    { label: "ç", char: "ç" },
    { label: "ô", char: "ô" },
    { label: "œ", char: "œ" },
    { label: "î", char: "î" },
    { label: "ï", char: "ï" },
    { label: "É", char: "É" },
    { label: "È", char: "È" },
    { label: "Ê", char: "Ê" },
    { label: "Ë", char: "Ë" },
    { label: "À", char: "À" },
    { label: "Â", char: "Â" },
    { label: "Ù", char: "Ù" },
    { label: "Û", char: "Û" },
    { label: "Ç", char: "Ç" },
    { label: "Ô", char: "Ô" },
    { label: "Œ", char: "Œ" },
    { label: "Î", char: "Î" },
    { label: "Ï", char: "Ï" },
  ],
  Spanish: [
    { label: "á", char: "á" },
    { label: "é", char: "é" },
    { label: "í", char: "í" },
    { label: "ó", char: "ó" },
    { label: "ú", char: "ú" },
    { label: "ü", char: "ü" },
    { label: "ñ", char: "ñ" },
    { label: "¿", char: "¿" },
    { label: "¡", char: "¡" },
    { label: "Á", char: "Á" },
    { label: "É", char: "É" },
    { label: "Í", char: "Í" },
    { label: "Ó", char: "Ó" },
    { label: "Ú", char: "Ú" },
    { label: "Ü", char: "Ü" },
    { label: "Ñ", char: "Ñ" },
  ],
  German: [
    { label: "ä", char: "ä" },
    { label: "ö", char: "ö" },
    { label: "ü", char: "ü" },
    { label: "ß", char: "ß" },
    { label: "Ä", char: "Ä" },
    { label: "Ö", char: "Ö" },
    { label: "Ü", char: "Ü" },
  ],
  // Default layout with common special characters
  Default: [
    { label: "á", char: "á" },
    { label: "à", char: "à" },
    { label: "â", char: "â" },
    { label: "ä", char: "ä" },
    { label: "ã", char: "ã" },
    { label: "å", char: "å" },
    { label: "é", char: "é" },
    { label: "è", char: "è" },
    { label: "ê", char: "ê" },
    { label: "ë", char: "ë" },
    { label: "í", char: "í" },
    { label: "ì", char: "ì" },
    { label: "î", char: "î" },
    { label: "ï", char: "ï" },
    { label: "ó", char: "ó" },
    { label: "ò", char: "ò" },
    { label: "ô", char: "ô" },
    { label: "ö", char: "ö" },
    { label: "õ", char: "õ" },
    { label: "ú", char: "ú" },
    { label: "ù", char: "ù" },
    { label: "û", char: "û" },
    { label: "ü", char: "ü" },
    { label: "ñ", char: "ñ" },
    { label: "ç", char: "ç" },
  ],
}

export function TextEditor() {
  const [text, setText] = useLocalStorage("typeit-text", "")
  const [currentKeyboard, setCurrentKeyboard] = useState("Default")
  const [cursorPosition, setCursorPosition] = useState<number | null>(null)
  const [textareaRef, setTextareaRef] = useState<HTMLTextAreaElement | null>(null)

  // Handle inserting special characters
  const insertCharacter = (char: string) => {
    if (!textareaRef) return

    const startPos = textareaRef.selectionStart
    const endPos = textareaRef.selectionEnd

    const newText = text.substring(0, startPos) + char + text.substring(endPos)

    setText(newText)

    // Set cursor position after the inserted character
    setTimeout(() => {
      if (textareaRef) {
        textareaRef.focus()
        textareaRef.setSelectionRange(startPos + char.length, startPos + char.length)
      }
    }, 0)
  }

  // Handle keyboard change
  const handleKeyboardChange = (keyboard: string) => {
    if (KEYBOARD_LAYOUTS[keyboard]) {
      setCurrentKeyboard(keyboard)
    } else {
      setCurrentKeyboard("Default")
    }
  }

  // Auto-save functionality is handled by the useLocalStorage hook

  useEffect(() => {
    // Set French as the initial keyboard
    handleKeyboardChange("French")
  }, [])

  return (
    <div className="border rounded-md p-4 bg-white">
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            variant={currentKeyboard === "French" ? "default" : "outline"}
            size="sm"
            onClick={() => handleKeyboardChange("French")}
          >
            French
          </Button>
          <Button
            variant={currentKeyboard === "Spanish" ? "default" : "outline"}
            size="sm"
            onClick={() => handleKeyboardChange("Spanish")}
          >
            Spanish
          </Button>
          <Button
            variant={currentKeyboard === "German" ? "default" : "outline"}
            size="sm"
            onClick={() => handleKeyboardChange("German")}
          >
            German
          </Button>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {KEYBOARD_LAYOUTS[currentKeyboard].map((item, index) => (
            <SpecialCharacterButton key={index} character={item.char} onClick={() => insertCharacter(item.char)} />
          ))}
        </div>
      </div>

      <Textarea
        ref={(ref) => setTextareaRef(ref)}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing here..."
        className="min-h-[200px] font-sans text-base"
        onSelect={(e) => {
          const target = e.target as HTMLTextAreaElement
          setCursorPosition(target.selectionStart)
        }}
      />

      <div className="mt-4 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            if (window.confirm("Are you sure you want to clear the text?")) {
              setText("")
            }
          }}
        >
          Clear
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            navigator.clipboard
              .writeText(text)
              .then(() => {
                alert("Text copied to clipboard!")
              })
              .catch((err) => {
                console.error("Failed to copy text: ", err)
              })
          }}
        >
          Copy to Clipboard
        </Button>
      </div>
    </div>
  )
}

