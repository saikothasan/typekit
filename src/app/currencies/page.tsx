import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CurrencyEditor } from "@/components/currency-editor"
import { SidebarNav } from "@/components/sidebar-nav"

export const metadata: Metadata = {
  title: "TypeIt - Currency Symbols | Type Currency Symbols Online",
  description:
    "Type currency symbols from around the world online. Free tool for typing currency symbols for various countries.",
  keywords: "currency symbols, money symbols, dollar, euro, pound, yen, online keyboard, typing tool",
}

export default function CurrenciesPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type currency symbols</h1>
            <p className="text-gray-600">online keyboard</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <CurrencyEditor />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Currency Symbols</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    This tool allows you to type currency symbols from around the world. Simply click on any currency
                    symbol to insert it into your text. You can use these symbols in financial documents, price lists,
                    international correspondence, and more.
                  </p>
                  <p className="mt-4">
                    Currency symbols are organized by region to help you find the symbol you need quickly. Your text is
                    automatically saved, so you won't lose your work if you navigate away from the page.
                  </p>
                  <p className="mt-4">
                    The currency symbols you type are standard Unicode characters that can be copied and pasted into any
                    application that supports Unicode text, including word processors, spreadsheets, email clients, and
                    social media platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="currencies" />
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

