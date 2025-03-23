import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LanguageEditor } from "@/components/language-editor"
import { SidebarNav } from "@/components/sidebar-nav"
import { LANGUAGE_CHARACTERS } from "@/lib/language-data"

export const metadata: Metadata = {
  title: "TypeIt - German | Type German Umlauts and Special Characters Online",
  description:
    "Type German umlauts and special characters online. Free tool for typing in German with proper characters.",
  keywords: "German, umlauts, German characters, ä, ö, ü, ß, German typing, online keyboard, typing tool",
}

export default function GermanPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type in German</h1>
            <p className="text-gray-600">German umlauts and special characters</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <LanguageEditor language="German" characters={LANGUAGE_CHARACTERS["German"]} />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About German Typing</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    German uses several special characters that aren't found on standard English keyboards. This tool
                    makes it easy to type in German with all the proper characters.
                  </p>
                  <p className="mt-4">German special characters include:</p>
                  <ul className="mt-2">
                    <li>
                      <strong>Umlauts (ä, ö, ü, Ä, Ö, Ü)</strong> - vowels with diaeresis
                    </li>
                    <li>
                      <strong>Eszett/Sharp S (ß)</strong> - a special character representing "ss"
                    </li>
                  </ul>
                  <p className="mt-4">
                    If you don't have access to these characters, there are alternative ways to write them:
                  </p>
                  <ul className="mt-2">
                    <li>ä can be written as ae</li>
                    <li>ö can be written as oe</li>
                    <li>ü can be written as ue</li>
                    <li>ß can be written as ss</li>
                  </ul>
                  <p className="mt-4">
                    However, using the proper characters is always preferred for correct spelling and pronunciation.
                    Simply click on the character you need to insert it into your text.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="languages/german" />
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

