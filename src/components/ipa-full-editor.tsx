"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLocalStorage } from "@/hooks/use-local-storage"

// Define IPA symbols by category
const IPA_SYMBOLS = {
  Vowels: [
    { label: "i", char: "i", desc: "close front unrounded" },
    { label: "y", char: "y", desc: "close front rounded" },
    { label: "ɨ", char: "ɨ", desc: "close central unrounded" },
    { label: "ʉ", char: "ʉ", desc: "close central rounded" },
    { label: "ɯ", char: "ɯ", desc: "close back unrounded" },
    { label: "u", char: "u", desc: "close back rounded" },
    { label: "ɪ", char: "ɪ", desc: "near-close near-front unrounded" },
    { label: "ʏ", char: "ʏ", desc: "near-close near-front rounded" },
    { label: "ʊ", char: "ʊ", desc: "near-close near-back rounded" },
    { label: "e", char: "e", desc: "close-mid front unrounded" },
    { label: "ø", char: "ø", desc: "close-mid front rounded" },
    { label: "ɘ", char: "ɘ", desc: "close-mid central unrounded" },
    { label: "ɵ", char: "ɵ", desc: "close-mid central rounded" },
    { label: "ɤ", char: "ɤ", desc: "close-mid back unrounded" },
    { label: "o", char: "o", desc: "close-mid back rounded" },
    { label: "ə", char: "ə", desc: "mid central" },
    { label: "ɛ", char: "ɛ", desc: "open-mid front unrounded" },
    { label: "œ", char: "œ", desc: "open-mid front rounded" },
    { label: "ɜ", char: "ɜ", desc: "open-mid central unrounded" },
    { label: "ɞ", char: "ɞ", desc: "open-mid central rounded" },
    { label: "ʌ", char: "ʌ", desc: "open-mid back unrounded" },
    { label: "ɔ", char: "ɔ", desc: "open-mid back rounded" },
    { label: "æ", char: "æ", desc: "near-open front unrounded" },
    { label: "ɐ", char: "ɐ", desc: "near-open central" },
    { label: "a", char: "a", desc: "open front unrounded" },
    { label: "ɶ", char: "ɶ", desc: "open front rounded" },
    { label: "ɑ", char: "ɑ", desc: "open back unrounded" },
    { label: "ɒ", char: "ɒ", desc: "open back rounded" },
  ],
  Consonants: [
    { label: "p", char: "p", desc: "voiceless bilabial plosive" },
    { label: "b", char: "b", desc: "voiced bilabial plosive" },
    { label: "t", char: "t", desc: "voiceless alveolar plosive" },
    { label: "d", char: "d", desc: "voiced alveolar plosive" },
    { label: "ʈ", char: "ʈ", desc: "voiceless retroflex plosive" },
    { label: "ɖ", char: "ɖ", desc: "voiced retroflex plosive" },
    { label: "c", char: "c", desc: "voiceless palatal plosive" },
    { label: "ɟ", char: "ɟ", desc: "voiced palatal plosive" },
    { label: "k", char: "k", desc: "voiceless velar plosive" },
    { label: "g", char: "g", desc: "voiced velar plosive" },
    { label: "q", char: "q", desc: "voiceless uvular plosive" },
    { label: "ɢ", char: "ɢ", desc: "voiced uvular plosive" },
    { label: "ʔ", char: "ʔ", desc: "glottal stop" },
    { label: "m", char: "m", desc: "bilabial nasal" },
    { label: "ɱ", char: "ɱ", desc: "labiodental nasal" },
    { label: "n", char: "n", desc: "alveolar nasal" },
    { label: "ɳ", char: "ɳ", desc: "retroflex nasal" },
    { label: "ɲ", char: "ɲ", desc: "palatal nasal" },
    { label: "ŋ", char: "ŋ", desc: "velar nasal" },
    { label: "ɴ", char: "ɴ", desc: "uvular nasal" },
  ],
  Fricatives: [
    { label: "ɸ", char: "ɸ", desc: "voiceless bilabial fricative" },
    { label: "β", char: "β", desc: "voiced bilabial fricative" },
    { label: "f", char: "f", desc: "voiceless labiodental fricative" },
    { label: "v", char: "v", desc: "voiced labiodental fricative" },
    { label: "θ", char: "θ", desc: "voiceless dental fricative" },
    { label: "ð", char: "ð", desc: "voiced dental fricative" },
    { label: "s", char: "s", desc: "voiceless alveolar fricative" },
    { label: "z", char: "z", desc: "voiced alveolar fricative" },
    { label: "ʃ", char: "ʃ", desc: "voiceless postalveolar fricative" },
    { label: "ʒ", char: "ʒ", desc: "voiced postalveolar fricative" },
    { label: "ʂ", char: "ʂ", desc: "voiceless retroflex fricative" },
    { label: "ʐ", char: "ʐ", desc: "voiced retroflex fricative" },
    { label: "ç", char: "ç", desc: "voiceless palatal fricative" },
    { label: "ʝ", char: "ʝ", desc: "voiced palatal fricative" },
    { label: "x", char: "x", desc: "voiceless velar fricative" },
    { label: "ɣ", char: "ɣ", desc: "voiced velar fricative" },
    { label: "χ", char: "χ", desc: "voiceless uvular fricative" },
    { label: "ʁ", char: "ʁ", desc: "voiced uvular fricative" },
    { label: "ħ", char: "ħ", desc: "voiceless pharyngeal fricative" },
    { label: "ʕ", char: "ʕ", desc: "voiced pharyngeal fricative" },
    { label: "h", char: "h", desc: "voiceless glottal fricative" },
    { label: "ɦ", char: "ɦ", desc: "voiced glottal fricative" },
  ],
  Other: [
    { label: "ʋ", char: "ʋ", desc: "labiodental approximant" },
    { label: "ɹ", char: "ɹ", desc: "alveolar approximant" },
    { label: "ɻ", char: "ɻ", desc: "retroflex approximant" },
    { label: "j", char: "j", desc: "palatal approximant" },
    { label: "ɰ", char: "ɰ", desc: "velar approximant" },
    { label: "l", char: "l", desc: "alveolar lateral approximant" },
    { label: "ɭ", char: "ɭ", desc: "retroflex lateral approximant" },
    { label: "ʎ", char: "ʎ", desc: "palatal lateral approximant" },
    { label: "ʟ", char: "ʟ", desc: "velar lateral approximant" },
    { label: "ɬ", char: "ɬ", desc: "voiceless alveolar lateral fricative" },
    { label: "ɮ", char: "ɮ", desc: "voiced alveolar lateral fricative" },
    { label: "ʍ", char: "ʍ", desc: "voiceless labial-velar fricative" },
    { label: "w", char: "w", desc: "voiced labial-velar approximant" },
    { label: "ɥ", char: "ɥ", desc: "voiced labial-palatal approximant" },
    { label: "ʜ", char: "ʜ", desc: "voiceless epiglottal fricative" },
    { label: "ʢ", char: "ʢ", desc: "voiced epiglottal fricative" },
    { label: "ʡ", char: "ʡ", desc: "epiglottal plosive" },
  ],
  Diacritics: [
    { label: "ˈ", char: "ˈ", desc: "primary stress" },
    { label: "ˌ", char: "ˌ", desc: "secondary stress" },
    { label: "ː", char: "ː", desc: "long" },
    { label: "ˑ", char: "ˑ", desc: "half-long" },
    { label: "̆", char: "̆", desc: "extra-short" },
    { label: "̥", char: "̥", desc: "voiceless" },
    { label: "̬", char: "̬", desc: "voiced" },
    { label: "̹", char: "̹", desc: "more rounded" },
    { label: "̜", char: "̜", desc: "less rounded" },
    { label: "̟", char: "̟", desc: "advanced" },
    { label: "̠", char: "̠", desc: "retracted" },
    { label: "̈", char: "̈", desc: "centralized" },
    { label: "̽", char: "̽", desc: "mid-centralized" },
    { label: "̩", char: "̩", desc: "syllabic" },
    { label: "̯", char: "̯", desc: "non-syllabic" },
    { label: "˞", char: "˞", desc: "rhoticity" },
  ],
}

export function IPAFullEditor() {
  const [text, setText] = useLocalStorage("typeit-ipa-full-text", "")
  const [currentTab, setCurrentTab] = useState("Vowels")
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
          <h2 className="text-lg font-medium">Full IPA Keyboard</h2>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={clearText}>
              Clear
            </Button>
            <Button variant="outline" size="sm" onClick={copyAllText}>
              Copy all
            </Button>
          </div>
        </div>

        <Tabs value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="mb-4">
            {Object.keys(IPA_SYMBOLS).map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(IPA_SYMBOLS).map(([category, symbols]) => (
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

