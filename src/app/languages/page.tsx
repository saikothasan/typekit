import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LanguageToolCard } from "@/components/language-tool-card"
import { SidebarNav } from "@/components/sidebar-nav"

export const metadata: Metadata = {
  title: "TypeIt - Language Tools | Type in Different Languages Online",
  description:
    "Type in different languages with accent marks and special characters. Free online tools for typing in various languages.",
  keywords:
    "language tools, accent marks, diacritics, special characters, language typing, foreign language, online keyboard",
}

export default function LanguagesPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Language Tools</h1>
            <p className="text-gray-600">Type in different languages with accent marks and special characters</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <LanguageToolCard name="Czech" href="/languages/czech" />
                <LanguageToolCard name="Danish" href="/languages/danish" />
                <LanguageToolCard name="Dutch" href="/languages/dutch" />
                <LanguageToolCard name="Esperanto" href="/languages/esperanto" />
                <LanguageToolCard name="Finnish" href="/languages/finnish" />
                <LanguageToolCard name="French" href="/languages/french" />
                <LanguageToolCard name="German" href="/languages/german" />
                <LanguageToolCard name="Greek" href="/languages/greek" />
                <LanguageToolCard name="Hungarian" href="/languages/hungarian" />
                <LanguageToolCard name="Icelandic" href="/languages/icelandic" />
                <LanguageToolCard name="Italian" href="/languages/italian" />
                <LanguageToolCard name="Maori" href="/languages/maori" />
                <LanguageToolCard name="Norwegian" href="/languages/norwegian" />
                <LanguageToolCard name="Pinyin" href="/languages/pinyin" />
                <LanguageToolCard name="Polish" href="/languages/polish" />
                <LanguageToolCard name="Portuguese" href="/languages/portuguese" />
                <LanguageToolCard name="Romanian" href="/languages/romanian" />
                <LanguageToolCard name="Russian" href="/languages/russian" />
                <LanguageToolCard name="Spanish" href="/languages/spanish" />
                <LanguageToolCard name="Swedish" href="/languages/swedish" />
                <LanguageToolCard name="Turkish" href="/languages/turkish" />
                <LanguageToolCard name="Ukrainian" href="/languages/ukrainian" />
                <LanguageToolCard name="Vietnamese" href="/languages/vietnamese" />
                <LanguageToolCard name="Welsh" href="/languages/welsh" />
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Language Tools</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    Our language tools allow you to type in different languages with the correct accent marks and
                    special characters. Simply select the language you need and start typing. You can click on the
                    special characters to insert them into your text.
                  </p>
                  <p className="mt-4">
                    These tools are perfect for students, translators, language learners, and anyone who needs to type
                    in a foreign language without installing special keyboard layouts or software.
                  </p>
                  <p className="mt-4">
                    All characters are standard Unicode, so you can copy and paste your text into any application that
                    supports Unicode text, including word processors, email clients, and social media platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="languages" />
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

