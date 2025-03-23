import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SymbolsEditor } from "@/components/symbols-editor"
import { SidebarNav } from "@/components/sidebar-nav"

export const metadata: Metadata = {
  title: "TypeIt - Symbols | Type Special Symbols Online",
  description: "Type special symbols and characters online. Free tool for typing symbols for various purposes.",
  keywords:
    "special symbols, unicode symbols, arrows, emoji, punctuation, online keyboard, typing tool, degree symbol, copyright symbol",
}

export default function SymbolsPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type symbols</h1>
            <p className="text-gray-600">°degree symbol, © copyright symbol, etc.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <SymbolsEditor />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Special Symbols</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    This tool allows you to type various special symbols and characters that are not easily accessible
                    on standard keyboards. Simply click on any symbol to insert it into your text.
                  </p>
                  <p className="mt-4">Common symbols you might need include:</p>
                  <ul className="mt-2">
                    <li>
                      <strong>Copyright (©)</strong> - for indicating copyright ownership
                    </li>
                    <li>
                      <strong>Registered trademark (®)</strong> - for registered trademarks
                    </li>
                    <li>
                      <strong>Trademark (™)</strong> - for unregistered trademarks
                    </li>
                    <li>
                      <strong>Degree (°)</strong> - for temperature and angles
                    </li>
                    <li>
                      <strong>Multiplication (×)</strong> - for multiplication
                    </li>
                    <li>
                      <strong>Division (÷)</strong> - for division
                    </li>
                    <li>
                      <strong>Plus/minus (±)</strong> - for indicating margin of error
                    </li>
                    <li>
                      <strong>Currency symbols (€, £, ¥)</strong> - for various currencies
                    </li>
                    <li>
                      <strong>Fractions (½, ¼, ¾)</strong> - for common fractions
                    </li>
                  </ul>
                  <p className="mt-4">
                    The symbols are organized into categories to help you find what you need quickly. You can use these
                    symbols in social media posts, documents, presentations, and more.
                  </p>
                  <p className="mt-4">
                    All symbols are standard Unicode characters that can be copied and pasted into any application that
                    supports Unicode text, including word processors, email clients, and social media platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="symbols" />
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

