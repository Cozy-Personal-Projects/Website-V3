import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/style.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GridBackground } from "@/components/grid-background"
import { CursorHighlight } from "@/components/cursor-highlight"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cozys Designs",
  description: "Design portfolio showcasing my work in UI/UX, web design, and digital products.",
    generator: 'v0.dev',
    other: {
      "darkreader-lock": "true",
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-black relative">
            <GridBackground />
            <CursorHighlight />
            <div className="relative z-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
