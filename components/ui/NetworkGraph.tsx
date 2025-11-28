'use client'

import React from 'react'

/**
 * NetworkGraph - Animated nodes and connections for OSINT background
 */
export const NetworkGraph: React.FC<{ className?: string }> = ({ className = '' }) => {
  const nodes = [
    { x: 10, y: 20 },
    { x: 30, y: 10 },
    { x: 50, y: 25 },
    { x: 70, y: 15 },
    { x: 90, y: 30 },
    { x: 20, y: 60 },
    { x: 45, y: 70 },
    { x: 80, y: 65 },
  ]

  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Connections */}
      {nodes.map((node, i) => 
        nodes.slice(i + 1).map((target, j) => (
          <line
            key={`${i}-${j}`}
            x1={node.x}
            y1={node.y}
            x2={target.x}
            y2={target.y}
            stroke="currentColor"
            strokeWidth="0.2"
            opacity="0.3"
            className="text-osint-primary"
          />
        ))
      )}
      
      {/* Nodes */}
      {nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="1"
          fill="currentColor"
          className="text-osint-primary"
          opacity="0.6"
        />
      ))}
    </svg>
  )
}
