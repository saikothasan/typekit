import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About TypeIt | Type Special Characters Online",
  description: "Learn about TypeIt, the free online tool for typing special characters, accent marks, and symbols.",
  keywords: "about TypeIt, special characters, accent marks, diacritics, mathematical symbols, online keyboard",
}

export default function AboutPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">About TypeIt</h1>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg border">
            <div className="prose max-w-none">
              <p>
                TypeIt is a free online tool that helps you type special characters, symbols, and diacritics without
                installing any software. Whether you need to type in a foreign language, create mathematical equations,
                or use special symbols, TypeIt makes it easy.
              </p>

              <h2>Our Mission</h2>
              <p>
                Our mission is to make typing special characters accessible to everyone. We believe that language
                barriers should not prevent people from communicating effectively online. TypeIt provides a simple
                solution for typing in multiple languages and using special characters without the need for specialized
                software or keyboard layouts.
              </p>

              <h2>Features</h2>
              <ul>
                <li>Type accent marks and diacritics for various languages</li>
                <li>Type mathematical symbols and equations</li>
                <li>Type currency symbols from around the world</li>
                <li>Type International Phonetic Alphabet (IPA) symbols</li>
                <li>Type various special symbols and emoji</li>
                <li>Automatically save your text as you type</li>
                <li>Copy your text to use anywhere</li>
              </ul>

              <h2>How It Works</h2>
              <p>
                TypeIt uses standard Unicode characters that can be copied and pasted into any application that supports
                Unicode text, including word processors, email clients, and social media platforms. This means you can
                type your text with special characters on TypeIt and then use it anywhere.
              </p>

              <h2>Privacy</h2>
              <p>
                We respect your privacy. TypeIt does not collect or store any of the text you type on our servers. Your
                text is saved locally in your browser's storage, so only you have access to it. We do not track what you
                type or how you use the tool beyond basic analytics to help us improve the service.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions, suggestions, or feedback, please feel free to contact us at
                <a href="mailto:contact@typeit-clone.com" className="ml-1">
                  contact@typeit-clone.com
                </a>
                .
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

