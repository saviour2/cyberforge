'use client'

import React from 'react'

interface AnimatedGridLayerProps {
  rotation?: number
  speed?: number
  perspective?: number
  color?: string
  className?: string
}

export function AnimatedGridLayer({
  rotation = 0.1,
  speed = 20,
  perspective = 1000,
  color = 'rgba(88, 166, 255, 0.3)',
  className = '',
}: AnimatedGridLayerProps) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${color} 1px, transparent 1px),
            linear-gradient(to bottom, ${color} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'rotateX(60deg) rotateZ(0deg)',
          transformOrigin: 'center center',
          animation: `grid-rotate ${speed}s linear infinite`,
        }}
      />
      <style jsx>{`
        @keyframes grid-rotate {
          0% {
            transform: rotateX(60deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(60deg) rotateZ(${rotation * 360}deg);
          }
        }
      `}</style>
    </div>
  )
}
