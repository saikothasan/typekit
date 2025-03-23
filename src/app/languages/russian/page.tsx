import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LanguageEditor } from "@/components/language-editor"
import { SidebarNav } from "@/components/sidebar-nav"
import { LANGUAGE_CHARACTERS } from "@/lib/language-data"

export const metadata: Metadata = {
  title: "TypeIt - Russian | Type Russian Cyrillic Characters Online",
  description: "Type Russian Cyrillic characters online. Free tool for typing in Russian with proper alphabet.",
  keywords: "Russian, Russian characters, Cyrillic alphabet, Russian typing, online keyboard, typing tool",
}

export default function RussianPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type in Russian</h1>
            <p className="text-gray-600">Russian Cyrillic characters</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <LanguageEditor language="Russian" characters={LANGUAGE_CHARACTERS["Russian"]} />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Russian Typing</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    Russian uses the Cyrillic alphabet, which is completely different from the Latin alphabet used in
                    English. This tool makes it easy to type in Russian with all the proper characters.
                  </p>
                  <p className="mt-4">
                    The modern Russian alphabet consists of 33 letters: 10 vowels, 21 consonants, and 2 signs (the soft
                    sign ь and hard sign ъ). Some letters look similar to Latin letters but may represent different
                    sounds, such as:
                  </p>
                  <ul className="mt-2">
                    <li>
                      <strong>А/а</strong> - similar to Latin "A", pronounced like the "a" in "father"
                    </li>
                    <li>
                      <strong>В/в</strong> - looks like Latin "B", but pronounced like "V"
                    </li>
                    <li>
                      <strong>Е/е</strong> - similar to Latin "E", pronounced like "ye" in "yes"
                    </li>
                    <li>
                      <strong>Н/н</strong> - looks like Latin "H", but pronounced like "N"
                    </li>
                    <li>
                      <strong>Р/р</strong> - looks like Latin "P", but pronounced like "R"
                    </li>
                    <li>
                      <strong>С/с</strong> - looks like Latin "C", but always pronounced like "S"
                    </li>
                    <li>
                      <strong>У/у</strong> - looks like Latin "Y", but pronounced like "oo" in "boot"
                    </li>
                    <li>
                      <strong>Х/х</strong> - looks like Latin "X", but pronounced like "kh" in "Loch Ness"
                    </li>
                  </ul>
                  <p className="mt-4">
                    Other letters are unique to the Cyrillic alphabet, such as Ж (zh), Ц (ts), Ч (ch), Ш (sh), Щ (shch),
                    and Я (ya). The soft sign (ь) and hard sign (ъ) don't have sounds of their own but modify the
                    pronunciation of the preceding consonant.
                  </p>
                  <p className="mt-4">
                    Simply click on the character you need to insert it into your text. You can then copy and paste your
                    text into any application that supports Unicode text.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="languages/russian" />
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

