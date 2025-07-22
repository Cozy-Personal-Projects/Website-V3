"use client"

import type React from "react"
import { useState, useRef, type MouseEvent } from "react"

interface InteractiveButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
  onClick?: () => void
}

export function InteractiveButton({ children, className = "", variant = "primary", onClick }: InteractiveButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const baseClasses =
    variant === "primary"
      ? "relative bg-orange-500 border-2 border-orange-400 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 px-10 py-3"
      : "relative border-2 border-white/30 text-white rounded-full bg-transparent overflow-hidden transition-all duration-300 hover:scale-105 px-10 py-3"

  return (
    <button
      ref={buttonRef}
      className={`${baseClasses} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className="relative z-10 transition-colors duration-300">{children}</span>

      {/* Different hover effects for variants */}
      {variant === "primary" && (
        <div
          className={`absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        ></div>
      )}

      {variant === "secondary" && (
        <div
          className={`absolute inset-0 backdrop-blur-sm bg-white/10 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        ></div>
      )}

      {/* Mouse-following highlight - More transparent */}
      {isHovered && (
        <div
          className="absolute w-10 h-10 border-2 border-orange-300 rounded-full opacity-30 pointer-events-none"
          style={{
            left: mousePosition.x - 20,
            top: mousePosition.y - 20,
            transition: "none",
          }}
        />
      )}
    </button>
  )
}
