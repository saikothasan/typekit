import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { IPAFullEditor } from "@/components/ipa-full-editor"
import { SidebarNav } from "@/components/sidebar-nav"

export const metadata: Metadata = {
  title: "TypeIt - Full IPA | Type Complete Phonetic Symbols Online",
  description:
    "Type using the complete International Phonetic Alphabet (IPA). Free tool for comprehensive phonetic transcription of any language.",
  keywords:
    "IPA, International Phonetic Alphabet, phonetic symbols, phonetics, linguistics, pronunciation, transcription, online keyboard",
}

export default function IPAFullPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type Full IPA symbols</h1>
            <p className="text-gray-600">Complete International Phonetic Alphabet</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <IPAFullEditor />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Full IPA</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    This tool provides the complete set of International Phonetic Alphabet (IPA) symbols for
                    transcribing the sounds of all human languages. It includes all consonants, vowels, diacritics,
                    suprasegmentals, and other symbols defined by the International Phonetic Association.
                  </p>
                  <p className="mt-4">
                    The full IPA is used by linguists, language teachers, speech-language pathologists, singers, actors,
                    lexicographers, and translators for precise phonetic transcription of any language or dialect in the
                    world.
                  </p>
                  <p className="mt-4">
                    The symbols are organized into categories based on the official IPA chart. If you only need symbols
                    for English pronunciation, you may prefer our simplified{" "}
                    <Link href="/ipa/english" className="text-[#2a6496] underline">
                      English IPA
                    </Link>{" "}
                    tool.
                  </p>
                  <p className="mt-4">
                    For more information about the IPA, visit the{" "}
                    <a
                      href="https://www.internationalphoneticassociation.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2a6496] underline"
                    >
                      International Phonetic Association
                    </a>{" "}
                    website.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="ipa/full" />
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

