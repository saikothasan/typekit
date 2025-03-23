import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LanguageEditor } from "@/components/language-editor"
import { SidebarNav } from "@/components/sidebar-nav"
import { LANGUAGE_CHARACTERS } from "@/lib/language-data"

export const metadata: Metadata = {
  title: "TypeIt - Welsh | Type Welsh Characters Online",
  description: "Type Welsh characters and accent marks online. Free tool for typing in Welsh with proper accents.",
  keywords: "Welsh, Welsh characters, Welsh typing, accent marks, circumflex, online keyboard, typing tool",
}

export default function WelshPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type in Welsh</h1>
            <p className="text-gray-600">Welsh characters and accent marks</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <LanguageEditor language="Welsh" characters={LANGUAGE_CHARACTERS["Welsh"]} />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Welsh Typing</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    Welsh uses the Latin alphabet with additional accent marks that aren't found on standard English
                    keyboards. This tool makes it easy to type in Welsh with all the proper accents.
                  </p>
                  <p className="mt-4">
                    Welsh primarily uses the circumflex accent (^) on vowels to indicate a long vowel sound:
                  </p>
                  <ul className="mt-2">
                    <li>
                      <strong>Â/â</strong> - long "a" sound
                    </li>
                    <li>
                      <strong>Ê/ê</strong> - long "e" sound
                    </li>
                    <li>
                      <strong>Î/î</strong> - long "i" sound
                    </li>
                    <li>
                      <strong>Ô/ô</strong> - long "o" sound
                    </li>
                    <li>
                      <strong>Û/û</strong> - long "u" sound
                    </li>
                    <li>
                      <strong>Ŵ/ŵ</strong> - long "w" sound (Welsh treats "w" as a vowel)
                    </li>
                    <li>
                      <strong>Ŷ/ŷ</strong> - long "y" sound
                    </li>
                  </ul>
                  <p className="mt-4">
                    The circumflex accent (called "to bach" or "little roof" in Welsh) is used to distinguish between
                    words that would otherwise be spelled the same. For example, "tan" means "until," while "tân" means
                    "fire."
                  </p>
                  <p className="mt-4">
                    Welsh also uses the diaeresis (¨) occasionally, but it's not as common as the circumflex. The
                    diaeresis is used to indicate that two vowels should be pronounced separately rather than as a
                    diphthong, such as in "copïo" (to copy).
                  </p>
                  <p className="mt-4">
                    Simply click on the character you need to insert it into your text. You can then copy and paste your
                    text into any application that supports Unicode text.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="languages/welsh" />
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

