'use client'

import React, { ReactNode } from 'react'

interface CornerHUDProps {
  children: ReactNode
  className?: string
}

interface CornerProps {
  children: ReactNode
  className?: string
}

export function CornerHUD({ children, className = '' }: CornerHUDProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none z-50 ${className}`}>
      {children}
    </div>
  )
}

export function TopLeft({ children, className = '' }: CornerProps) {
  return (
    <div className={`absolute top-6 left-6 pointer-events-auto ${className}`}>
      {children}
    </div>
  )
}

export function TopRight({ children, className = '' }: CornerProps) {
  return (
    <div className={`absolute top-6 right-6 pointer-events-auto ${className}`}>
      {children}
    </div>
  )
}

export function BottomLeft({ children, className = '' }: CornerProps) {
  return (
    <div className={`absolute bottom-6 left-6 pointer-events-auto ${className}`}>
      {children}
    </div>
  )
}

export function BottomRight({ children, className = '' }: CornerProps) {
  return (
    <div className={`absolute bottom-6 right-6 pointer-events-auto ${className}`}>
      {children}
    </div>
  )
}
