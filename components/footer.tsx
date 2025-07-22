"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

export function Footer() {
  const router = useRouter()
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-zinc-950/80 backdrop-blur-sm border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Brand and description */}
          <div className="space-y-4">
            <div className="text-3xl font-black tracking-wider">
              {/* Logo clickable, scrolls to top */}
              <img
                src="/cozy-navbar.webp"
                alt="Cozy logo"
                className="h-10 w-auto inline cursor-pointer"
                onClick={handleLogoClick}
              />
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Creating unique digital experiences through beautiful design and innovation. Let's build
              something amazing together.
            </p>
          </div>

          {/* Right side - Quick Links */}
          <div className="md:text-right">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/designs" className="block text-gray-400 hover:text-white transition-colors">
                Designs
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-zinc-900 mt-8 pt-6">
          <p className="text-gray-500 text-sm">© Copyright 2025. All Rights Reserved by Cozy. Designed with V0.dev!</p>
        </div>
      </div>
    </footer>
  )
}