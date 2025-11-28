'use client'

import React from 'react'

/**
 * CornerBrackets - Cyberpunk UI corner decorations
 */
export const CornerBrackets: React.FC<{ className?: string; color?: string }> = ({ 
  className = '',
  color = 'rgba(88, 166, 255, 0.3)'
}) => {
  return (
    <>
      {/* Top Left */}
      <div 
        className={`absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 pointer-events-none ${className}`}
        style={{ borderColor: color }}
      />
      
      {/* Top Right */}
      <div 
        className={`absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 pointer-events-none ${className}`}
        style={{ borderColor: color }}
      />
      
      {/* Bottom Left */}
      <div 
        className={`absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 pointer-events-none ${className}`}
        style={{ borderColor: color }}
      />
      
      {/* Bottom Right */}
      <div 
        className={`absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 pointer-events-none ${className}`}
        style={{ borderColor: color }}
      />
    </>
  )
}
