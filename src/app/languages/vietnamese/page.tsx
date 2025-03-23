import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LanguageEditor } from "@/components/language-editor"
import { SidebarNav } from "@/components/sidebar-nav"
import { LANGUAGE_CHARACTERS } from "@/lib/language-data"

export const metadata: Metadata = {
  title: "TypeIt - Vietnamese | Type Vietnamese Characters Online",
  description:
    "Type Vietnamese characters and diacritics online. Free tool for typing in Vietnamese with proper accents.",
  keywords:
    "Vietnamese, Vietnamese characters, Vietnamese typing, diacritics, tone marks, online keyboard, typing tool",
}

export default function VietnamesePage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type in Vietnamese</h1>
            <p className="text-gray-600">Vietnamese characters and diacritics</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <LanguageEditor language="Vietnamese" characters={LANGUAGE_CHARACTERS["Vietnamese"]} />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Vietnamese Typing</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    Vietnamese uses the Latin alphabet with additional diacritical marks to represent tones and certain
                    vowels. This tool makes it easy to type in Vietnamese with all the proper accents and tone marks.
                  </p>
                  <p className="mt-4">Vietnamese has two types of diacritical marks:</p>
                  <ul className="mt-2">
                    <li>
                      <strong>Vowel modifiers</strong> - change the sound of the vowel:
                      <ul>
                        <li>Breve (ă) - indicates a short "a" sound</li>
                        <li>Circumflex (â, ê, ô) - indicates a shorter, higher vowel sound</li>
                        <li>Horn (ơ, ư) - indicates a rounded vowel sound</li>
                        <li>Đ/đ - a consonant with a stroke, pronounced like "d" in "dog"</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Tone marks</strong> - indicate the tone of the syllable:
                      <ul>
                        <li>Level tone (no mark): a, e, i, o, u</li>
                        <li>Acute accent (á, é, í, ó, ú): rising tone</li>
                        <li>Grave accent (à, è, ì, ò, ù): falling tone</li>
                        <li>Hook above (ả, ẻ, ỉ, ỏ, ủ): questioning tone</li>
                        <li>Tilde (ã, ẽ, ĩ, õ, ũ): broken tone</li>
                        <li>Dot below (ạ, ẹ, ị, ọ, ụ): heavy tone</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mt-4">
                    Vietnamese is a tonal language, which means that the same syllable pronounced with different tones
                    can have completely different meanings. For example, "ma" can mean "ghost," while "má" means
                    "mother" or "cheek," and "mà" means "but."
                  </p>
                  <p className="mt-4">
                    Simply click on the character you need to insert it into your text. You can then copy and paste your
                    text into any application that supports Unicode text.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="languages/vietnamese" />
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

