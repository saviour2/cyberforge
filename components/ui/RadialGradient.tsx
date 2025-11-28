'use client'

import React from 'react'

/**
 * RadialGradient background component
 */
export const RadialGradient: React.FC = () => {
  return (
    <div
      className="absolute inset-0 bg-radial-void"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 100%)',
      }}
    />
  )
}
