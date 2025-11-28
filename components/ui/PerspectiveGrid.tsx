'use client'

import React from 'react'

/**
 * PerspectiveGrid - 3D Tron-style grid background
 */
export const PerspectiveGrid: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        background: `
          linear-gradient(90deg, rgba(88, 166, 255, 0.1) 1px, transparent 1px),
          linear-gradient(rgba(88, 166, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center bottom',
      }}
    />
  )
}
