import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Help | TypeIt - Type Special Characters Online",
  description:
    "Get help with using TypeIt, the free online tool for typing special characters, accent marks, and symbols.",
  keywords:
    "TypeIt help, how to use TypeIt, special characters, accent marks, diacritics, mathematical symbols, online keyboard",
}

export default function HelpPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Help & FAQ</h1>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg border">
            <div className="prose max-w-none">
              <h2>How to Use TypeIt</h2>
              <ol>
                <li>Choose the tool you need from the homepage (Math Symbols, Languages, Currencies, etc.)</li>
                <li>Click on the special characters you want to insert into your text</li>
                <li>Type your text normally in the text area</li>
                <li>Copy your text using the "Copy all" button when you're done</li>
                <li>Paste your text into any application that supports Unicode text</li>
              </ol>

              <h2>Frequently Asked Questions</h2>

              <h3>Is my text saved?</h3>
              <p>
                Yes, your text is automatically saved in your browser's local storage. This means if you accidentally
                close the page or navigate away, your text will still be there when you come back. However, if you clear
                your browser data or use a different browser, your saved text will not be available.
              </p>

              <h3>Can I use TypeIt offline?</h3>
              <p>
                TypeIt is a web-based tool that requires an internet connection to access. However, once the page is
                loaded, you can continue to use it even if your internet connection is temporarily lost.
              </p>

              <h3>Will the special characters work everywhere?</h3>
              <p>
                TypeIt uses standard Unicode characters that are supported by most modern applications and websites.
                However, some older systems or specialized applications may not display all Unicode characters
                correctly. In general, the characters will work in word processors, email clients, social media
                platforms, and most other text-based applications.
              </p>

              <h3>Can I type complex mathematical formulas?</h3>
              <p>
                TypeIt's Math Symbols tool allows you to type basic mathematical expressions using Unicode characters.
                However, it is limited to what can be achieved with Unicode. For more complex formulas that require
                special formatting (like fractions, integrals, or matrices), we recommend using a specialized tool like
                LaTeX.
              </p>

              <h3>How do I report a bug or suggest a feature?</h3>
              <p>
                If you encounter any issues or have suggestions for improving TypeIt, please contact us at
                <a href="mailto:contact@typeit-clone.com" className="ml-1">
                  contact@typeit-clone.com
                </a>
                . We appreciate your feedback and are constantly working to improve the tool.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-gray-600 border-t mt-12">
        <div className="container mx-auto">
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

