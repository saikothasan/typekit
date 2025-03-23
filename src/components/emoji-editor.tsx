"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLocalStorage } from "@/hooks/use-local-storage"

// Define emoji categories
const EMOJI = {
  Smileys: [
    { label: "😀", char: "😀" },
    { label: "😃", char: "😃" },
    { label: "😄", char: "😄" },
    { label: "😁", char: "😁" },
    { label: "😆", char: "😆" },
    { label: "😅", char: "😅" },
    { label: "🤣", char: "🤣" },
    { label: "😂", char: "😂" },
    { label: "🙂", char: "🙂" },
    { label: "🙃", char: "🙃" },
    { label: "😉", char: "😉" },
    { label: "😊", char: "😊" },
    { label: "😇", char: "😇" },
    { label: "🥰", char: "🥰" },
    { label: "😍", char: "😍" },
    { label: "🤩", char: "🤩" },
    { label: "😘", char: "😘" },
    { label: "😗", char: "😗" },
    { label: "☺️", char: "☺️" },
    { label: "😚", char: "😚" },
    { label: "😙", char: "😙" },
    { label: "🥲", char: "🥲" },
    { label: "😋", char: "😋" },
    { label: "😛", char: "😛" },
    { label: "😜", char: "😜" },
    { label: "🤪", char: "🤪" },
    { label: "😝", char: "😝" },
    { label: "🤑", char: "🤑" },
    { label: "🤗", char: "🤗" },
    { label: "🤭", char: "🤭" },
  ],
  People: [
    { label: "👋", char: "👋" },
    { label: "🤚", char: "🤚" },
    { label: "🖐️", char: "🖐️" },
    { label: "✋", char: "✋" },
    { label: "🖖", char: "🖖" },
    { label: "👌", char: "👌" },
    { label: "🤌", char: "🤌" },
    { label: "🤏", char: "🤏" },
    { label: "✌️", char: "✌️" },
    { label: "🤞", char: "🤞" },
    { label: "🤟", char: "🤟" },
    { label: "🤘", char: "🤘" },
    { label: "🤙", char: "🤙" },
    { label: "👈", char: "👈" },
    { label: "👉", char: "👉" },
    { label: "👆", char: "👆" },
    { label: "🖕", char: "🖕" },
    { label: "👇", char: "👇" },
    { label: "☝️", char: "☝️" },
    { label: "👍", char: "👍" },
    { label: "👎", char: "👎" },
    { label: "✊", char: "✊" },
    { label: "👊", char: "👊" },
    { label: "🤛", char: "🤛" },
    { label: "🤜", char: "🤜" },
    { label: "👏", char: "👏" },
    { label: "🙌", char: "🙌" },
    { label: "👐", char: "👐" },
    { label: "🤲", char: "🤲" },
    { label: "🤝", char: "🤝" },
  ],
  Animals: [
    { label: "🐶", char: "🐶" },
    { label: "🐱", char: "🐱" },
    { label: "🐭", char: "🐭" },
    { label: "🐹", char: "🐹" },
    { label: "🐰", char: "🐰" },
    { label: "🦊", char: "🦊" },
    { label: "🐻", char: "🐻" },
    { label: "🐼", char: "🐼" },
    { label: "🐻‍❄️", char: "🐻‍❄️" },
    { label: "🐨", char: "🐨" },
    { label: "🐯", char: "🐯" },
    { label: "🦁", char: "🦁" },
    { label: "🐮", char: "🐮" },
    { label: "🐷", char: "🐷" },
    { label: "🐸", char: "🐸" },
    { label: "🐵", char: "🐵" },
    { label: "🐔", char: "🐔" },
    { label: "🐧", char: "🐧" },
    { label: "🐦", char: "🐦" },
    { label: "🐤", char: "🐤" },
    { label: "🦆", char: "🦆" },
    { label: "🦅", char: "🦅" },
    { label: "🦉", char: "🦉" },
    { label: "🦇", char: "🦇" },
    { label: "🐺", char: "🐺" },
    { label: "🐗", char: "🐗" },
    { label: "🐴", char: "🐴" },
    { label: "🦄", char: "🦄" },
    { label: "🐝", char: "🐝" },
    { label: "🪱", char: "🪱" },
  ],
  Food: [
    { label: "🍏", char: "🍏" },
    { label: "🍎", char: "🍎" },
    { label: "🍐", char: "🍐" },
    { label: "🍊", char: "🍊" },
    { label: "🍋", char: "🍋" },
    { label: "🍌", char: "🍌" },
    { label: "🍉", char: "🍉" },
    { label: "🍇", char: "🍇" },
    { label: "🍓", char: "🍓" },
    { label: "🫐", char: "🫐" },
    { label: "🍈", char: "🍈" },
    { label: "🍒", char: "🍒" },
    { label: "🍑", char: "🍑" },
    { label: "🥭", char: "🥭" },
    { label: "🍍", char: "🍍" },
    { label: "🥥", char: "🥥" },
    { label: "🥝", char: "🥝" },
    { label: "🍅", char: "🍅" },
    { label: "🍆", char: "🍆" },
    { label: "🥑", char: "🥑" },
    { label: "🥦", char: "🥦" },
    { label: "🥬", char: "🥬" },
    { label: "🥒", char: "🥒" },
    { label: "🌶️", char: "🌶️" },
    { label: "🫑", char: "🫑" },
    { label: "🌽", char: "🌽" },
    { label: "🥕", char: "🥕" },
    { label: "🧄", char: "🧄" },
    { label: "🧅", char: "🧅" },
    { label: "🥔", char: "🥔" },
  ],
  Travel: [
    { label: "🚗", char: "🚗" },
    { label: "🚕", char: "🚕" },
    { label: "🚙", char: "🚙" },
    { label: "🚌", char: "🚌" },
    { label: "🚎", char: "🚎" },
    { label: "🏎️", char: "🏎️" },
    { label: "🚓", char: "🚓" },
    { label: "🚑", char: "🚑" },
    { label: "🚒", char: "🚒" },
    { label: "🚐", char: "🚐" },
    { label: "🛻", char: "🛻" },
    { label: "🚚", char: "🚚" },
    { label: "🚛", char: "🚛" },
    { label: "🚜", char: "🚜" },
    { label: "🛵", char: "🛵" },
    { label: "🏍️", char: "🏍️" },
    { label: "🛺", char: "🛺" },
    { label: "🚲", char: "🚲" },
    { label: "🛴", char: "🛴" },
    { label: "🚨", char: "🚨" },
    { label: "🚔", char: "🚔" },
    { label: "🚍", char: "🚍" },
    { label: "🚘", char: "🚘" },
    { label: "🚖", char: "🚖" },
    { label: "🚡", char: "🚡" },
    { label: "🚠", char: "🚠" },
    { label: "🚟", char: "🚟" },
    { label: "🚃", char: "🚃" },
    { label: "🚋", char: "🚋" },
    { label: "🚞", char: "🚞" },
  ],
  Objects: [
    { label: "⌚", char: "⌚" },
    { label: "📱", char: "📱" },
    { label: "💻", char: "💻" },
    { label: "⌨️", char: "⌨️" },
    { label: "🖥️", char: "🖥️" },
    { label: "🖨️", char: "🖨️" },
    { label: "🖱️", char: "🖱️" },
    { label: "🖲️", char: "🖲️" },
    { label: "🕹️", char: "🕹️" },
    { label: "🗜️", char: "🗜️" },
    { label: "💽", char: "💽" },
    { label: "💾", char: "💾" },
    { label: "💿", char: "💿" },
    { label: "📀", char: "📀" },
    { label: "📼", char: "📼" },
    { label: "📷", char: "📷" },
    { label: "📸", char: "📸" },
    { label: "📹", char: "📹" },
    { label: "🎥", char: "🎥" },
    { label: "📽️", char: "📽️" },
    { label: "🎞️", char: "🎞️" },
    { label: "📞", char: "📞" },
    { label: "☎️", char: "☎️" },
    { label: "📟", char: "📟" },
    { label: "📠", char: "📠" },
    { label: "📺", char: "📺" },
    { label: "📻", char: "📻" },
    { label: "🎙️", char: "🎙️" },
    { label: "🎚️", char: "🎚️" },
    { label: "🎛️", char: "🎛️" },
  ],
}

export function EmojiEditor() {
  const [text, setText] = useLocalStorage("typeit-emoji-text", "")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Handle inserting emoji
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

        <Tabs defaultValue="Smileys">
          <TabsList className="mb-4">
            {Object.keys(EMOJI).map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(EMOJI).map(([category, emojis]) => (
            <TabsContent key={category} value={category} className="m-0">
              <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2">
                {emojis.map((emoji, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="h-10 w-10 text-lg"
                    onClick={() => insertCharacter(emoji.char)}
                  >
                    {emoji.label}
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

