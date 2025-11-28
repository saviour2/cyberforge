'use client'

import React, { useEffect, useState } from 'react'
import { clsx } from 'clsx'

/**
 * GlitchText component - Creates cyberpunk text effect with RGB channel separation
 * and random displacement. Triggers glitch effect intermittently.
 */
interface GlitchTextProps {
  children: React.ReactNode
  variant?: 'hero' | 'heading' | 'inline'
  className?: string
  glitchInterval?: number // milliseconds between glitch effects
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  variant = 'heading',
  className,
  glitchInterval = 4000,
}) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 300)
    }, glitchInterval)

    return () => clearInterval(interval)
  }, [glitchInterval])

  const variants = {
    hero: 'text-hero font-display font-bold',
    heading: 'text-section font-display',
    inline: 'text-body font-display font-semibold',
  }

  return (
    <span
      className={clsx(
        'relative inline-block',
        variants[variant],
        isGlitching && 'animate-glitch',
        className
      )}
      style={{
        textShadow: isGlitching
          ? '2px 0 0 rgba(255, 0, 110, 0.7), -2px 0 0 rgba(0, 255, 157, 0.7)'
          : '2px 0 0 rgba(255, 0, 110, 0.3), -2px 0 0 rgba(0, 255, 157, 0.3)',
      }}
    >
      {children}
    </span>
  )
}
