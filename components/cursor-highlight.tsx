"use client"

import React, { useEffect, useRef, useState } from "react"

export function CursorHighlight() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const currentX = useRef(0)
  const currentY = useRef(0)
  const currentScale = useRef(1)
  const targetScale = useRef(1)
  const isHovering = useRef(false)
  const rafRef = useRef<number | null>(null)
  const [showCursor, setShowCursor] = useState(false)

  // Detect if device is touch-enabled
  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches

    if (!isTouchDevice) {
      setShowCursor(true)
    }
  }, [])

  // Update target position on mouse move
  useEffect(() => {
    if (!showCursor) return
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [showCursor])

  // Detect hovering over interactive elements
  useEffect(() => {
    if (!showCursor) return
    const handlePointerMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest(".interactive-cta-cursor")
      const hoverNow = !!el
      if (hoverNow !== isHovering.current) {
        isHovering.current = hoverNow
        targetScale.current = hoverNow ? 1.25 : 1
      }
    }

    document.addEventListener("pointermove", handlePointerMove)
    return () => document.removeEventListener("pointermove", handlePointerMove)
  }, [showCursor])

  // Animate cursor smoothly
  useEffect(() => {
    if (!showCursor) return

    const animate = () => {
      currentX.current += (mouseX.current - currentX.current) * 0.2
      currentY.current += (mouseY.current - currentY.current) * 0.2
      currentScale.current += (targetScale.current - currentScale.current) * 0.15

      const el = cursorRef.current
      if (el) {
        el.style.transform = `translate3d(${currentX.current - 12}px, ${currentY.current - 12}px, 0) scale(${currentScale.current})`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [showCursor])

  // Hide system cursor
  useEffect(() => {
    if (!showCursor) return
    const style = document.createElement("style")
    style.innerHTML = `* { cursor: none !important; }`
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [showCursor])

  if (!showCursor) return null

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        pointerEvents: "none",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.13)",
        border: "2px solid rgba(255,255,255,0.25)",
        boxShadow: "0 0 16px 2px rgba(255,255,255,0.1)",
        mixBlendMode: "exclusion",
        backdropFilter: "blur(2px)",
        zIndex: 9999,
        transform: "translate3d(-9999px, -9999px, 0) scale(1)",
        transition: "background 0.2s, border 0.2s",
      }}
    />
  )
}
