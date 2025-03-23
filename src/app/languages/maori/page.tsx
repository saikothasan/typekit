import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LanguageEditor } from "@/components/language-editor"
import { SidebarNav } from "@/components/sidebar-nav"
import { LANGUAGE_CHARACTERS } from "@/lib/language-data"

export const metadata: Metadata = {
  title: "TypeIt - Māori | Type Māori Characters Online",
  description: "Type Māori characters with macrons online. Free tool for typing in Māori with proper diacritics.",
  keywords: "Māori, Maori, Māori characters, Māori typing, macrons, online keyboard, typing tool, Te Reo Māori",
}

export default function MaoriPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-[#ff5c39] py-2">
        <div className="container mx-auto"></div>
      </header>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.svg" alt="TypeIt Logo" width={120} height={80} className="mx-auto" />
            </Link>
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type in Māori</h1>
            <p className="text-gray-600">Māori characters with macrons</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <LanguageEditor language="Maori" characters={LANGUAGE_CHARACTERS["Maori"]} />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Māori Typing</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    Te Reo Māori (the Māori language) uses macrons over vowels to indicate a long vowel sound. These
                    macrons are essential for proper pronunciation and meaning in written Māori.
                  </p>
                  <p className="mt-4">The five vowels with macrons in Māori are:</p>
                  <ul className="mt-2">
                    <li>
                      <strong>Ā/ā</strong> - long 'a' sound
                    </li>
                    <li>
                      <strong>Ē/ē</strong> - long 'e' sound
                    </li>
                    <li>
                      <strong>Ī/ī</strong> - long 'i' sound
                    </li>
                    <li>
                      <strong>Ō/ō</strong> - long 'o' sound
                    </li>
                    <li>
                      <strong>Ū/ū</strong> - long 'u' sound
                    </li>
                  </ul>
                  <p className="mt-4">
                    Using macrons is important in Māori as they can change the meaning of words. For example, "keke"
                    means "cake" while "kēkē" means "armpit." The use of macrons in written Māori has become standard
                    practice in New Zealand.
                  </p>
                  <p className="mt-4">
                    Simply click on the character you need to insert it into your text. You can then copy and paste your
                    text into any application that supports Unicode text.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="languages/maori" />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-gray-600 border-t mt-12">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-2 mb-4">
            <button className="bg-[#3b5998] text-white px-3 py-1 rounded flex items-center space-x-1">
              <span>Share</span>
            </button>
            <button className="bg-[#1da1f2] text-white px-3 py-1 rounded flex items-center space-x-1">
              <span>Tweet</span>
            </button>
          </div>

          <div className="space-x-2">
            <Link href="/about" className="text-[#2a6496] underline">
              about this site
            </Link>
            <span>•</span>
            <Link href="/help" className="text-[#2a6496] underline">
              help
            </Link>
            <span>•</span>
            <Link href="/app" className="text-[#2a6496] underline">
              Windows app
            </Link>
            <span>•</span>
            <Link href="/donate" className="text-[#2a6496] underline">
              donate
            </Link>
          </div>

          <div className="mt-4">© 2023 TypeIt Clone</div>
        </div>
      </footer>
    </div>
  )
}

