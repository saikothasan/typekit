"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLocalStorage } from "@/hooks/use-local-storage"

// Define symbol categories
const SYMBOLS = {
  Punctuation: [
    { label: "•", char: "•" },
    { label: "·", char: "·" },
    { label: "…", char: "…" },
    { label: "‽", char: "‽" },
    { label: "¿", char: "¿" },
    { label: "¡", char: "¡" },
    { label: "«", char: "«" },
    { label: "»", char: "»" },
    { label: '"', char: '"' },
    { label: '"', char: '"' },
    { label: "'", char: "'" },
    { label: "'", char: "'" },
    { label: "„", char: "„" },
    { label: "‚", char: "‚" },
    { label: "–", char: "–" },
    { label: "—", char: "—" },
    { label: "¶", char: "¶" },
    { label: "§", char: "§" },
    { label: "†", char: "†" },
    { label: "‡", char: "‡" },
    { label: "※", char: "※" },
  ],
  Arrows: [
    { label: "←", char: "←" },
    { label: "→", char: "→" },
    { label: "↑", char: "↑" },
    { label: "↓", char: "↓" },
    { label: "↔", char: "↔" },
    { label: "↕", char: "↕" },
    { label: "↖", char: "↖" },
    { label: "↗", char: "↗" },
    { label: "↘", char: "↘" },
    { label: "↙", char: "↙" },
    { label: "⇐", char: "⇐" },
    { label: "⇒", char: "⇒" },
    { label: "⇑", char: "⇑" },
    { label: "⇓", char: "⇓" },
    { label: "⇔", char: "⇔" },
    { label: "⇕", char: "⇕" },
    { label: "↩", char: "↩" },
    { label: "↪", char: "↪" },
    { label: "↻", char: "↻" },
    { label: "↺", char: "↺" },
  ],
  Math: [
    { label: "±", char: "±" },
    { label: "∓", char: "∓" },
    { label: "×", char: "×" },
    { label: "÷", char: "÷" },
    { label: "√", char: "√" },
    { label: "∞", char: "∞" },
    { label: "≈", char: "≈" },
    { label: "≠", char: "≠" },
    { label: "≤", char: "≤" },
    { label: "≥", char: "≥" },
    { label: "∑", char: "∑" },
    { label: "∏", char: "∏" },
    { label: "∫", char: "∫" },
    { label: "∂", char: "∂" },
    { label: "∇", char: "∇" },
    { label: "∆", char: "∆" },
    { label: "∈", char: "∈" },
    { label: "∉", char: "∉" },
    { label: "∩", char: "∩" },
    { label: "∪", char: "∪" },
    { label: "⊂", char: "⊂" },
    { label: "⊃", char: "⊃" },
    { label: "⊆", char: "⊆" },
    { label: "⊇", char: "⊇" },
  ],
  Currency: [
    { label: "$", char: "$" },
    { label: "€", char: "€" },
    { label: "£", char: "£" },
    { label: "¥", char: "¥" },
    { label: "₹", char: "₹" },
    { label: "₽", char: "₽" },
    { label: "₩", char: "₩" },
    { label: "¢", char: "¢" },
    { label: "₱", char: "₱" },
    { label: "₴", char: "₴" },
    { label: "₿", char: "₿" },
  ],
  Misc: [
    { label: "©", char: "©" },
    { label: "®", char: "®" },
    { label: "™", char: "™" },
    { label: "°", char: "°" },
    { label: "′", char: "′" },
    { label: "″", char: "″" },
    { label: "♠", char: "♠" },
    { label: "♣", char: "♣" },
    { label: "♥", char: "♥" },
    { label: "♦", char: "♦" },
    { label: "★", char: "★" },
    { label: "☆", char: "☆" },
    { label: "☑", char: "☑" },
    { label: "☒", char: "☒" },
    { label: "☐", char: "☐" },
    { label: "✓", char: "✓" },
    { label: "✗", char: "✗" },
    { label: "✘", char: "✘" },
    { label: "♪", char: "♪" },
    { label: "♫", char: "♫" },
    { label: "☼", char: "☼" },
    { label: "☾", char: "☾" },
    { label: "☂", char: "☂" },
    { label: "☯", char: "☯" },
    { label: "☮", char: "☮" },
  ],
  Scientific: [
    { label: "℃", char: "℃" },
    { label: "℉", char: "℉" },
    { label: "Å", char: "Å" },
    { label: "µ", char: "µ" },
    { label: "Ω", char: "Ω" },
    { label: "α", char: "α" },
    { label: "β", char: "β" },
    { label: "γ", char: "γ" },
    { label: "δ", char: "δ" },
    { label: "ε", char: "ε" },
    { label: "θ", char: "θ" },
    { label: "λ", char: "λ" },
    { label: "π", char: "π" },
    { label: "σ", char: "σ" },
    { label: "τ", char: "τ" },
    { label: "φ", char: "φ" },
    { label: "ψ", char: "ψ" },
    { label: "ω", char: "ω" },
  ],
}

export function SymbolsEditor() {
  const [text, setText] = useLocalStorage("typeit-symbols-text", "")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Handle inserting symbols
  const insertCharacter = (char: string) => {
    if (!textareaRef.current) return

    const startPos = textareaRef.current.selectionStart
    const endPos = textareaRef.current.selectionEnd

    const newText = text.substring(0, startPos) + char + text.substring(endPos)

    setText(newText)

    // Set cursor position after the inserted character
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus()
        textareaRef.current.setSelectionRange(startPos + char.length, startPos + char.length)
      }
    }, 0)
  }

  // Clear text
  const clearText = () => {
    if (window.confirm("Are you sure you want to clear all text?")) {
      setText("")
      if (textareaRef.current) {
        textareaRef.current.focus()
      }
    }
  }

  // Copy all text
  const copyAllText = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard!")
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err)
      })
  }

  return (
    <div className="bg-white border rounded-md">
      <div className="p-4 border-b">
        <div className="flex justify-end gap-2 mb-4">
          <Button variant="outline" size="sm" onClick={clearText}>
            Clear
          </Button>
          <Button variant="outline" size="sm" onClick={copyAllText}>
            Copy all
          </Button>
        </div>

        <Tabs defaultValue="Punctuation">
          <TabsList className="mb-4">
            {Object.keys(SYMBOLS).map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(SYMBOLS).map(([category, symbols]) => (
            <TabsContent key={category} value={category} className="m-0">
              <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2">
                {symbols.map((symbol, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="h-10 w-10 text-lg"
                    onClick={() => insertCharacter(symbol.char)}
                  >
                    {symbol.label}
                  </Button>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing here..."
        className="min-h-[200px] font-sans text-base border-0 rounded-none focus-visible:ring-0 focus-visible:border-0"
      />
    </div>
  )
}

