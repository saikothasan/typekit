import Link from "next/link"
import Image from "next/image"
import { TextIcon as Telegram } from "lucide-react"

interface SiteHeaderProps {
  minimal?: boolean
}

export function SiteHeader({ minimal = false }: SiteHeaderProps) {
  return (
    <header className="bg-[#ff5c39] py-3 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="TypeIt Logo" width={60} height={40} className="mr-2" />
            <span className="text-white font-medium hidden sm:inline">TypeIt</span>
          </Link>
        </div>

        {!minimal && (
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
        )}

        <Link
          href="https://t.me/drkingbd"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-white/80 bg-[#0088cc]/20 px-2 py-1 rounded"
        >
          <Telegram className="h-4 w-4 mr-1" />
          <span className="text-sm">Join our Telegram</span>
        </Link>
      </div>
    </header>
  )
}

