"use client"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function GridBackground() {
  const [mounted, setMounted] = useState(false)
  const [filledCells, setFilledCells] = useState<{ [key: string]: boolean }>({})
  const [isParty, setIsParty] = useState(false)

  const getGridDimensions = () => {
    if (typeof window === "undefined") return { cols: 20, rows: 10 }
    const cols = Math.ceil(window.innerWidth / 60)
    const rows = Math.ceil(window.innerHeight / 60)
    return { cols, rows }
  }

  const generateRandomCells = () => {
    const { cols, rows } = getGridDimensions()
    const newFilledCells: { [key: string]: boolean } = {}
    const totalCells = cols * rows
    const fillCount = Math.floor(totalCells * 0.15)

    while (Object.keys(newFilledCells).length < fillCount) {
      const x = Math.floor(Math.random() * cols)
      const y = Math.floor(Math.random() * rows)
      newFilledCells[`${x}-${y}`] = true
    }
    return newFilledCells
  }

  useEffect(() => {
    setMounted(true)
    setFilledCells(generateRandomCells())

    const handleResize = () => {
      setFilledCells(generateRandomCells())
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const body = document.body
    const observer = new MutationObserver(() => {
      setIsParty(body.classList.contains("party-mode"))
    })

    observer.observe(body, { attributes: true, attributeFilter: ["class"] })
    setIsParty(body.classList.contains("party-mode"))

    return () => observer.disconnect()
  }, [])

  if (!mounted) return null

  const renderCells = () => {
    const cells = []
    const { cols, rows } = getGridDimensions()
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const isActive = filledCells[`${x}-${y}`]
        cells.push(
          <div
            key={`${x}-${y}`}
            className={cn(
              "absolute w-[58px] h-[58px] transition-opacity duration-500",
              isActive ? "bg-gray-800/10" : "bg-transparent"
            )}
            style={{
              left: `${x * 60 + 2}px`,
              top: `${y * 60 + 2}px`,
            }}
          />
        )
      }
    }
    return cells
  }
return (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
    {renderCells()}
      <>
        {/* Normal orange side glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-orange-500/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/10"></div>
      </>
  </div>
)
}