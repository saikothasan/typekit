import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LanguageEditor } from "@/components/language-editor"
import { SidebarNav } from "@/components/sidebar-nav"
import { LANGUAGE_CHARACTERS } from "@/lib/language-data"

export const metadata: Metadata = {
  title: "TypeIt - Turkish | Type Turkish Characters Online",
  description:
    "Type Turkish characters and special letters online. Free tool for typing in Turkish with proper letters.",
  keywords: "Turkish, Turkish characters, Turkish typing, ç, ğ, ı, i, ö, ş, ü, online keyboard, typing tool",
}

export default function TurkishPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type in Turkish</h1>
            <p className="text-gray-600">Turkish characters and special letters</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <LanguageEditor language="Turkish" characters={LANGUAGE_CHARACTERS["Turkish"]} />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Turkish Typing</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    Turkish uses several special characters that aren't found on standard English keyboards. This tool
                    makes it easy to type in Turkish with all the proper characters.
                  </p>
                  <p className="mt-4">The Turkish alphabet includes the following special characters:</p>
                  <ul className="mt-2">
                    <li>
                      <strong>Ç/ç</strong> - pronounced like "ch" in "church"
                    </li>
                    <li>
                      <strong>Ğ/ğ</strong> - the "soft g", usually lengthens the preceding vowel
                    </li>
                    <li>
                      <strong>I/ı</strong> - the dotless "i", pronounced like the "e" in "open"
                    </li>
                    <li>
                      <strong>İ/i</strong> - the dotted "i", pronounced like "ee" in "see"
                    </li>
                    <li>
                      <strong>Ö/ö</strong> - pronounced like the German "ö" or French "eu"
                    </li>
                    <li>
                      <strong>Ş/ş</strong> - pronounced like "sh" in "ship"
                    </li>
                    <li>
                      <strong>Ü/ü</strong> - pronounced like the German "ü" or French "u"
                    </li>
                  </ul>
                  <p className="mt-4">
                    One of the most distinctive features of Turkish is the difference between the dotted "i" (İ/i) and
                    the dotless "ı" (I/ı). These are considered completely different letters in Turkish. When
                    capitalizing "i", it becomes "İ" (with a dot), and when capitalizing "ı", it becomes "I" (without a
                    dot).
                  </p>
                  <p className="mt-4">
                    Simply click on the character you need to insert it into your text. You can then copy and paste your
                    text into any application that supports Unicode text.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="languages/turkish" />
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

