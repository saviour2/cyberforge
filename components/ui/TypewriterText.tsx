'use client'

import React, { useEffect, useState } from 'react'

/**
 * TypewriterText component - Terminal-style typing animation
 */
interface TypewriterTextProps {
  text: string
  speed?: number // milliseconds per character
  className?: string
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={`font-mono ${className}`}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">_</span>
      )}
    </span>
  )
}
