'use client'

import React from 'react'

/**
 * RadarSweep - Circular radar sweep animation
 */
export const RadarSweep: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
      <div className="relative w-full h-full">
        {/* Radar circles */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-defensive-primary/20"
            style={{
              transform: `scale(${0.25 + i * 0.25})`,
            }}
          />
        ))}
        
        {/* Sweeping line */}
        <div className="absolute top-1/2 left-1/2 w-full h-[2px] origin-left animate-radar-sweep">
          <div 
            className="h-full w-full"
            style={{
              background: 'linear-gradient(90deg, rgba(88, 166, 255, 0) 0%, rgba(88, 166, 255, 0.5) 50%, rgba(88, 166, 255, 0) 100%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
