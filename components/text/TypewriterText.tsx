'use client'

import React, { useState, useEffect, useRef } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  cursor?: boolean
  className?: string
  onComplete?: () => void
}

export function TypewriterText({
  text,
  speed = 50,
  cursor = true,
  className = '',
  onComplete,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const hasCompleted = useRef(false)
  const onCompleteRef = useRef(onComplete)

  // Update ref when onComplete changes
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  // Typewriter effect
  useEffect(() => {
    hasCompleted.current = false
    setDisplayText('')
    
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        if (!hasCompleted.current && onCompleteRef.current) {
          hasCompleted.current = true
          onCompleteRef.current()
        }
      }
    }, speed)

    return () => {
      clearInterval(timer)
    }
  }, [text, speed])

  // Cursor blink effect
  useEffect(() => {
    if (!cursor) return
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [cursor])

  return (
    <span className={className}>
      {displayText}
      {cursor && showCursor && <span className="opacity-100">█</span>}
    </span>
  )
}
