'use client'

import React from 'react'

/**
 * ViewfinderCorners - Camera viewfinder corners for OSINT cards
 */
export const ViewfinderCorners: React.FC<{ color?: string; className?: string }> = ({ 
  color = '#00ffc8',
  className = '' 
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Top Left */}
      <div 
        className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2"
        style={{ borderColor: color }}
      />
      
      {/* Top Right */}
      <div 
        className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2"
        style={{ borderColor: color }}
      />
      
      {/* Bottom Left */}
      <div 
        className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2"
        style={{ borderColor: color }}
      />
      
      {/* Bottom Right */}
      <div 
        className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2"
        style={{ borderColor: color }}
      />
    </div>
  )
}
