import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LanguageEditor } from "@/components/language-editor"
import { SidebarNav } from "@/components/sidebar-nav"
import { LANGUAGE_CHARACTERS } from "@/lib/language-data"

export const metadata: Metadata = {
  title: "TypeIt - Pinyin | Type Chinese Pinyin Online",
  description: "Type Chinese Pinyin with tone marks online. Free tool for typing Pinyin with proper diacritics.",
  keywords:
    "Pinyin, Chinese Pinyin, Pinyin typing, tone marks, diacritics, online keyboard, typing tool, Chinese romanization",
}

export default function PinyinPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type in Pinyin</h1>
            <p className="text-gray-600">Chinese Pinyin with tone marks</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <LanguageEditor language="Pinyin" characters={LANGUAGE_CHARACTERS["Pinyin"]} />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Pinyin Typing</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    Pinyin is the official romanization system for Standard Chinese (Mandarin). It uses Latin letters
                    with tone marks to represent Chinese characters and their pronunciation. This tool makes it easy to
                    type Pinyin with the proper tone marks.
                  </p>
                  <p className="mt-4">
                    Pinyin uses four tone marks placed over vowels to indicate the tone of a syllable:
                  </p>
                  <ul className="mt-2">
                    <li>
                      <strong>First tone (ā, ē, ī, ō, ū, ǖ)</strong> - high level tone, marked with a macron (¯)
                    </li>
                    <li>
                      <strong>Second tone (á, é, í, ó, ú, ǘ)</strong> - rising tone, marked with an acute accent (´)
                    </li>
                    <li>
                      <strong>Third tone (ǎ, ě, ǐ, ǒ, ǔ, ǚ)</strong> - falling-rising tone, marked with a caron (ˇ)
                    </li>
                    <li>
                      <strong>Fourth tone (à, è, ì, ò, ù, ǜ)</strong> - falling tone, marked with a grave accent (`)
                    </li>
                  </ul>
                  <p className="mt-4">
                    There is also a neutral tone, which is not marked. In Pinyin, the tone mark is placed over the vowel
                    that forms the nucleus of the syllable. If there are multiple vowels, there are rules for which
                    vowel gets the tone mark.
                  </p>
                  <p className="mt-4">
                    Simply click on the character you need to insert it into your text. You can then copy and paste your
                    text into any application that supports Unicode text.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="languages/pinyin" />
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

