"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLocalStorage } from "@/hooks/use-local-storage"

// Define currency symbols by region
const CURRENCY_SYMBOLS = {
  Major: [
    { label: "$", char: "$", name: "Dollar" },
    { label: "€", char: "€", name: "Euro" },
    { label: "£", char: "£", name: "Pound" },
    { label: "¥", char: "¥", name: "Yen/Yuan" },
    { label: "₹", char: "₹", name: "Indian Rupee" },
    { label: "₽", char: "₽", name: "Russian Ruble" },
    { label: "₩", char: "₩", name: "Korean Won" },
  ],
  Americas: [
    { label: "$", char: "$", name: "US Dollar" },
    { label: "CA$", char: "CA$", name: "Canadian Dollar" },
    { label: "MX$", char: "MX$", name: "Mexican Peso" },
    { label: "R$", char: "R$", name: "Brazilian Real" },
    { label: "AR$", char: "AR$", name: "Argentine Peso" },
    { label: "CL$", char: "CL$", name: "Chilean Peso" },
    { label: "COL$", char: "COL$", name: "Colombian Peso" },
  ],
  Europe: [
    { label: "€", char: "€", name: "Euro" },
    { label: "£", char: "£", name: "British Pound" },
    { label: "CHF", char: "CHF", name: "Swiss Franc" },
    { label: "kr", char: "kr", name: "Swedish Krona" },
    { label: "Kč", char: "Kč", name: "Czech Koruna" },
    { label: "zł", char: "zł", name: "Polish Złoty" },
    { label: "₽", char: "₽", name: "Russian Ruble" },
    { label: "лв", char: "лв", name: "Bulgarian Lev" },
  ],
  Asia: [
    { label: "¥", char: "¥", name: "Japanese Yen" },
    { label: "CN¥", char: "CN¥", name: "Chinese Yuan" },
    { label: "₹", char: "₹", name: "Indian Rupee" },
    { label: "₩", char: "₩", name: "Korean Won" },
    { label: "₺", char: "₺", name: "Turkish Lira" },
    { label: "₪", char: "₪", name: "Israeli Shekel" },
    { label: "฿", char: "฿", name: "Thai Baht" },
    { label: "₫", char: "₫", name: "Vietnamese Dong" },
    { label: "₱", char: "₱", name: "Philippine Peso" },
  ],
  Other: [
    { label: "A$", char: "A$", name: "Australian Dollar" },
    { label: "NZ$", char: "NZ$", name: "New Zealand Dollar" },
    { label: "R", char: "R", name: "South African Rand" },
    { label: "₦", char: "₦", name: "Nigerian Naira" },
    { label: "₴", char: "₴", name: "Ukrainian Hryvnia" },
    { label: "₸", char: "₸", name: "Kazakhstani Tenge" },
    { label: "؋", char: "؋", name: "Afghan Afghani" },
    { label: "₼", char: "₼", name: "Azerbaijani Manat" },
  ],
  Crypto: [
    { label: "₿", char: "₿", name: "Bitcoin" },
    { label: "Ξ", char: "Ξ", name: "Ethereum" },
    { label: "Ł", char: "Ł", name: "Litecoin" },
    { label: "Ð", char: "Ð", name: "Dogecoin" },
    { label: "ADA", char: "ADA", name: "Cardano" },
    { label: "XRP", char: "XRP", name: "Ripple" },
  ],
}

export function CurrencyEditor() {
  const [text, setText] = useLocalStorage("typeit-currency-text", "")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Handle inserting currency symbols
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

        <Tabs defaultValue="Major">
          <TabsList className="mb-4">
            {Object.keys(CURRENCY_SYMBOLS).map((region) => (
              <TabsTrigger key={region} value={region}>
                {region}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(CURRENCY_SYMBOLS).map(([region, currencies]) => (
            <TabsContent key={region} value={region} className="m-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {currencies.map((currency, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="h-auto py-2 justify-start"
                    onClick={() => insertCharacter(currency.char)}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-lg font-medium">{currency.label}</span>
                      <span className="text-xs text-gray-500">{currency.name}</span>
                    </div>
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

