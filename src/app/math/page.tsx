import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MathEditor } from "@/components/math-editor"
import { SidebarNav } from "@/components/sidebar-nav"

export const metadata: Metadata = {
  title: "TypeIt - Mathematical Symbols | Type Math Symbols Online",
  description:
    "Type mathematical symbols, equations, and formulas online. Free tool for typing math symbols with Unicode characters.",
  keywords:
    "math symbols, mathematical symbols, equations, formulas, unicode math, online math keyboard, math typing tool",
}

export default function MathPage() {
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
            <h1 className="text-2xl text-[#2a6496] font-medium mb-2">Type mathematical symbols</h1>
            <p className="text-gray-600">online keyboard</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <MathEditor />

              <div className="mt-8 bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Notes</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    This online mathematical keyboard is limited to what can be achieved with Unicode characters. This
                    means, for example, that you cannot put one symbol over another. While this is a serious limitation,
                    multi-level formulas are not always needed and even when they are needed, proper math symbols still
                    look better than improvised ASCII approximations.
                  </p>
                  <p className="mt-4">Compare:</p>
                  <p className="font-mono mt-2">∀(x, y ∈ A ∪ B: x ≠ y) x² - y² ≥ 0</p>
                  <p className="font-mono mt-2">For all (x, y ∈ A ∪ B; x != y) x^2 - y^2 &gt;= 0</p>
                  <p className="mt-4">
                    The advantage of using plain Unicode is that you can copy & paste your text into any text file,
                    e-mail message or HTML document and it will (usually) be displayed correctly without any special
                    plugins. If you need to type more complex mathematical formulas (e.g. fractions), you should use a
                    more advanced tool like LaTeX.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 order-first lg:order-last">
              <SidebarNav currentTool="math" />
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

