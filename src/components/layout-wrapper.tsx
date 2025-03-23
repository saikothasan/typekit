import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"

interface LayoutWrapperProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function LayoutWrapper({ children, title, subtitle }: LayoutWrapperProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-[#ff5c39] py-2 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="TypeIt Logo" width={60} height={40} className="mr-2" />
            <span className="text-white font-medium hidden sm:inline">TypeIt</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/languages" className="text-white hover:text-white/80">
              Languages
            </Link>
            <Link href="/math" className="text-white hover:text-white/80">
              Math
            </Link>
            <Link href="/symbols" className="text-white hover:text-white/80">
              Symbols
            </Link>
            <Link href="/ipa" className="text-white hover:text-white/80">
              IPA
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6 md:mb-8 text-center">
            <h1 className="text-xl md:text-2xl text-[#2a6496] font-medium mb-1 md:mb-2">{title}</h1>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>

          {children}
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

