"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { VirtualKeyboard } from "@/components/virtual-keyboard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface LanguageEditorProps {
  language: string
  characters: { label: string; char: string }[]
  categories?: Record<string, { label: string; char: string }[]>
}

export function LanguageEditor({ language, characters, categories }: LanguageEditorProps) {
  const [text, setText] = useLocalStorage(`typeit-${language.toLowerCase()}-text`, "")
  const [copySuccess, setCopySuccess] = useState(false)
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
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err)
      })
  }

  return (
    <div className="bg-white border rounded-md shadow overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">{language} Keyboard</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={clearText} className="flex items-center gap-1">
              <Trash2 className="h-4 w-4" />
              <span className="hidden sm:inline">Clear</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={copyAllText}
              className={cn("flex items-center gap-1", copySuccess ? "text-green-600 border-green-600" : "")}
            >
              <Copy className="h-4 w-4" />
              <span className="hidden sm:inline">{copySuccess ? "Copied!" : "Copy"}</span>
            </Button>
          </div>
        </div>

        {categories ? (
          <Tabs defaultValue={Object.keys(categories)[0]} className="w-full">
            <TabsList className="mb-4 w-full justify-start overflow-x-auto">
              {Object.keys(categories).map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(categories).map(([category, chars]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <VirtualKeyboard characters={chars} onCharacterClick={insertCharacter} />
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <VirtualKeyboard characters={characters} onCharacterClick={insertCharacter} />
        )}
      </div>

      <Textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing here..."
        className="min-h-[200px] md:min-h-[300px] font-sans text-base border-0 rounded-none focus-visible:ring-0 focus-visible:border-0 resize-y"
      />
    </div>
  )
}

