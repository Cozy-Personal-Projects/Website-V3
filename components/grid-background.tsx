"use client"

export function GridBackground() {
  // Generate filled squares spread across the entire screen (20% coverage)
  const filledSquares = [
    { x: 2, y: 3 },
    { x: 7, y: 1 },
    { x: 4, y: 6 },
    { x: 11, y: 4 },
    { x: 1, y: 8 },
    { x: 9, y: 7 },
    { x: 6, y: 2 },
    { x: 13, y: 5 },
    { x: 3, y: 9 },
    { x: 8, y: 3 },
    { x: 12, y: 8 },
    { x: 5, y: 1 },
    { x: 10, y: 6 },
    { x: 1, y: 4 },
    { x: 14, y: 2 },
    { x: 6, y: 9 },
    { x: 9, y: 1 },
    { x: 4, y: 7 },
    { x: 11, y: 3 },
    { x: 7, y: 8 },
    // Add more squares across the right side
    { x: 15, y: 1 },
    { x: 18, y: 4 },
    { x: 16, y: 7 },
    { x: 20, y: 2 },
    { x: 17, y: 9 },
    { x: 19, y: 5 },
    { x: 21, y: 8 },
    { x: 22, y: 3 },
    { x: 24, y: 6 },
    { x: 23, y: 1 },
    { x: 25, y: 4 },
    { x: 26, y: 7 },
    { x: 28, y: 2 },
    { x: 27, y: 9 },
    { x: 29, y: 5 },
  ]

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Filled squares - dark and barely visible */}
      {filledSquares.map((square, index) => (
        <div
          key={index}
          className="absolute w-[58px] h-[58px] bg-gray-800/10"
          style={{
            left: `${square.x * 60 + 2}px`,
            top: `${square.y * 60 + 2}px`,
          }}
        />
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-orange-500/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/10"></div>
    </div>
  )
}
