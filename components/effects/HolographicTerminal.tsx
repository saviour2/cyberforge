'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { TypewriterText } from '@/components/text/TypewriterText'

interface HolographicTerminalProps {
  className?: string
}

export function HolographicTerminal({ className = '' }: HolographicTerminalProps) {
  // Simple state: 'line1', 'line2', 'line3', or 'complete'
  const [currentLine, setCurrentLine] = useState<'line1' | 'line2' | 'line3' | 'complete'>('line1')
  const [line3Animated, setLine3Animated] = useState(false)
  const resetTimeoutRef = useRef<NodeJS.Timeout>()

  // Reset to beginning
  const resetAnimation = useCallback(() => {
    setCurrentLine('line1')
    setLine3Animated(false)
  }, [])

  // Set up the reset timer
  useEffect(() => {
    if (currentLine === 'complete') {
      resetTimeoutRef.current = setTimeout(resetAnimation, 5000)
    }
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current)
      }
    }
  }, [currentLine, resetAnimation])

  const handleLine1Complete = useCallback(() => {
    setTimeout(() => {
      setCurrentLine('line2')
    }, 1000)
  }, [])

  const handleLine2Complete = useCallback(() => {
    setTimeout(() => {
      setCurrentLine('line3')
      // Trigger popup animation after render
      setTimeout(() => {
        setLine3Animated(true)
      }, 50)
    }, 1000)
  }, [])

  const handleLine3Complete = useCallback(() => {
    setCurrentLine('complete')
  }, [])

  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto max-w-2xl bg-black/40 backdrop-blur-xl border border-blue-500/30 rounded-lg overflow-hidden">
        {/* Scanline Effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(88, 166, 255, 0.1) 0px, transparent 2px, transparent 4px)',
            animation: 'scan-line 2s linear infinite',
          }}
        />

        {/* RGB Edge Glow */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-red-500/20 via-green-500/20 to-blue-500/20 rounded-lg blur-sm opacity-50" />

        {/* Window Controls */}
        <div className="relative flex items-center gap-2 px-4 py-3 bg-blue-500/5 border-b border-blue-500/20">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-gray-500 font-mono">cyberforge-terminal</span>
        </div>

        {/* Terminal Content */}
        <div className="relative p-6 font-mono text-sm min-h-[140px]">
          {/* Line 1: Always visible when at line1 or beyond */}
          {currentLine !== 'line1' ? (
            <div className="flex items-start gap-2 text-blue-400">
              <span className="text-green-400">$</span>
              <span>systemctl status cyberforge</span>
            </div>
          ) : (
            <div className="flex items-start gap-2 text-blue-400">
              <span className="text-green-400">$</span>
              <TypewriterText
                key="line1"
                text="systemctl status cyberforge"
                speed={70}
                cursor={false}
                onComplete={handleLine1Complete}
              />
            </div>
          )}

          {/* Line 2: Only visible from line2 onwards */}
          {currentLine !== 'line1' && (
            <div className="mt-4">
              {currentLine === 'line2' ? (
                <div className="flex items-center gap-2">
                  <span className="text-green-400">●</span>
                  <TypewriterText
                    key="line2"
                    text="Active: 15 TOOLS OPERATIONAL"
                    speed={60}
                    cursor={false}
                    className="text-green-400"
                    onComplete={handleLine2Complete}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-green-400">●</span>
                  <span className="text-green-400">Active: 15 TOOLS OPERATIONAL</span>
                </div>
              )}
            </div>
          )}

          {/* Line 3: Only visible from line3 onwards, with popup animation */}
          {(currentLine === 'line3' || currentLine === 'complete') && (
            <div
              className={`mt-2 ml-4 transition-all duration-500 ${
                line3Animated ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-2'
              }`}
            >
              {currentLine === 'line3' ? (
                <TypewriterText
                  key="line3"
                  text="└─ DEFENSIVE: 5 | OFFENSIVE: 5 | OSINT: 5"
                  speed={50}
                  cursor={true}
                  className="text-blue-300"
                  onComplete={handleLine3Complete}
                />
              ) : (
                <span className="text-blue-300">
                  └─ DEFENSIVE: 5 | OFFENSIVE: 5 | OSINT: 5
                </span>
              )}
            </div>
          )}
        </div>

        {/* Glitch Effect */}
        <div
          className="absolute inset-0 bg-blue-500/5 opacity-0 pointer-events-none mix-blend-screen"
          style={{
            animation: 'glitch-flash 0.3s ease-in-out infinite',
            animationDelay: '10s',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes glitch-flash {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

