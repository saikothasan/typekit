"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLocalStorage } from "@/hooks/use-local-storage"

// English-specific IPA subset
const ENGLISH_IPA = {
  Vowels: [
    { label: "i", char: "i", desc: "beet, see" },
    { label: "ɪ", char: "ɪ", desc: "bit, sit" },
    { label: "e", char: "e", desc: "bait, say" },
    { label: "ɛ", char: "ɛ", desc: "bet, set" },
    { label: "æ", char: "æ", desc: "bat, sat" },
    { label: "ɑ", char: "ɑ", desc: "bot, father" },
    { label: "ɔ", char: "ɔ", desc: "bought, saw" },
    { label: "o", char: "o", desc: "boat, so" },
    { label: "ʊ", char: "ʊ", desc: "book, put" },
    { label: "u", char: "u", desc: "boot, sue" },
    { label: "ʌ", char: "ʌ", desc: "but, sun" },
    { label: "ə", char: "ə", desc: "about, sofa" },
    { label: "ɚ", char: "ɚ", desc: "butter, worker" },
    { label: "ɝ", char: "ɝ", desc: "bird, fur" },
  ],
  Consonants: [
    { label: "p", char: "p", desc: "pat, spit" },
    { label: "b", char: "b", desc: "bat, bit" },
    { label: "t", char: "t", desc: "top, stop" },
    { label: "d", char: "d", desc: "dog, did" },
    { label: "k", char: "k", desc: "cat, kit" },
    { label: "g", char: "g", desc: "got, give" },
    { label: "f", char: "f", desc: "fat, fit" },
    { label: "v", char: "v", desc: "vat, vet" },
    { label: "θ", char: "θ", desc: "thin, think" },
    { label: "ð", char: "ð", desc: "then, this" },
    { label: "s", char: "s", desc: "sit, see" },
    { label: "z", char: "z", desc: "zip, zoo" },
    { label: "ʃ", char: "ʃ", desc: "ship, dish" },
    { label: "ʒ", char: "ʒ", desc: "measure, vision" },
    { label: "h", char: "h", desc: "hat, who" },
    { label: "m", char: "m", desc: "mat, met" },
    { label: "n", char: "n", desc: "not, net" },
    { label: "ŋ", char: "ŋ", desc: "sing, ring" },
    { label: "l", char: "l", desc: "let, lit" },
    { label: "ɹ", char: "ɹ", desc: "rat, red" },
    { label: "j", char: "j", desc: "yet, yes" },
    { label: "w", char: "w", desc: "wet, win" },
    { label: "ʔ", char: "ʔ", desc: "uh-oh (glottal stop)" },
    { label: "tʃ", char: "tʃ", desc: "church, chin" },
    { label: "dʒ", char: "dʒ", desc: "judge, gin" },
  ],
  "Stress & Other": [
    { label: "ˈ", char: "ˈ", desc: "primary stress" },
    { label: "ˌ", char: "ˌ", desc: "secondary stress" },
    { label: ".", char: ".", desc: "syllable break" },
    { label: "ː", char: "ː", desc: "long vowel" },
  ],
}

export function IPAEnglishEditor() {
  const [text, setText] = useLocalStorage("typeit-ipa-english-text", "")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Handle inserting IPA symbols
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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">English IPA Keyboard</h2>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={clearText}>
              Clear
            </Button>
            <Button variant="outline" size="sm" onClick={copyAllText}>
              Copy all
            </Button>
          </div>
        </div>

        <Tabs defaultValue="Vowels">
          <TabsList className="mb-4">
            {Object.keys(ENGLISH_IPA).map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(ENGLISH_IPA).map(([category, symbols]) => (
            <TabsContent key={category} value={category} className="m-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {symbols.map((symbol, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="h-auto py-2 justify-start"
                    onClick={() => insertCharacter(symbol.char)}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-lg font-medium">{symbol.label}</span>
                      <span className="text-xs text-gray-500 truncate">{symbol.desc}</span>
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

