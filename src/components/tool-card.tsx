import Link from "next/link"
import { ActivityIcon as Function, Languages, DollarSign, Volume2, Hash, Smile } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToolCardProps {
  title: string
  description: string
  icon: "function" | "languages" | "currency" | "sound" | "symbols" | "emoji"
  href: string
  className?: string
}

export function ToolCard({ title, description, icon, href, className }: ToolCardProps) {
  const IconComponent = {
    function: Function,
    languages: Languages,
    currency: DollarSign,
    sound: Volume2,
    symbols: Hash,
    emoji: Smile,
  }[icon]

  return (
    <Link href={href} className={cn("block", className)}>
      <div className="bg-white rounded-lg border shadow-sm p-4 md:p-6 h-full transition-all hover:shadow-md hover:border-[#ff5c39]/30 hover:translate-y-[-2px]">
        <div className="flex items-start mb-3 md:mb-4">
          <div className="bg-[#ff5c39]/10 p-2 rounded-md mr-3 md:mr-4 flex-shrink-0">
            <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-[#ff5c39]" />
          </div>
          <h3 className="text-base md:text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </Link>
  )
}

