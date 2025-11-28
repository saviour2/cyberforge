import React from 'react'
import { clsx } from 'clsx'

/**
 * Card component with glass effect and glow border
 */
interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'terminal'
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hover = true,
}) => {
  const baseStyles = 'rounded-lg p-6 transition-all duration-300'
  
  const variants = {
    default: 'bg-navy border-glow',
    glass: 'glass-effect',
    terminal: 'bg-void border border-neon-cyan/30 terminal-shadow',
  }
  
  const hoverStyles = hover ? 'hover:scale-[1.02] hover:-translate-y-1' : ''

  return (
    <div className={clsx(baseStyles, variants[variant], hoverStyles, className)}>
      {children}
    </div>
  )
}
