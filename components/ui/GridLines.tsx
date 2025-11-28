'use client'

import React from 'react'

/**
 * GridLines component - Animated surveillance-style grid overlay
 */
export const GridLines: React.FC = () => {
  return (
    <div
      className="absolute inset-0 grid-lines opacity-20 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
    />
  )
}
