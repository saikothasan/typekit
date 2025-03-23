import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { IPAEditor } from "@/components/ipa-editor"
import { SidebarNav } from "@/components/sidebar-nav"

export const metadata: Metadata = {
  title: "TypeIt - IPA Symbols | Type International Phonetic Alphabet Online",
  description:
    "Type International Phonetic Alphabet (IPA) symbols online. Free tool for typing phonetic transcriptions.",
  keywords:
    "IPA, International Phonetic Alphabet, phonetic symbols, phonetics, linguistics, pronunciation, online keyboard",
}

export default function IPAPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type IPA symbols</h1>
            <p className="text-gray-600">International Phonetic Alphabet</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <IPAEditor />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About IPA Symbols</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    The International Phonetic Alphabet (IPA) is a system of phonetic notation based on the Latin
                    alphabet. It was devised by the International Phonetic Association as a standardized representation
                    of the sounds of spoken language.
                  </p>
                  <p className="mt-4">
                    This tool allows you to type IPA symbols for phonetic transcriptions. You can choose between the
                    simplified English IPA set or the full IPA chart. Simply click on the symbols to insert them into
                    your text.
                  </p>
                  <p className="mt-4">
                    The IPA symbols you type are standard Unicode characters that can be copied and pasted into any
                    application that supports Unicode text, including word processors, email clients, and academic
                    papers.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="ipa" />
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

