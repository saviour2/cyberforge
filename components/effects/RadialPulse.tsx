'use client'

import React from 'react'

interface RadialPulseProps {
  center?: { x: string; y: string }
  rings?: number
  interval?: number
  color?: string
  className?: string
}

export function RadialPulse({
  center = { x: '50%', y: '50%' },
  rings = 5,
  interval = 3000,
  color = 'rgba(88, 166, 255, 0.1)',
  className = '',
}: RadialPulseProps) {
  return (
    <div className={`absolute ${className}`} style={{ left: center.x, top: center.y }}>
      {Array.from({ length: rings }).map((_, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: 0,
            height: 0,
            borderColor: color,
            borderWidth: 2,
            animation: `radial-pulse ${interval}ms ease-out infinite`,
            animationDelay: `${(i * interval) / rings}ms`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes radial-pulse {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 800px;
            height: 800px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
