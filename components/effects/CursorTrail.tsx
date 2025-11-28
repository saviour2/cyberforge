'use client'

import React, { useEffect, useRef, useState } from 'react'

interface CursorTrailProps {
  length?: number
  color?: string
  glowSize?: number
  className?: string
}

interface TrailPoint {
  x: number
  y: number
  timestamp: number
}

export function CursorTrail({
  length = 20,
  color = 'rgba(88, 166, 255, 0.5)',
  glowSize = 30,
  className = '',
}: CursorTrailProps) {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const trailRef = useRef<TrailPoint[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      }

      trailRef.current = [newPoint, ...trailRef.current].slice(0, length)
      setTrail([...trailRef.current])
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Clean up old points
    const interval = setInterval(() => {
      const now = Date.now()
      trailRef.current = trailRef.current.filter(
        (point) => now - point.timestamp < 1000
      )
      setTrail([...trailRef.current])
    }, 50)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(interval)
    }
  }, [length])

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: 1 }}>
      {trail.map((point, index) => {
        const opacity = 1 - index / length
        const size = (glowSize * (1 - index / length)) / 3

        return (
          <div
            key={`${point.x}-${point.y}-${index}`}
            className="absolute rounded-full"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              backgroundColor: color,
              opacity: opacity * 0.6,
              boxShadow: `0 0 ${glowSize}px ${glowSize / 2}px ${color}`,
              transition: 'all 0.1s ease-out',
            }}
          />
        )
      })}
    </div>
  )
}
