import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ToolCard } from "@/components/tool-card"
import { FeaturesList } from "@/components/features-list"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "TypeIt - Type special characters and symbols online",
  description:
    "An online tool to type accent marks, diacritics, mathematical symbols, and special characters from various languages",
  keywords: "special characters, accent marks, diacritics, mathematical symbols, online keyboard, typing tool",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="mb-8 text-center">
            <div className="inline-block mb-4">
              <Image src="/logo.svg" alt="TypeIt Logo" width={120} height={80} className="mx-auto" />
            </div>
            <h1 className="text-xl md:text-2xl text-[#2a6496] font-medium mb-4">
              Type special characters and symbols online
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of specialized typing tools for different languages, mathematical symbols, and
              special characters.
            </p>
          </div>

          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
              <ToolCard
                title="Math Symbols"
                description="Type mathematical symbols, equations, and formulas"
                icon="function"
                href="/math"
              />
              <ToolCard
                title="Symbols"
                description="Type various symbols and special characters"
                icon="symbols"
                href="/symbols"
              />
              <ToolCard
                title="Currencies"
                description="Type currency symbols from around the world"
                icon="currency"
                href="/currencies"
              />
              <ToolCard
                title="Phonetics (IPA)"
                description="Type International Phonetic Alphabet symbols"
                icon="sound"
                href="/ipa"
              />
              <ToolCard title="Emoji" description="Type emoji and emoticons" icon="emoji" href="/emoji" />
              <ToolCard
                title="Languages"
                description="Type accent marks and diacritics for various languages"
                icon="languages"
                href="/languages"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1 bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-xl font-semibold mb-4">About TypeIt</h2>
                <p className="text-gray-700 mb-4">
                  TypeIt is a free online tool that helps you type special characters, symbols, and diacritics without
                  installing any software. Whether you need to type in a foreign language, create mathematical
                  equations, or use special symbols, TypeIt makes it easy.
                </p>
                <p className="text-gray-700">
                  Simply choose the tool you need, click on the characters you want to use, and copy your text to use it
                  anywhere. Your text is automatically saved, so you won't lose your work.
                </p>
              </div>

              <div className="md:w-64 lg:w-80">
                <FeaturesList />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 md:py-8 text-center text-sm text-gray-600 border-t mt-8 md:mt-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-2 mb-4">
            <button className="bg-[#3b5998] text-white px-3 py-1 rounded flex items-center space-x-1">
              <span>Share</span>
            </button>
            <button className="bg-[#1da1f2] text-white px-3 py-1 rounded flex items-center space-x-1">
              <span>Tweet</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
            <Link href="/about" className="text-[#2a6496] underline">
              about this site
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/help" className="text-[#2a6496] underline">
              help
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/app" className="text-[#2a6496] underline">
              Windows app
            </Link>
            <span className="hidden sm:inline">•</span>
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

