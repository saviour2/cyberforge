'use client'

import React from 'react'

/**
 * ScanlineOverlay - Horizontal moving line for Offensive cards
 */
export const ScanlineOverlay: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-[2px] bg-offensive-primary/50 animate-scanline ${className}`}
      style={{
        boxShadow: '0 0 10px rgba(255, 0, 85, 0.5)',
      }}
    />
  )
}
