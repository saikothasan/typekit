import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LanguageEditor } from "@/components/language-editor"
import { SidebarNav } from "@/components/sidebar-nav"
import { LANGUAGE_CHARACTERS } from "@/lib/language-data"

export const metadata: Metadata = {
  title: "TypeIt - Dutch | Type Dutch Characters Online",
  description: "Type Dutch characters and special letters online. Free tool for typing in Dutch with proper accents.",
  keywords: "Dutch, Dutch characters, Dutch typing, accent marks, diacritics, online keyboard, typing tool",
}

export default function DutchPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type in Dutch</h1>
            <p className="text-gray-600">Dutch characters and special letters</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <LanguageEditor language="Dutch" characters={LANGUAGE_CHARACTERS["Dutch"]} />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Dutch Typing</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    Dutch uses several special characters with diacritical marks that aren't found on standard English
                    keyboards. This tool makes it easy to type in Dutch with all the proper accents.
                  </p>
                  <p className="mt-4">Dutch diacritical marks include:</p>
                  <ul className="mt-2">
                    <li>
                      <strong>Acute accent (á, é, í, ó, ú)</strong> - used to indicate stress or to distinguish between
                      words
                    </li>
                    <li>
                      <strong>Diaeresis (ë, ï, ö, ü)</strong> - used to indicate that two vowels are pronounced
                      separately
                    </li>
                  </ul>
                  <p className="mt-4">
                    While modern Dutch doesn't use as many diacritical marks as some other languages, they are still
                    important for proper spelling in certain words. Simply click on the character you need to insert it
                    into your text.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="languages/dutch" />
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

