import type { Metadata } from "next"
import { LanguageEditor } from "@/components/language-editor"
import { SidebarNav } from "@/components/sidebar-nav"
import { LANGUAGE_CHARACTERS } from "@/lib/language-data"
import { LayoutWrapper } from "@/components/layout-wrapper"

export const metadata: Metadata = {
  title: "TypeIt - French | Type French Accent Marks Online",
  description:
    "Type French accent marks and special characters online. Free tool for typing in French with proper accents.",
  keywords: "French, accent marks, French characters, é, è, ê, ç, French typing, online keyboard, typing tool",
}

export default function FrenchPage() {
  return (
    <LayoutWrapper title="Type in French" subtitle="French accent marks and special characters">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <LanguageEditor language="French" characters={LANGUAGE_CHARACTERS["French"]} />

          <div className="mt-8 bg-white p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">About French Typing</h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                French uses several accent marks and special characters that aren't found on standard English keyboards.
                This tool makes it easy to type in French with all the proper accents.
              </p>
              <p className="mt-4">Common French accent marks include:</p>
              <ul className="mt-2">
                <li>
                  <strong>Acute accent (é)</strong> - as in café, éducation
                </li>
                <li>
                  <strong>Grave accent (è, à, ù)</strong> - as in très, là, où
                </li>
                <li>
                  <strong>Circumflex (â, ê, î, ô, û)</strong> - as in château, être, île
                </li>
                <li>
                  <strong>Cedilla (ç)</strong> - as in français, garçon
                </li>
                <li>
                  <strong>Diaeresis (ë, ï, ü)</strong> - as in Noël, naïve
                </li>
                <li>
                  <strong>Ligature (œ)</strong> - as in œuvre, cœur
                </li>
              </ul>
              <p className="mt-4">
                Simply click on the character you need to insert it into your text. You can then copy and paste your
                text into any application that supports Unicode text.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-64 order-first lg:order-last">
          <SidebarNav currentTool="languages/french" />
        </div>
      </div>
    </LayoutWrapper>
  )
}

