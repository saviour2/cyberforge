'use client'

import React from 'react'

/**
 * Crosshair - Target reticle for OSINT cards
 */
export const Crosshair: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" className="text-osint-primary">
        <circle
          cx="20"
          cy="20"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle
          cx="20"
          cy="20"
          r="2"
          fill="currentColor"
        />
        <line x1="20" y1="0" x2="20" y2="10" stroke="currentColor" strokeWidth="1" />
        <line x1="20" y1="30" x2="20" y2="40" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="1" />
        <line x1="30" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  )
}
