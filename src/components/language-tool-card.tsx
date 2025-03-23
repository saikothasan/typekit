import Link from "next/link"
import { Languages } from "lucide-react"

interface LanguageToolCardProps {
  name: string
  href: string
}

export function LanguageToolCard({ name, href }: LanguageToolCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg border shadow-sm p-4 h-full transition-all hover:shadow-md hover:border-[#ff5c39]/30">
        <div className="flex items-center">
          <div className="bg-[#ff5c39]/10 p-2 rounded-md mr-3">
            <Languages className="h-5 w-5 text-[#ff5c39]" />
          </div>
          <h3 className="text-base font-medium">{name}</h3>
        </div>
      </div>
    </Link>
  )
}

