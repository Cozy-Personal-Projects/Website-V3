"use client"

import type React from "react"

import { InteractiveButton } from "./interactive-button"

interface ScrollToTopButtonProps {
  children: React.ReactNode
  className?: string
}

export function ScrollToTopButton({ children, className }: ScrollToTopButtonProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <InteractiveButton className={className} onClick={scrollToTop}>
      {children}
    </InteractiveButton>
  )
}
