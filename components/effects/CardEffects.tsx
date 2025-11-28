'use client'

import React from 'react'

interface HexagonalGlowProps {
  color?: string
  pulseSpeed?: number
  className?: string
}

export function HexagonalGlow({ color = '#58a6ff', pulseSpeed = 2, className = '' }: HexagonalGlowProps) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        animation: `pulse-glow ${pulseSpeed}s ease-in-out infinite`,
      }}
    />
  )
}

interface GridPatternProps {
  size?: number
  color?: string
  className?: string
}

export function GridPattern({ size = 20, color = '#58a6ff', className = '' }: GridPatternProps) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${color} 1px, transparent 1px),
          linear-gradient(to bottom, ${color} 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  )
}

interface OrbitingDotsProps {
  count?: number
  color?: string
  radius?: number
  speed?: number
  className?: string
}

export function OrbitingDots({
  count = 3,
  color = '#58a6ff',
  radius = 35,
  speed = 5,
  className = '',
}: OrbitingDotsProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
            animation: `orbit ${speed}s linear infinite`,
            animationDelay: `${(i * speed) / count}s`,
            transformOrigin: `0 0`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(${radius}px);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(${radius}px);
          }
        }
      `}</style>
    </div>
  )
}

interface SignalStrengthProps {
  level?: number
  color?: string
  className?: string
}

export function SignalStrength({ level = 5, color = '#7ee787', className = '' }: SignalStrengthProps) {
  return (
    <div className={`flex items-end gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="w-1 transition-all duration-300"
          style={{
            height: `${(i + 1) * 3}px`,
            backgroundColor: i < level ? color : 'rgba(255,255,255,0.1)',
            boxShadow: i < level ? `0 0 4px ${color}` : 'none',
          }}
        />
      ))}
    </div>
  )
}

interface ScanRevealProps {
  direction?: 'horizontal' | 'vertical'
  className?: string
}

export function ScanReveal({ direction = 'horizontal', className = '' }: ScanRevealProps) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent ${className}`}
      style={{
        animation: direction === 'horizontal' ? 'scan-reveal-h 1s ease-out' : 'scan-reveal-v 1s ease-out',
        animationFillMode: 'forwards',
        opacity: 0,
      }}
    >
      <style jsx>{`
        @keyframes scan-reveal-h {
          0% {
            transform: translateX(-100%);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        @keyframes scan-reveal-v {
          0% {
            transform: translateY(-100%);
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
