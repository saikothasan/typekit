"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useLocalStorage } from "@/hooks/use-local-storage"
import Link from "next/link"

export function IPAEditor() {
  const [text, setText] = useLocalStorage("typeit-ipa-text", "")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

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
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-medium">IPA Tools</h2>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={clearText}>
              Clear
            </Button>
            <Button variant="outline" size="sm" onClick={copyAllText}>
              Copy all
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/ipa/english" className="block">
            <div className="bg-white rounded-lg border shadow-sm p-4 h-full transition-all hover:shadow-md hover:border-[#ff5c39]/30">
              <h3 className="text-lg font-medium mb-2">English IPA</h3>
              <p className="text-gray-600 text-sm">
                Simplified IPA symbols for English pronunciation transcription. Includes all vowels and consonants
                needed for standard English.
              </p>
            </div>
          </Link>

          <Link href="/ipa/full" className="block">
            <div className="bg-white rounded-lg border shadow-sm p-4 h-full transition-all hover:shadow-md hover:border-[#ff5c39]/30">
              <h3 className="text-lg font-medium mb-2">Full IPA</h3>
              <p className="text-gray-600 text-sm">
                Complete International Phonetic Alphabet with all symbols for transcribing any language. Includes all
                consonants, vowels, diacritics, and more.
              </p>
            </div>
          </Link>
        </div>
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

