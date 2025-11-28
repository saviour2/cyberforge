import React from 'react'
import { clsx } from 'clsx'

/**
 * Button component with cyberpunk styling and variants
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-neon-cyan text-void hover:bg-neon-cyan/90 border-glow',
    secondary: 'bg-navy text-neon-cyan border border-neon-cyan/50 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]',
    ghost: 'text-off-white hover:text-neon-cyan hover:bg-navy/50',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
