import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { IPAEnglishEditor } from "@/components/ipa-english-editor"
import { SidebarNav } from "@/components/sidebar-nav"

export const metadata: Metadata = {
  title: "TypeIt - English IPA | Type English Phonetic Symbols Online",
  description:
    "Type English phonetic symbols using the International Phonetic Alphabet (IPA). Free tool for English pronunciation transcription.",
  keywords:
    "English IPA, phonetic symbols, English pronunciation, phonetics, linguistics, IPA transcription, online keyboard",
}

export default function IPAEnglishPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type English IPA symbols</h1>
            <p className="text-gray-600">English phonetic transcription</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <IPAEnglishEditor />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About English IPA</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    This tool provides a simplified set of International Phonetic Alphabet (IPA) symbols specifically
                    for transcribing English pronunciation. It includes all the vowels and consonants needed for
                    standard English phonetic transcription.
                  </p>
                  <p className="mt-4">
                    English IPA is commonly used in dictionaries, language learning materials, and linguistic research
                    to represent the pronunciation of English words. It helps learners understand how words should be
                    pronounced, regardless of their spelling.
                  </p>
                  <p className="mt-4">
                    For example, the word "enough" would be transcribed as /ɪˈnʌf/ in IPA, showing its actual
                    pronunciation rather than relying on the sometimes confusing English spelling system.
                  </p>
                  <p className="mt-4">
                    If you need the complete set of IPA symbols for transcribing other languages or more specialized
                    phonetic features, please use our{" "}
                    <Link href="/ipa/full" className="text-[#2a6496] underline">
                      Full IPA
                    </Link>{" "}
                    tool.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="ipa/english" />
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

