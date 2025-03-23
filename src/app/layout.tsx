import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "TypeIt - Type special characters and symbols online",
    template: "%s | TypeIt",
  },
  description:
    "An online tool to type accent marks, diacritics, mathematical symbols, and special characters from various languages",
  keywords: [
    "special characters",
    "accent marks",
    "diacritics",
    "mathematical symbols",
    "online keyboard",
    "typing tool",
  ],
  authors: [{ name: "TypeIt Team" }],
  creator: "TypeIt",
  publisher: "TypeIt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://typeit-clone.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TypeIt - Type special characters and symbols online",
    description:
      "An online tool to type accent marks, diacritics, mathematical symbols, and special characters from various languages",
    url: "https://typeit-clone.vercel.app",
    siteName: "TypeIt",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TypeIt - Type special characters and symbols online",
    description:
      "An online tool to type accent marks, diacritics, mathematical symbols, and special characters from various languages",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_ID",
    yandex: "YOUR_YANDEX_VERIFICATION_ID",
    yahoo: "YOUR_YAHOO_VERIFICATION_ID",
    other: {
      me: ["YOUR_EMAIL_OR_LINK"],
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

