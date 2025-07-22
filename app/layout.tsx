import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./style.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GridBackground } from "@/components/grid-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "COZY Design",
  description: "Design portfolio showcasing unique digital experiences",
    generator: 'v0.dev'
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
            <div className="relative z-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
