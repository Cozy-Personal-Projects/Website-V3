"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { InteractiveButton } from "./interactive-button"

interface ContactButtonProps {
  children: React.ReactNode
  className?: string
}

export function ContactButton({ children, className }: ContactButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push("/contact")
    // Small delay to ensure navigation happens first
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  return (
    <InteractiveButton className={className} onClick={handleClick}>
      {children}
    </InteractiveButton>
  )
}
