import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LanguageEditor } from "@/components/language-editor"
import { SidebarNav } from "@/components/sidebar-nav"
import { LANGUAGE_CHARACTERS } from "@/lib/language-data"

export const metadata: Metadata = {
  title: "TypeIt - Italian | Type Italian Characters Online",
  description: "Type Italian characters and accent marks online. Free tool for typing in Italian with proper accents.",
  keywords: "Italian, Italian characters, Italian typing, accent marks, diacritics, online keyboard, typing tool",
}

export default function ItalianPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type in Italian</h1>
            <p className="text-gray-600">Italian characters and accent marks</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <LanguageEditor language="Italian" characters={LANGUAGE_CHARACTERS["Italian"]} />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Italian Typing</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    Italian uses several accent marks that aren't found on standard English keyboards. This tool makes
                    it easy to type in Italian with all the proper accents.
                  </p>
                  <p className="mt-4">Italian primarily uses the following accent marks:</p>
                  <ul className="mt-2">
                    <li>
                      <strong>Grave accent (à, è, ì, ò, ù)</strong> - indicates stress on the final vowel of a word
                    </li>
                    <li>
                      <strong>Acute accent (é)</strong> - used in some words to indicate a closed 'e' sound
                    </li>
                  </ul>
                  <p className="mt-4">
                    In Italian, accents are primarily used to indicate stress on the final vowel of a word, or to
                    distinguish between words that would otherwise be spelled the same. For example, "e" means "and,"
                    while "è" means "is."
                  </p>
                  <p className="mt-4">
                    Simply click on the character you need to insert it into your text. You can then copy and paste your
                    text into any application that supports Unicode text.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="languages/italian" />
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

