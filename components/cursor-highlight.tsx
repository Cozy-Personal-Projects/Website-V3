"use client"

import React, { useEffect, useRef, useState } from "react"

export function CursorHighlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const requestRef = useRef<number | undefined>(undefined)
  const cursorRef = useRef<HTMLDivElement>(null)
  const styleTagRef = useRef<HTMLStyleElement | null>(null)

  // Track mouse position
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  // Listen for hover on CTA buttons (fix flicker by tracking enter/leave on document and using a global flag)
  useEffect(() => {
    let isHovering = false
    let lastTarget: HTMLElement | null = null

    const handlePointerMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest(".interactive-cta-cursor")
      if (target && !isHovering) {
        isHovering = true
        setHovering(true)
      } else if (!target && isHovering) {
        isHovering = false
        setHovering(false)
      }
      lastTarget = target
    }

    document.addEventListener("pointermove", handlePointerMove)
    return () => {
      document.removeEventListener("pointermove", handlePointerMove)
    }
  }, [])

  // Animate cursor position and scale
  useEffect(() => {
    let lastX = pos.x
    let lastY = pos.y
    let lastScale = 1
    const animate = () => {
      if (cursorRef.current) {
        lastX += (pos.x - lastX) * 0.25
        lastY += (pos.y - lastY) * 0.25
        const targetScale = hovering ? 1.25 : 1
        lastScale += (targetScale - lastScale) * 0.18
        cursorRef.current.style.transform = `translate3d(${lastX - 12}px, ${lastY - 12}px, 0) scale(${lastScale})`
      }
      requestRef.current = requestAnimationFrame(animate)
    }
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [pos.x, pos.y, hovering])

  // Hide native cursor always, even when hovering buttons
  useEffect(() => {
    // Remove old style if present
    if (styleTagRef.current) {
      document.head.removeChild(styleTagRef.current)
      styleTagRef.current = null
    }
    // Add new style
    const style = document.createElement("style")
    style.innerHTML = `
      html, body, * { cursor: none !important; }
    `
    document.head.appendChild(style)
    styleTagRef.current = style
    return () => {
      if (styleTagRef.current) {
        document.head.removeChild(styleTagRef.current)
        styleTagRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        background: "rgba(255,255,255,0.13)",
        border: "2px solid rgba(255,255,255,0.25)",
        boxShadow: "0 0 16px 2px rgba(255,255,255,0.10)",
        transition: "background 0.2s, border 0.2s, width 0.2s, height 0.2s, transform 0.18s cubic-bezier(.4,2,.6,1)",
        backdropFilter: "blur(2px)",
        mixBlendMode: "exclusion",
      }}
    />
  )
}
