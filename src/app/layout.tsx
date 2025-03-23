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
  metadataBase: new URL("https://typekit.pages.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TypeIt - Type special characters and symbols online",
    description:
      "An online tool to type accent marks, diacritics, mathematical symbols, and special characters from various languages",
    url: "https://typekit.pages.dev",
    siteName: "TypeIt",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/equal-greater-than-symbol_3032296.png",
        width: 512,
        height: 512,
        alt: "TypeIt Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TypeIt - Type special characters and symbols online",
    description:
      "An online tool to type accent marks, diacritics, mathematical symbols, and special characters from various languages",
    images: ["/equal-greater-than-symbol_3032296.png"],
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
    google: "1YvWzwVeCxXiSbtPL-G-q3YaxQVQ5_aZYl6y3Ht3yxM",
    yandex: "YOUR_YANDEX_VERIFICATION_ID",
    yahoo: "YOUR_YAHOO_VERIFICATION_ID",
    other: {
      me: ["YOUR_EMAIL_OR_LINK"],
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ff5c39" },
    { media: "(prefers-color-scheme: dark)", color: "#ff5c39" },
  ],
  appleWebApp: {
    title: "TypeIt",
    statusBarStyle: "black-translucent",
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
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-54KXP338MC" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-54KXP338MC');
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

