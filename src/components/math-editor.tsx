"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLocalStorage } from "@/hooks/use-local-storage"

// Define math symbol categories
const MATH_SYMBOLS = {
  General: [
    { label: "(", char: "(" },
    { label: ")", char: ")" },
    { label: "[", char: "[" },
    { label: "]", char: "]" },
    { label: "{", char: "{" },
    { label: "}", char: "}" },
    { label: "⟨", char: "⟨" },
    { label: "⟩", char: "⟩" },
    { label: "↑", char: "↑" },
    { label: "←", char: "←" },
    { label: "→", char: "→" },
    { label: "∈", char: "∈" },
    { label: "∉", char: "∉" },
    { label: "∋", char: "∋" },
    { label: "ℳ", char: "ℳ" },
    { label: "′", char: "′" },
    { label: "″", char: "″" },
    { label: "‴", char: "‴" },
    { label: "−", char: "−" },
    { label: "—", char: "—" },
  ],
  Fractions: [
    { label: "½", char: "½" },
    { label: "¼", char: "¼" },
    { label: "⅓", char: "⅓" },
    { label: "⅔", char: "⅔" },
    { label: "⅕", char: "⅕" },
    { label: "⅖", char: "⅖" },
    { label: "⅗", char: "⅗" },
    { label: "⅘", char: "⅘" },
    { label: "⅙", char: "⅙" },
    { label: "⅚", char: "⅚" },
    { label: "⅛", char: "⅛" },
    { label: "⅜", char: "⅜" },
    { label: "⅝", char: "⅝" },
    { label: "⅞", char: "⅞" },
  ],
  Operators: [
    { label: "+", char: "+" },
    { label: "−", char: "−" },
    { label: "×", char: "×" },
    { label: "÷", char: "÷" },
    { label: "±", char: "±" },
    { label: "∓", char: "∓" },
    { label: "∗", char: "∗" },
    { label: "∙", char: "∙" },
    { label: "√", char: "√" },
    { label: "∛", char: "∛" },
    { label: "∜", char: "∜" },
    { label: "∝", char: "∝" },
    { label: "∞", char: "∞" },
    { label: "∫", char: "∫" },
    { label: "∬", char: "∬" },
    { label: "∭", char: "∭" },
    { label: "∮", char: "∮" },
    { label: "∯", char: "∯" },
    { label: "∰", char: "∰" },
    { label: "∇", char: "∇" },
    { label: "∂", char: "∂" },
    { label: "∆", char: "∆" },
    { label: "∑", char: "∑" },
    { label: "∏", char: "∏" },
    { label: "∐", char: "∐" },
  ],
  Relations: [
    { label: "=", char: "=" },
    { label: "≠", char: "≠" },
    { label: "<", char: "<" },
    { label: ">", char: ">" },
    { label: "≤", char: "≤" },
    { label: "≥", char: "≥" },
    { label: "≪", char: "≪" },
    { label: "≫", char: "≫" },
    { label: "≈", char: "≈" },
    { label: "≅", char: "≅" },
    { label: "≡", char: "≡" },
    { label: "≢", char: "≢" },
    { label: "∼", char: "∼" },
    { label: "≃", char: "≃" },
    { label: "≄", char: "≄" },
    { label: "≇", char: "≇" },
    { label: "≊", char: "≊" },
    { label: "≍", char: "≍" },
    { label: "≎", char: "≎" },
    { label: "≐", char: "≐" },
    { label: "≒", char: "≒" },
    { label: "≓", char: "≓" },
  ],
  Sets: [
    { label: "∅", char: "∅" },
    { label: "∖", char: "∖" },
    { label: "∩", char: "∩" },
    { label: "∪", char: "∪" },
    { label: "⊂", char: "⊂" },
    { label: "⊃", char: "⊃" },
    { label: "⊆", char: "⊆" },
    { label: "⊇", char: "⊇" },
    { label: "⊊", char: "⊊" },
    { label: "⊋", char: "⊋" },
    { label: "⊄", char: "⊄" },
    { label: "⊅", char: "⊅" },
    { label: "⊈", char: "⊈" },
    { label: "⊉", char: "⊉" },
    { label: "⊍", char: "⊍" },
    { label: "⊎", char: "⊎" },
    { label: "⊓", char: "⊓" },
    { label: "⊔", char: "⊔" },
  ],
  Greek: [
    { label: "α", char: "α" },
    { label: "β", char: "β" },
    { label: "γ", char: "γ" },
    { label: "δ", char: "δ" },
    { label: "ε", char: "ε" },
    { label: "ζ", char: "ζ" },
    { label: "η", char: "η" },
    { label: "θ", char: "θ" },
    { label: "κ", char: "κ" },
    { label: "λ", char: "λ" },
    { label: "μ", char: "μ" },
    { label: "ν", char: "ν" },
    { label: "ξ", char: "ξ" },
    { label: "π", char: "π" },
    { label: "ρ", char: "ρ" },
    { label: "σ", char: "σ" },
    { label: "τ", char: "τ" },
    { label: "υ", char: "υ" },
    { label: "φ", char: "φ" },
    { label: "χ", char: "χ" },
    { label: "ψ", char: "ψ" },
    { label: "ω", char: "ω" },
    { label: "Γ", char: "Γ" },
    { label: "Δ", char: "Δ" },
    { label: "Θ", char: "Θ" },
    { label: "Λ", char: "Λ" },
    { label: "Ξ", char: "Ξ" },
    { label: "Π", char: "Π" },
    { label: "Σ", char: "Σ" },
    { label: "Φ", char: "Φ" },
    { label: "Ψ", char: "Ψ" },
    { label: "Ω", char: "Ω" },
  ],
  Logic: [
    { label: "∧", char: "∧" },
    { label: "∨", char: "∨" },
    { label: "¬", char: "¬" },
    { label: "⊕", char: "⊕" },
    { label: "⊻", char: "⊻" },
    { label: "⊼", char: "⊼" },
    { label: "⊽", char: "⊽" },
    { label: "⋅", char: "⋅" },
    { label: "⊢", char: "⊢" },
    { label: "⊣", char: "⊣" },
    { label: "⊤", char: "⊤" },
    { label: "⊥", char: "⊥" },
    { label: "⊨", char: "⊨" },
    { label: "⊭", char: "⊭" },
    { label: "⊩", char: "⊩" },
    { label: "⊮", char: "⊮" },
    { label: "⊫", char: "⊫" },
    { label: "⊯", char: "⊯" },
    { label: "∀", char: "∀" },
    { label: "∃", char: "∃" },
    { label: "∄", char: "∄" },
    { label: "∴", char: "∴" },
    { label: "∵", char: "∵" },
  ],
  Numbers: [
    { label: "0", char: "0" },
    { label: "1", char: "1" },
    { label: "2", char: "2" },
    { label: "3", char: "3" },
    { label: "4", char: "4" },
    { label: "5", char: "5" },
    { label: "6", char: "6" },
    { label: "7", char: "7" },
    { label: "8", char: "8" },
    { label: "9", char: "9" },
    { label: ".", char: "." },
    { label: ",", char: "," },
    { label: ":", char: ":" },
    { label: ";", char: ";" },
    { label: "!", char: "!" },
    { label: "?", char: "?" },
    { label: "'", char: "'" },
    { label: '"', char: '"' },
    { label: "/", char: "/" },
    { label: "\\", char: "\\" },
    { label: "|", char: "|" },
    { label: "_", char: "_" },
    { label: "^", char: "^" },
  ],
  Scientific: [
    { label: "°", char: "°" },
    { label: "′", char: "′" },
    { label: "″", char: "″" },
    { label: "‴", char: "‴" },
    { label: "µ", char: "µ" },
    { label: "‰", char: "‰" },
    { label: "‱", char: "‱" },
    { label: "℃", char: "℃" },
    { label: "℉", char: "℉" },
    { label: "℗", char: "℗" },
    { label: "℠", char: "℠" },
    { label: "™", char: "™" },
    { label: "©", char: "©" },
    { label: "®", char: "®" },
  ],
}

export function MathEditor() {
  const [text, setText] = useLocalStorage("typeit-math-text", "")
  const [currentTab, setCurrentTab] = useState("General")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Handle inserting special characters
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

  // Handle text formatting
  const formatText = (format: "bold" | "italic" | "superscript" | "subscript") => {
    if (!textareaRef.current) return

    const startPos = textareaRef.current.selectionStart
    const endPos = textareaRef.current.selectionEnd
    const selectedText = text.substring(startPos, endPos)

    if (selectedText.length === 0) return

    let formattedText = selectedText

    // Simple formatting using Unicode characters (limited functionality)
    switch (format) {
      case "bold":
        // This is a simplification - real math bold would use proper math bold Unicode
        formattedText = `𝐛${selectedText}𝐛`
        break
      case "italic":
        // This is a simplification - real math italic would use proper math italic Unicode
        formattedText = `𝑖${selectedText}𝑖`
        break
      case "superscript":
        // Map only numbers and some characters to superscript
        formattedText = selectedText
          .split("")
          .map((char) => {
            const superscripts: Record<string, string> = {
              "0": "⁰",
              "1": "¹",
              "2": "²",
              "3": "³",
              "4": "⁴",
              "5": "⁵",
              "6": "⁶",
              "7": "⁷",
              "8": "⁸",
              "9": "⁹",
              "+": "⁺",
              "-": "⁻",
              "=": "⁼",
              "(": "⁽",
              ")": "⁾",
              n: "ⁿ",
              i: "ⁱ",
            }
            return superscripts[char] || char
          })
          .join("")
        break
      case "subscript":
        // Map only numbers and some characters to subscript
        formattedText = selectedText
          .split("")
          .map((char) => {
            const subscripts: Record<string, string> = {
              "0": "₀",
              "1": "₁",
              "2": "₂",
              "3": "₃",
              "4": "₄",
              "5": "₅",
              "6": "₆",
              "7": "₇",
              "8": "₈",
              "9": "₉",
              "+": "₊",
              "-": "₋",
              "=": "₌",
              "(": "₍",
              ")": "₎",
              a: "ₐ",
              e: "ₑ",
              o: "ₒ",
              x: "ₓ",
              h: "ₕ",
              k: "ₖ",
              l: "ₗ",
              m: "ₘ",
              n: "ₙ",
              p: "ₚ",
              s: "ₛ",
              t: "ₜ",
            }
            return subscripts[char] || char
          })
          .join("")
        break
    }

    const newText = text.substring(0, startPos) + formattedText + text.substring(endPos)
    setText(newText)

    // Set cursor position after the formatted text
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus()
        const newCursorPos = startPos + formattedText.length
        textareaRef.current.setSelectionRange(newCursorPos, newCursorPos)
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
      <div className="p-2 border-b flex flex-wrap gap-1">
        <Button variant="outline" size="sm" className="h-8 w-8 p-0 font-bold" onClick={() => formatText("bold")}>
          B
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0 italic" onClick={() => formatText("italic")}>
          I
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("superscript")}>
          x<sup>2</sup>
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("subscript")}>
          x<sub>2</sub>
        </Button>
        <Button variant="outline" size="sm" className="h-8 px-2" onClick={() => insertCharacter("=")}>
          =
        </Button>
        <Button variant="outline" size="sm" className="h-8 px-2" onClick={() => insertCharacter("≠")}>
          ≠
        </Button>
        <div className="flex-1"></div>
        <Button variant="outline" size="sm" className="h-8" onClick={clearText}>
          Clear
        </Button>
        <Button variant="outline" size="sm" className="h-8" onClick={copyAllText}>
          Copy all
        </Button>
      </div>

      <Textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing here..."
        className="min-h-[200px] font-mono text-base border-0 rounded-none focus-visible:ring-0 focus-visible:border-0"
      />

      <div className="p-4 border-t">
        <Tabs value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="mb-4">
            {Object.keys(MATH_SYMBOLS).map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(MATH_SYMBOLS).map(([category, symbols]) => (
            <TabsContent key={category} value={category} className="m-0">
              <div className="flex flex-wrap gap-1">
                {symbols.map((symbol, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="h-8 min-w-[2rem] font-mono"
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
    </div>
  )
}

