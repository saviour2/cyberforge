'use client'

import React, { ReactNode, useState } from 'react'

interface ChromaticTextProps {
  children: ReactNode
  mouseReactive?: boolean
  separationIntensity?: number
  className?: string
}

export function ChromaticText({
  children,
  mouseReactive = true,
  separationIntensity = 3,
  className = '',
}: ChromaticTextProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mouseReactive) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * separationIntensity
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * separationIntensity

    setOffset({ x, y })
  }

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 })
  }

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Red channel */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-80 text-red-500"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>

      {/* Green channel */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-80 text-green-500"
        style={{
          transform: `translate(${-offset.x / 2}px, ${-offset.y / 2}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>

      {/* Blue channel */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-80 text-blue-500"
        style={{
          transform: `translate(${-offset.x}px, ${-offset.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>

      {/* Original text */}
      <div className="relative">{children}</div>
    </div>
  )
}
