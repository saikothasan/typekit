import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { EmojiEditor } from "@/components/emoji-editor"
import { SidebarNav } from "@/components/sidebar-nav"

export const metadata: Metadata = {
  title: "TypeIt - Emoji | Type Emoji Online",
  description: "Type emoji and emoticons online. Free tool for adding emoji to your text.",
  keywords: "emoji, emoticons, smileys, unicode emoji, online keyboard, typing tool",
}

export default function EmojiPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type emoji</h1>
            <p className="text-gray-600">online keyboard</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <EmojiEditor />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">About Emoji</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    This tool allows you to easily add emoji to your text. Simply click on any emoji to insert it into
                    your text. You can use these emoji in social media posts, messages, emails, and more.
                  </p>
                  <p className="mt-4">
                    Emoji are organized into categories to help you find what you need quickly. Your text is
                    automatically saved, so you won't lose your work if you navigate away from the page.
                  </p>
                  <p className="mt-4">
                    The emoji you type are standard Unicode characters that can be copied and pasted into any
                    application that supports emoji, including social media platforms, messaging apps, and email
                    clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="emoji" />
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

